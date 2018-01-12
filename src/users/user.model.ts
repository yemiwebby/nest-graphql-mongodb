import { Schema } from 'mongoose';

export const UserModel = new Schema({
  bio: String,
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  profilePicture: String,
  updatedAt: Date,
  username: String,
});
