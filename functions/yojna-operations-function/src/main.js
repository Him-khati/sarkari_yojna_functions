import { Client, Users,Databases } from 'node-appwrite';
// import { add,update,remove,read,readAll } from "./yojna_repository.js";
// import { authenticateUser } from "./auth.js";

// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }) => { 

  // try{
  //   authenticateUser();
  // } catch(e){
  //   return res.send({ error: 'Unauthorise Access' }, 401);
  // }

  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key'] ?? '');
  
  const users = new Users(client);
  const database = new Databases(client);

  // The req object contains the request data
  if (req.path === "/fetch_yojnas") {
      try {
          const response = await database.listDocuments('674f22820004257f51ca', 'yojna');
          console.log(response);
          return res.send(response);
      } catch (error) {
          console.error(error);
          return res.send(error);
      }

  } else if(req.path == "/add_yojna"){
    return res.send({ error: 'Path not found' }, 404);
  } else if(req.path == "/update_yojna"){
    return res.send({ error: 'Path not found' }, 404);
  } else{
    return res.send({ error: 'Path not found' }, 404);
  }
};
