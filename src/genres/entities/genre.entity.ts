import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Unique, ManyToOne } from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';
import { Exclude } from 'class-transformer';


@Entity({ name: 'genres' })
export class Genre {
  
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Movie, movie => movie.genres)
  movies: Movie[];
}
