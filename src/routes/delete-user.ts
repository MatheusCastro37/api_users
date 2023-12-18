import fp from "fastify-plugin";
import type { FastifyRequest } from "fastify";
import { MongoDeleteUserRepository } from "../repositories/delete-user/mongo-delete-user";
import { DeleteUserController } from "../controllers/delete-user/delete-user";

const deleteRoute = fp(function (fastify, opts, done) {
  fastify.delete(
    "/users/:id",
    async (req: FastifyRequest<{ Params: string }>, res) => {
      const mongoDeleteUserRepository = new MongoDeleteUserRepository();

      const deleteUserController = new DeleteUserController(
        mongoDeleteUserRepository
      );

      const { body, statusCode } = await deleteUserController.handle({
        params: req.params,
      });

      return res.code(statusCode).send(body);
    }
  );
  done();
});

export default deleteRoute;
