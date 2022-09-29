import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  login: string;

  @Column()
  @Field()
  password: string;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
