import { Client,Databases } from 'node-appwrite';
import { Router } from "../router.js";
import { createYojnaRequestHandler } from './request_handler_factory.js'
import { createAuthorRepository, createTagsRepository, createYojnaRepository } from './repository_factory.js';


export function createRouter(req) {
    const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key'] ?? '');

    const database = new Databases(client); 

    const tagRepository = createTagsRepository(database);
    const yojnaRepository = createYojnaRepository(database);
    const authorRepository = createAuthorRepository(database);

    const yojnaRequestHandler = createYojnaRequestHandler(
        authorRepository = authorRepository,
        yojnaRepository = yojnaRepository,
        tagRepository = tagRepository
    )

    return Router(
        yojnaRequestHandler = yojnaRequestHandler,
        fcmTokenRequestHandler = null
    );
}
