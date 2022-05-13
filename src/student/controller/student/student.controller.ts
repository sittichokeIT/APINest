/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentDto } from 'src/student/dto/student.dto/student-dto';
import { StudentService } from 'src/student/services/student/student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}

    @Post()
    create(@Body() student: StudentDto): Promise<StudentDto> {
        return this.studentService.create(student)
    }

    @Get()
    loadAll(): Promise<StudentDto[]> {
        return this.studentService.loadAll()
    }
    // ex1
    @Get('studentlist')
    listname(){
        return this.studentService.OrderbyStudentname()
    }
    // ex2
    @Get('idandname')
    idandname(){
        return this.studentService.idandname()
    }
    // ex3
    @Get('stdProvince')
    stdProvince(){
        return this.studentService.studentProvince()
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string): Promise<any> {
        await this.studentService.remove(id)
        return {success:true}
    }

    @Put(':id')
    async updateStudent(
        @Param('id') id: string,
        @Body() sdto: StudentDto
    ): Promise<StudentDto> {
        const Student = await this.studentService.loadOne(id)
        Student.std_id = Student.std_id
        Student.std_name = sdto.std_name
        Student.province = sdto.province
        return await this.studentService.create(Student)
    }
}
