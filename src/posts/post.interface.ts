import { Document } from 'mongoose';
import { IUser } from '../users/user.interface';

export interface IPost extends Document {
  readonly author?: IUser;
  readonly createdAt?: Date;
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly updatedAt?: Date;
}
