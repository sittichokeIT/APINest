/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class CourseDto {
    @IsString()
    course_id: string

    @IsString()
    title: string

    @IsNumber()
    credit: number
}
