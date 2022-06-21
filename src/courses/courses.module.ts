import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course } from 'src/courses/entities/course.entity';
import { Lesson } from 'src/courses/entities/lesson.entity';
import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';
import { CourseSchema } from './schema/courses.schema';
import { LessonSchema } from './schema/lessons.schema';
import { LessonsService } from './services/lessons.service';
import { LessonsController } from './controllers/lessons.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: Lesson.name, schema: LessonSchema },
    ]),
  ],
  controllers: [CoursesController, LessonsController],
  providers: [CoursesService, LessonsService],
})
export class CoursesModule {}
