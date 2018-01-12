import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { IUser } from './user.interface';
import { UserModel } from './user.model';

@Component()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: Model<IUser>,
  ) {}

  public async all(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  public async one(username: string): Promise<IUser> {
    return await this.userModel.findOne({username}).exec();
  }

  public async create(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  public async update(username: string, args: IUser): Promise<IUser> {
    return await this.userModel.findOneAndUpdate(username, args).exec();
  }

  public async delete(username: string): Promise<IUser> {
    return await this.userModel.findOneAndRemove(username).exec();
  }

}
