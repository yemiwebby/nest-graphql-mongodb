import { IUser } from '../users/user.interface';

export class CreatePostDto {
  public readonly author: IUser;
  public readonly createdAt: Date;
  public readonly id: string;
  public readonly title: string;
  public readonly slug: string;
  public readonly updatedAt: Date;
}
