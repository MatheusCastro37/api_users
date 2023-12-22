import fp from "fastify-plugin";
import { MongoGetUserIdRepository } from "../repositories/get-user-id/mongo-get-user-id";
import { GetUserIdController } from "../controllers/get-user-id/get-user-id";
import { FastifyRequest } from "fastify";

const getUserIdRoute = fp(function (fastify, opts, done) {
  fastify.get(
    "/user/:id",
    async (req: FastifyRequest<{ Params: string }>, res) => {
      const mongoGetUserIdRepository = new MongoGetUserIdRepository();

      const getUserIdController = new GetUserIdController(
        mongoGetUserIdRepository
      );

      const { body, statusCode } = await getUserIdController.handle({
        params: req.params,
      });

      return res.code(statusCode).send(body);
    }
  );

  done();
});

export default getUserIdRoute;
