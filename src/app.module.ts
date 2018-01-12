import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GQLModule } from './graphql/gql.module';
import { PostModule } from './posts/post.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [ DatabaseModule, GQLModule, UserModule, PostModule ],
})
export class ApplicationModule {}
