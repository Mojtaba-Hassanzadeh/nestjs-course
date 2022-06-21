import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from '../entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(@InjectModel('Lesson') private lessonsModel: Model<Lesson>) {}
  search(
    courseId: string,
    sortOrder: string,
    pageNumber: number,
    pageSize: number,
  ) {
    console.log(
      'searching for lessons ',
      courseId,
      sortOrder,
      pageNumber,
      pageSize,
    );
    return this.lessonsModel.find({ course: courseId }, null, {
      skip: pageSize * pageNumber,
      limit: pageSize,
      sort: {
        seqNo: sortOrder,
      },
    });
  }
}
