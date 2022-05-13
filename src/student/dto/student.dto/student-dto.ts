/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class StudentDto {
    @IsString()
    std_id: string

    @IsString()
    std_name: string

    @IsString()
    province: string
}
