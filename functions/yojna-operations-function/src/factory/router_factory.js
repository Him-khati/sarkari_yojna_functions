import { Client, Databases } from 'node-appwrite';
import { Router } from "../router.js";
import { createAuthorRepository, createTagsRepository, createYojnaRepository } from './repository_factory.js';
import { createYojnaRequestHandler } from './request_handler_factory.js';


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
        authorRepository,
        yojnaRepository,
        tagRepository
    )

    return new Router(
        yojnaRequestHandler,
        null
    );
}
