/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDto } from 'src/student/dto/student.dto/student-dto';
import { Student } from 'src/student/entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    public students: StudentDto[] = []

    constructor(
        @InjectRepository(Student)
        private studentRepo: Repository<Student>
    ){}

    create(students: StudentDto): Promise<StudentDto> {
        return this.studentRepo.save(students)
    }

    loadAll(): Promise<StudentDto[]> {
        return this.studentRepo.find()
    }

    async remove(id: string): Promise<void> {
        await this.studentRepo.delete(id)
    }

    async loadOne(uid: string): Promise<StudentDto> {
        return await this.studentRepo.findOne({where: {std_id:uid}})
    }
    // ex1
    async OrderbyStudentname(){
        return await this.studentRepo.query("SELECT * FROM `student` ORDER BY `std_name`")
    }
    // ex2
    async idandname(){
        return await this.studentRepo.query("SELECT `std_id`, `std_name` FROM `student`")
    }
    // ex3
    async studentProvince(){
        return await this.studentRepo.query("SELECT * FROM `student` WHERE `province` = 'ขอนแก่น'")
    }
}
