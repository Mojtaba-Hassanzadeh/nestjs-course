import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsInt, IsString } from 'class-validator';
import mongoose, { Document } from 'mongoose';
import { Course } from 'src/courses/entities/course.entity';

export type LessonDocument = Lesson & Document;

@Schema({ collection: 'lessons' })
export class Lesson {
  @Prop()
  @IsString()
  description: string;

  @Prop()
  @IsString()
  duration: string;

  @Prop()
  @IsInt({ message: 'Course id must be an integer' })
  seqNo: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  })
  course: Course;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
