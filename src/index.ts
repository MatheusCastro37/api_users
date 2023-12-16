import fastify from "fastify";
import "dotenv/config";
import { PostgresGetUsersRepository } from "./repositories/get-users/postgres-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoClient } from "./database/mongo";

const main = async () => {
  const server = fastify();

  await MongoClient.connect();

  server.get("/users", async (req, res) => {
    const postgresGetUsersRepository = new PostgresGetUsersRepository();

    const getUsersController = new GetUsersController(
      postgresGetUsersRepository
    );

    const { body, statusCode } = await getUsersController.handle();

    res.send(body).code(statusCode);
  });

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
