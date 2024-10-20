import fs from 'fs';
import cors from 'cors';
import express from 'express';

const app = express();
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
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
