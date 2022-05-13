/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './controller/course/course.controller';
import { Course } from './entity/course.entity';
import { CourseService } from './services/course/course.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
