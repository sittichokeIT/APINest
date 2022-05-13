/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Course {
    @PrimaryColumn()
    course_id: string

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    credit: number;
}
