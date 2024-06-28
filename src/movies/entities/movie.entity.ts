import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Genre } from '../../genres/entities/genre.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  releaseDate: Date;

  

  @ManyToMany(() => Genre, (genre) => genre.movies, {cascade:true })
  @JoinTable()
  genres: Genre[];

}
