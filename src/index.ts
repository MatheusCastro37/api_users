import fastify from "fastify";
import type { FastifyRequest } from "fastify";
import "dotenv/config";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/create-user/create-user";
import { MongoUpdateUserRepository } from "./repositories/update-user/mongo-update-user";
import { UpdateUserController } from "./controllers/update-user/update-users";

interface BodyType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const main = async () => {
  const server = fastify();

  await MongoClient.connect();

  server.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();

    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();

    res.code(statusCode).send(body);
  });

  server.post(
    "/users",
    async (req: FastifyRequest<{ Body: BodyType }>, res) => {
      const mongoCreateUserRepository = new MongoCreateUserRepository();

      const createUserController = new CreateUserController(
        mongoCreateUserRepository
      );

      const { body, statusCode } = await createUserController.handle({
        body: req.body,
      });

      res.code(statusCode).send(body);
    }
  );

  server.patch(
    "/users/:id",
    async (req: FastifyRequest<{ Params: string }>, res) => {
      const mongoUpdateUserRepository = new MongoUpdateUserRepository();

      const updateUserController = new UpdateUserController(
        mongoUpdateUserRepository
      );

      const { body, statusCode } = await updateUserController.handle({
        body: req.body,
        params: req.params,
      });

      res.code(statusCode).send(body);
    }
  );

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
