import { IsString, IsNotEmpty, IsArray, ValidateNested, IsInt, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMovieDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @Matches(/^\d{4}$/, { message: 'releaseDate must be a four-digit year' })
  releaseDate: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GenreDto)
  genres: GenreDto[];
}

export class GenreDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
