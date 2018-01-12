import { Schema } from 'mongoose';

export const PostModel = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: Date,
  slug: String,
  title: String,
  updatedAt: Date,
});
