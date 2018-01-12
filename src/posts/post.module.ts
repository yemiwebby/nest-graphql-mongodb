import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel } from './post.model';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  components: [ PostService, PostResolver ],
  exports: [ PostService ],
  imports: [
    MongooseModule
      .forFeature([{ name: 'Post', schema: PostModel }]),
  ],
})
export class PostModule {}
