import { FastifyInstance } from "fastify";
import { request } from "http";

export async function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results', { websocket: true }, (connection, request) => {
    connection.socket.on('message', (message: string) => {
      connection.socket.send('You sent: ' + message)

      setInterval(() => {
        connection.socket.send('oi')
      }, 500)
    })
  })
}