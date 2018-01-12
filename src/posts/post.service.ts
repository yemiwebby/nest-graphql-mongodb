import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './post.dto';
import { IPost } from './post.interface';
import { PostModel } from './post.model';

@Component()
export class PostService {
  constructor(
    @InjectModel(PostModel) private readonly postModel: Model<IPost>,
  ) {}

  public async all(): Promise<IPost[]> {
    return this.postModel.find().exec();
  }

  public async one(slug: string): Promise<IPost> {
    return await this.postModel.findOne({ slug }).exec();
  }

  public async create(createPostDto: CreatePostDto): Promise<IPost> {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }

  public async update(slug: string, args: IPost): Promise<IPost> {
    return await this.postModel.findOneAndUpdate(slug, args).exec();
  }

  public async delete(slug: string): Promise<IPost> {
    return await this.postModel.findOneAndRemove(slug).exec();
  }

}
