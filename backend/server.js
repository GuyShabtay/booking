import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import days from './data/days.js'
import connectDB from './config/db.js';
import dayRouts from './routs/dayRouts.js'


const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.get('/', (req, res) => {
res.send('API is running...');
});

app.use('/api/days', dayRouts);
// app.get('/api/days', (req, res) => {
// res.json(days);
// });
// app.get('/api/days/:id', (req, res) => {
//   const day = days.find((u) => u._id=== req.params.id);
//   res.json (day);
//   });
app.listen(port, () => console.log(`Server running on port ${port}`));