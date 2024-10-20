import fs from 'fs';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const SECRET_KEY = 'adminwiki';

app.use(cors()); // 使用cors中间件
app.use(express.json());

app.post('/register', (req, res) => {
  console.log('Received register request:', req.body);
  const { username, password } = req.body;
  const user = { username, password };

  // 读取现有的用户数据
  fs.readFile('users.json', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
      return;
    }

    const users = data ? JSON.parse(data) : [];

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      res.writeHead(409, { 'Content-Type': 'application/json' }); // 409 Conflict
      res.end(JSON.stringify({ error: 'Username already exists' }));
      return;
    }

    users.push(user);

    // 将用户数据写入JSON文件
    fs.writeFile('users.json', JSON.stringify(users, null, 2), err => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    });
  });
});

app.post('/login', (req, res) => {
  console.log('Received login request:', req.body);
  const { username, password } = req.body;

  // 读取现有的用户数据
  fs.readFile('users.json', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

app.post('/favorites', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { item } = req.body;
    const username = decoded.username;
    const filePath = `favorites_${username}.json`;

    fs.readFile(filePath, (err, data) => {
      if (err && err.code !== 'ENOENT') {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const favorites = data ? JSON.parse(data) : [];
      // const itemExists = favorites.some(fav => fav.Enttry === item.Enttry);

      // if (itemExists) {
      //   return res.status(409).json({ error: 'Item already exists in favorites' });
      // }

      favorites.push( item );

      fs.writeFile(filePath, JSON.stringify(favorites, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        console.log('Favorites data added:', favorites);
        res.status(201).json({ message: 'Favorite added successfully' });
      });
    });
  });
});

app.get('/favorites', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const username = decoded.username; // 使用用户名
    const filePath = `favorites_${username}.json`;

    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // 如果文件不存在，返回空数组
          console.log('File not found, returning empty array');
          return res.status(200).json([]);
        } else {
          console.error('File read error:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }

      const favorites = JSON.parse(data);
      res.status(200).json(favorites);
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
