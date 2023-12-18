import fp from "fastify-plugin";
import { MongoGetUsersRepository } from "../repositories/get-users/mongo-get-users";
import { GetUsersController } from "../controllers/get-users/get-users";

const getRoute = fp(function (fastify, opts, done) {
  fastify.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();

    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();

    return res.code(statusCode).send(body);
  });

  done();
});

export default getRoute;
