//import { authenticate } from "./validators/authenticator.js";
import { createRouter } from "./factory/router_factory.js";

export default async ({ req, res, log, error }) => {

  const path = req.path;
  const authToken = req.headers['authorization'];
  const requestData = req.payload;

  const router = createRouter(req);

  // Step 1: Validate Path
  if (!router.isPathValid(path)) {
    return res.send({ error: 'Path not found' }, 404);
  }

  // // Step 2: Authenticate Request
  // if (!authenticate(authToken)) {
  //   return res.send({ error: 'Unauthorized Access' }, 401);
  // }

  return router.handleRequest(
    req,
    res
  );
};
