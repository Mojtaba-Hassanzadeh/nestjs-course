import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({ collection: 'courses' })
export class Course {
  @Prop()
  seqNo: number;

  @Prop()
  url: string;

  @Prop()
  iconUrl: string;

  @Prop()
  courseListIcon: string;

  @Prop()
  description: string;

  @Prop()
  longDescription: string;

  @Prop()
  category: string;

  @Prop()
  lessonsCount: number;

  @Prop()
  promo: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
