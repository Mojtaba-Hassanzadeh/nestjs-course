import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http.filter';
import { ToIntegerPipe } from 'src/pipes/to-integer.pipe';
import { CoursesService } from '../services/courses.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { AdminGuard } from 'src/guards/admin.guard';

@Controller('courses')
@UseGuards(AuthenticationGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':courseUrl')
  findCourseByUrl(@Param('courseUrl') courseUrl: string) {
    const course = this.coursesService.findCourseByUrl(courseUrl);
    if (!course) {
      throw new NotFoundException('could not find course for url ' + courseUrl);
    }
    return course;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  upddate(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    if (!id) {
      throw new BadRequestException('Cannot update course id');
    }
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
