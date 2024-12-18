import { AuthorRepository } from '../repositories/author_repository.js';
import { TagRepository } from '../repositories/tag_repository.js';
import { YojnaRepository } from '../repositories/yojna_repository.js';

export function createYojnaRepository(
   database = database
) {

   return new YojnaRepository(
      database = database
   );
}

export function createAuthorRepository(
   database = database
) {

   return new AuthorRepository(
      database = database
   );
}

export function createTagsRepository(
   database
) {

   return new TagRepository(
      database = database
   );
}
