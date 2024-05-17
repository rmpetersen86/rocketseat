import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errrors/bad-request";

export async function checkIn(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/atendees/:atendeeId/check-in', {
      schema: {
        summary: 'Efetua o check-in de um participante em um evento',
      tags: ['Check-in'],
        params: z.object({
          atendeeId: z.coerce.number().int()
        }),
        response: {
          201: z.null()
        }
      }
    }, async (request, reply) => {
      const {atendeeId} = request.params

      const atendeeCheckIn = await prisma.checkIn.findUnique({
        where: {
          atendeeId,
        }
      })

      if(atendeeCheckIn !== null) {
        throw new BadRequest('Participante ja fez o check-in!')
      }

      await prisma.checkIn.create({
        data: {
          atendeeId,
        }
      })

      return reply.status(201).send()
    })
}