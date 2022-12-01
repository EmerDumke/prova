import { ApiProperty } from '@nestjs/swagger';

export default class MoviesInput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  userid: number;
}
