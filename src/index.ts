import fastify from "fastify";
import "dotenv/config";

const server = fastify();

const portDotEnv = process.env.PORT;

const port = portDotEnv as number | undefined;

server.listen({ port: port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

server.get("/", async (req, res) => console.log("hello world"));
