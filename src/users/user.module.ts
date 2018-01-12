import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  components: [ UserService, UserResolver ],
  exports: [ UserService ],
  imports: [
    MongooseModule
      .forFeature([{ name: 'User', schema: UserModel }]),
  ],
})
export class UserModule {}
