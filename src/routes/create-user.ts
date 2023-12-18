import fp from "fastify-plugin";
import type { FastifyRequest } from "fastify";
import { MongoCreateUserRepository } from "../repositories/create-user/mongo-create-user";
import { CreateUserController } from "../controllers/create-user/create-user";
import { IBodyType } from "./protocols";

const createRoute = fp(function (fastify, opts, done) {
  fastify.post(
    "/users",
    async (req: FastifyRequest<{ Body: IBodyType }>, res) => {
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

  done();
});

export default createRoute;
