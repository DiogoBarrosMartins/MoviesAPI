import { IsString, IsNotEmpty, IsArray, ValidateNested, IsInt, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Genre } from 'src/genres/entities/genre.entity';

export class GenreDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CreateMovieDto {
  @IsInt()
  id: number;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description:'Title of the movie'})
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description:'Description of the movie'})
  description: string;

  @IsString()
  @Matches(/^\d{4}$/, { message: 'releaseDate must be a four-digit year' })
  @ApiProperty({ type: Date, description:'Release Date of the movie'})
  releaseDate: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GenreDto)
  @ApiProperty({ type: GenreDto, description:'Genres of the movie'})
  genres: GenreDto[];
}

