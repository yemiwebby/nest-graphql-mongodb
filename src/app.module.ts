import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GQLModule } from './graphql/gql.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [ DatabaseModule, GQLModule, UserModule ],
})
export class ApplicationModule {}
