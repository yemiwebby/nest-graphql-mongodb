import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { IPost } from './post.interface';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query('allPosts')
  public async allPosts(obj: any, args: any, context: any, info: any): Promise<IPost[]> {
    return await this.postService.all();
  }

  @Query('post')
  public async onePost(obj: any, args: IPost, context: any, info: any): Promise<IPost> {
    return await this.postService.one(args.slug);
  }

  @Mutation('createPost')
  public async createPost(obj: any, args: IPost, context: any, info: any): Promise<IPost> {
    return await this.postService.create(args);
  }

  @Mutation('updatePost')
  public async updatePost(obj: any, args: IPost, context: any, info: any): Promise<IPost> {
    return await this.postService.update(args.slug, args);
  }

  @Mutation('deletePost')
  public async deletePost(obj: any, args: IPost, context: any, info: any): Promise<IPost> {
    return await this.postService.delete(args.slug);
  }

}
