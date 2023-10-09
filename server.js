//importa o Fastify e o @fastify/env
import Fastify from 'fastify';
import fastifyEnv from '@fastify/env';
import { routeGet } from "./src/routes/getHome.js";

//inicia o fastify instanciando
const server = Fastify({
    logger: true
});

//.register(plugin, {options}, handler:() => {}) --- carrega o plugin passado
//metodo ready() pode ser chamado com um parâmetro de erro, o qual lançará um erro se algo der errado durante o carregamento
//se chamado sem nenhum parâmetro retornará uma promise
server
    .register(fastifyEnv, {
        schema: {
            type: 'object',
            required: ['APP_PORT', 'APP_HOST'],
            properties: {
                APP_PORT: {
                    type: 'number'
                },
                APP_HOST: {
                    type: 'string'
                }
            }
        },
        dotenv: true,
    })
    .ready(() => {
        server.listen({ port: server.config.APP_PORT });
    }, (err) => {
        if (err) console.log(err)
    });//)
//   (err) => {
//     if (err) console.log('An error has occurred', err)

// });
// .then(async function () {
//     await server.listen({ port: server.config.APP_PORT });
// }, (err) => {
//     if (err) console.log(err)
// });

server.register(routeGet);

export { server };

