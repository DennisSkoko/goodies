import { Entity, PrimaryColumn, Column, Generated, CreateDateColumn } from 'typeorm'
import { IsEmail, Length, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator'

@Entity()
export class User {
  @PrimaryColumn({ length: 36, readonly: true })
  @Generated('uuid')
  id!: string

  @Column({ length: 75 })
  @Length(3, 75)
  name!: string

  @Column({ unique: true })
  @IsEmail()
  email!: string

  @Column()
  @IsNotEmpty()
  password!: string

  @Column({ length: 75, nullable: true })
  @IsOptional()
  @Length(3, 75)
  location!: string

  @Column({ default: false })
  @IsOptional()
  @IsBoolean()
  suspended!: boolean

  @CreateDateColumn({ readonly: true })
  created!: Date
}
