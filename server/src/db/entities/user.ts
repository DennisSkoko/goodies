import { Entity, PrimaryColumn, Column, Generated, CreateDateColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryColumn({ length: 36, readonly: true })
  @Generated('uuid')
  id!: string

  @Column({ length: 75 })
  name!: string

  @Column({ unique: true })
  email!: string

  @Column()
  password!: string

  @Column({ length: 75, nullable: true })
  location!: string

  @Column({ default: false })
  suspended!: boolean

  @CreateDateColumn({ readonly: true })
  created!: Date
}
