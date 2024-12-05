import { YojnaRequestHandler } from "../request_handlers/yojna_request_handler.js";

export function createYojnaRequestHandler(
   authorRepository,
   yojnaRepository,
   tagRepository
) {

   return new YojnaRequestHandler(
      authorRepository = authorRepository,
      tagRepository = tagRepository,
      yojnaRepository =  yojnaRepository
   );
}
