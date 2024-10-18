// parse-csv.mjs
import csv from 'csvtojson';
import { promises as fs } from 'fs';

const csvFilePath = './src/data/TestData.csv';
const jsonFilePath = './src/data/output.json';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    return fs.writeFile(jsonFilePath, JSON.stringify(jsonObj, null, 2));
  })
  .then(() => {
    console.log('CSV file successfully converted to JSON');
  })
  .catch((error) => {
    console.error('Error converting CSV to JSON:', error);
  });
