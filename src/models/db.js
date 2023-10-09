import { mongodb } from "@fastify/mongodb";
import { server } from "../../server.js";

server.register(mongodb, {
    forceClose: true
})