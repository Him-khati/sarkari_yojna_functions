import { authenticate } from "./validators/authenticator.js";
import { isPathValid,handleRequest } from "./router.js";

export default async ({ req, res, log, error }) => { 

  const path = req.path;
  const authToken = req.headers['authorization'];
  const requestData = req.payload;

  // Step 1: Validate Path
  if (!isPathValid(path)) {
      return res.send({ error: 'Path not found' }, 404);
  }

  // Step 2: Authenticate Request
  if (!authenticate(authToken)) {
      return res.send({ error: 'Unauthorized Access' }, 401);
  }

  handleRequest(
    req,
    res
  );
};
