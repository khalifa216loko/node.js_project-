import http from 'http';
import axios from 'axios';
import dotenv from 'dotenv';
import { create } from 'domain';

dotenv.config();
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running!');
  });
 //create serv//
  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || 'localhost';
  / serv str/
  server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
  });
  async function apiCall() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
      const jsonFilePath = './data.json';
      // Write data to JSON file
      const fs = require('fs');
      fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
      console.log('Data has been written to data.json');
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the function
  apiCall();
  