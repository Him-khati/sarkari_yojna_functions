import { Client } from 'node-appwrite';
import { Router } from "../router.js";
import { createYojnaRequestHandler } from './request_handler_factory.js'

export function createRouter() {

    return Router(
        yojnaRequestHandler = createYojnaRequestHandler(),
        fcmTokenRequestHandler = null
    );
}
