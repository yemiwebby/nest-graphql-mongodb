import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './user.dto';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('allUsers')
  public async allUsers(obj: any, args: any, context: any, info: any): Promise<IUser[]> {
    return await this.userService.all();
  }

  @Query('user')
  public async oneUser(obj: any, args: IUser, context: any, info: any): Promise<IUser> {
    return await this.userService.one(args.username);
  }

  @Mutation('createUser')
  public async createUser(obj: any, args: IUser, context: any, info: any): Promise<IUser> {
    return await this.userService.create(args);
  }

  @Mutation('updateUser')
  public async updateUser(obj: any, args: IUser, context: any, info: any): Promise<IUser> {
    return await this.userService.update(args.username, args);
  }

  @Mutation('deleteUser')
  public async deleteUser(obj: any, args: IUser, context: any, info: any): Promise<IUser> {
    return await this.userService.delete(args.username);
  }

}
