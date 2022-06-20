import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({ collection: 'courses' })
export class Course {
  @Prop()
  @IsInt({ message: 'Course id must be an integer' })
  seqNo: number;

  @Prop()
  @IsString({ always: false })
  url: string;

  @Prop()
  @IsString()
  iconUrl: string;

  @Prop()
  @IsString()
  courseListIcon: string;

  @Prop()
  @IsString()
  description: string;

  @Prop()
  @IsString()
  longDescription: string;

  @Prop()
  @IsString()
  category: string;

  @Prop()
  @IsInt()
  lessonsCount: number;

  @Prop()
  @IsBoolean()
  promo: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
