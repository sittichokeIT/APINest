/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { Course } from './course/entity/course.entity';
import { Student } from './student/entity/student.entity';
import { StudentModule } from './student/student.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/userstd1.db',
      entities: [Course,Student],
      synchronize: true
    }),
    CourseModule, StudentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
