import { YojnaRequestHandler } from "../request_handlers/yojna_request_handler";


export function createYojnaRequestHandler(
   authorRepository,
   yojnaRepository,
   tagRepository
) {

   return YojnaRequestHandler(
      authorRepository = authorRepository,
      tagRepository = tagRepository,
      yojnaRepository =  yojnaRepository
   );
}