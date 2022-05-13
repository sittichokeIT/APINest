/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseDto } from 'src/course/dto/course.dto/course-dto';
import { CourseService } from 'src/course/services/course/course.service';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService){}

    @Post()
    create(@Body() course: CourseDto): Promise<CourseDto> {
        return this.courseService.create(course)
    }

    @Get()
    loadAll(): Promise<CourseDto[]> {
        return this.courseService.loadAll()
    }
    // ex4
    @Get('liststdcourse')
    liststdcourse(){
        return this.courseService.liststdcourse()
    }
    // ex5
    @Get('totalcredit')
    totalcredit(){
        return this.courseService.totalcredit()
    }
    // ex7
    @Get('listcourse')
    listcourse(){
        return this.courseService.listcourse()
    }
    // ex6
    @Get('listAllcourse')
    listAllcourse(){
        return this.courseService.listAllcourse()
    }

    @Delete(':id')
    async deleteCourse(@Param('id') id: string): Promise<any> {
        await this.courseService.remove(id)
        return {success : true}
    }

    @Put(':id')
    async updateCourse(
        @Param('id') id: string,
        @Body() cdto: CourseDto
    ): Promise<CourseDto> {
        const Course = await this.courseService.loadOne(id)
        Course.course_id = Course.course_id
        Course.title = cdto.title
        Course.credit = cdto.credit
        return await this.courseService.create(Course)
    }
}
