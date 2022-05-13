/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './controller/student/student.controller';
import { Student } from './entity/student.entity';
import { StudentService } from './services/student/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
