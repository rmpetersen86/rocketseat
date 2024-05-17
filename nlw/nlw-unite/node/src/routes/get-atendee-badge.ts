import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errrors/bad-request";

export async function getAtendeeBadge(app: FastifyInstance){
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/atendees/:atendeeId/badge', {
      schema: {
        summary: 'Retorna o registro de um participante',
      tags: ['Participantes'],
        params: z.object({
          atendeeId: z.coerce.number().int(),
        }),
        response: {
          200: z.object({
            badge: z.object({
              name: z.string().email(),
              email: z.string(),
              eventTitle: z.string(),
              checkInURL: z.string().url()
            })
          })
        },
      }
    }, async (request, reply) => {
      const { atendeeId } = request.params
      
      const atendee = await prisma.atendee.findUnique({
        select: {
          name: true,
          email: true,
          event: {
            select: {
              title: true
            }
          }
        },
        where: {
          id: atendeeId,
        }
      })

      if(atendee === null) {
        throw new BadRequest('Participante não localizado')
      }

      const baseURL = `${request.protocol}://${request.hostname}`
      
      const checkInURL = new URL(`/atendees/${atendeeId}/check-in`, baseURL)

      return reply.send({
        badge: {
          name: atendee.name,
          email: atendee.email,
          eventTitle: atendee.event.title,
          checkInURL: checkInURL.toString(),
        }
      })
    })
}