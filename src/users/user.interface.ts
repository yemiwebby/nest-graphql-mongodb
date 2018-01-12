import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly bio?: string;
  readonly createdAt: Date;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly lastName: string;
  readonly password: string;
  readonly profilePicture?: string;
  readonly updatedAt: Date;
  readonly username: string;
}
