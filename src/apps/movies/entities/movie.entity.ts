import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Movie {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  constructor(movie: Partial<Movie>) {
    Object.assign(this, movie);
  }
}
