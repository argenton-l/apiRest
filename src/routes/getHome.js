import { server } from "../../server.js";


async function routeGet() {
    server.get('/', (req, reply) => {
        reply.send({ Hello: 'Welcome HOME ' })
    });
};

export { server, routeGet };
