import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  value: Number,
  isDone: Boolean,
  updatedAt: { type: Date, default: Date.now }
});

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default Item;
