import { error } from "console";
import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return { hello: "world" };
});

server.listen({port: 3000}, (error, address) => {
    if(error){
        console.error(error);
        process.exit(1);
    }else(
        console.log(`Server listening at ${address}`)
    )
})