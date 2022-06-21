import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { Course } from 'src/courses/entities/course.entity';
import { CourseDocument } from '../schema/courses.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name)
    private readonly courseModel: Model<CourseDocument>,
  ) {}

  findAll() {
    return this.courseModel.find({});
  }

  findOne(id: string) {
    return this.courseModel.findById(id);
  }

  findCourseByUrl(courseUrl: string) {
    return this.courseModel.findOne({ url: courseUrl });
  }

  create(createCourseDto: CreateCourseDto) {
    return this.courseModel.create(createCourseDto);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(id, updateCourseDto);
  }
  آ;

  remove(id: string) {
    return this.courseModel.findByIdAndRemove(id);
  }
}
