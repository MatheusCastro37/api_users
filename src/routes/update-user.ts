import fp from "fastify-plugin";
import type { FastifyRequest } from "fastify";
import { MongoUpdateUserRepository } from "../repositories/update-user/mongo-update-user";
import { UpdateUserController } from "../controllers/update-user/update-users";
import { IBodyType } from "./protocols";

const updateRoute = fp(function (fastify, opts, done) {
  fastify.patch(
    "/users/:id",
    async (req: FastifyRequest<{ Body: IBodyType; Params: string }>, res) => {
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

  done();
});

export default updateRoute;
