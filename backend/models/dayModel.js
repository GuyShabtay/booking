import mongoose from 'mongoose';

const daySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    date: {
      type: String,
    },
    availableHours: {
      type: [String],
    },
    takenHours: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Day = mongoose.model('Day', daySchema);

export default Day;