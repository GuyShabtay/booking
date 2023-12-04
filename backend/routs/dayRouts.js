import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
// import {
//   getDays,
//   getDayById,
//   createDay,
//   updateDay,
//   deleteDay,
// } from '../controllers/dayController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';
// import checkObjectId from '../middleware/checkObjectId.js';
import Day from '../models/dayModel.js';

router.get('/', asyncHandler(async (req, res) => {
  const days = await Day.find({});
  res.json (days);
  }));
  
 router.get('/:date', asyncHandler(async (req, res) => {
  const day = await Day.findOne({ date: req.params.date });
  if (day) {
    return res.json(day);
  }
  res.status(404).json({ message: 'Day not found' });
}));

  export default router;