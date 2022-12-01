import { Injectable } from '@nestjs/common';

import MoviesEntity from '../entities/movies.entity';
import MoviesOutput from '../dto/output/movies.output';
import MoviesInput from '../dto/input/movies.input';

@Injectable()
export default class MoviesConverter {
  inputToEntity(input: MoviesInput, entity: MoviesEntity) {
    entity.id = input.id;
    entity.image = input.image;
    entity.title = input.title;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: MoviesEntity): MoviesOutput {
    const output = new MoviesOutput();
    output.id = entity.id;
    output.image = entity.image;
    output.title = entity.title;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
