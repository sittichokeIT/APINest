/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDto } from 'src/course/dto/course.dto/course-dto';
import { Course } from 'src/course/entity/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
    public courses: CourseDto[] = []

    constructor(
        @InjectRepository(Course)
        private courseRepo: Repository<Course>
    ){}

    create(courses: CourseDto): Promise<CourseDto> {
        return this.courseRepo.save(courses)
    }

    loadAll(): Promise<CourseDto[]> {
        return this.courseRepo.find()
    }

    async remove(id: string): Promise<void> {
        await this.courseRepo.delete(id)
    }

    async loadOne(uid: string): Promise<CourseDto> {
        return await this.courseRepo.findOne({where: {course_id:uid}})
    }
    // ex4
    async liststdcourse(){
        return await this.courseRepo.query("SELECT course.course_id, course.title, course.credit \
        FROM `student` INNER JOIN `register` INNER JOIN `course` \
        WHERE student.std_id = '5001100348' AND register.std_id = student.std_id AND course.course_id = register.course_id")
    }
    // ex5
    async totalcredit(){
        return await this.courseRepo.query("SELECT student.std_id, SUM(course.credit) \
        FROM course INNER JOIN student INNER JOIN register \
        WHERE student.std_id = register.std_id AND register.course_id = course.course_id GROUP BY student.std_id")
    }
    // ex7
    async listcourse(){
        return await this.courseRepo.query("SELECT student.std_name FROM student INNER JOIN course INNER JOIN register WHERE \
        student.std_id = register.std_id AND register.course_id = course.course_id AND course.course_id = '322236'")
    }
    // ex6
    async listAllcourse(){
        return await this.courseRepo.query("SELECT course.title, COUNT(course.title) \
        FROM course INNER JOIN register INNER JOIN student \
        WHERE student.std_id = register.std_id AND register.course_id = course.course_id GROUP BY course.course_id")
    }
    
}
