/* eslint-disable prettier/prettier */
import { Column, Entity,PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryColumn()
    std_id: string

    @Column({nullable:false})
    std_name: string

    @Column({nullable:false})
    province: string
}
