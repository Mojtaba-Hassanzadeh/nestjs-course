import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop()
  @IsString()
  email: string;

  @Prop([String])
  roles: string[];

  @Prop()
  @IsString()
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
