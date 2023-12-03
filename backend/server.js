import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import hours from './data/hours.js'


const port = process.env.PORT || 5000;
const app = express();
app.get('/', (req, res) => {
res.send('API is running...');
});
app.get('/api/hours', (req, res) => {
res.json(hours);
});
app.get('/api/hours/:id', (req, res) => {
  const hour = hours.find((u) => u._id=== req.params.id);
  res.json (hour);
  });
app.listen(port, () => console.log(`Server running on port ${port}`));