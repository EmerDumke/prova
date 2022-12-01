import { ApiProperty } from '@nestjs/swagger';

export default class UsersInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;
  
  @ApiProperty()
  password: string;

  @ApiProperty()
  movies?: string;

  @ApiProperty()
  active: boolean;
}
