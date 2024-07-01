import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Unique, ManyToOne, JoinTable } from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';
import { Exclude } from 'class-transformer';


@Entity({ name: 'genres' })
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  

  @ManyToMany(() => Movie, movie => movie.genres, { eager:true})
  movies: Movie[];
}
