import fastify from "fastify";
import "dotenv/config";
import { MongoClient } from "./database/mongo";
import getRoute from "./routes/get-users";
import deleteRoute from "./routes/delete-user";
import createRoute from "./routes/create-user";
import updateRoute from "./routes/update-user";
import getUserIdRoute from "./routes/get-user-id";

const main = async () => {
  const server = fastify();
  await MongoClient.connect();

  server.register(getRoute);

  server.register(getUserIdRoute);

  server.register(createRoute);

  server.register(updateRoute);

  server.register(deleteRoute);

  const portDotEnv = process.env.PORT;

  const port = portDotEnv as number | undefined;

  server.listen({ port: port }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

main();
