import {
  BadRequestException,
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { LessonsService } from '../services/lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private lessonsService: LessonsService) {}

  @Get()
  searchLesson(
    @Query('courseId') courseId: string,
    @Query('sortOrder') sortOrder: string = 'asc',
    @Query('pageNumber', ParseIntPipe) pageNumber = 0,
    @Query('pageSize', ParseIntPipe) pageSize = 3,
  ) {
    if (!courseId) {
      throw new BadRequestException('CourseId must be defined');
    }

    if (sortOrder != 'asc' && sortOrder != 'desc') {
      throw new BadRequestException('sortOrder must be asc or desc');
    }

    return this.lessonsService.search(
      courseId,
      sortOrder,
      pageNumber,
      pageSize,
    );
  }
}
