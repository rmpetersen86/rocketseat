import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errrors/bad-request";

export async function registerForEvent(app: FastifyInstance){
  app
  .withTypeProvider<ZodTypeProvider>()
  .post('/events/:eventId/atendees', {
    schema: {
      summary: 'Registra um participante em um evento',
      tags: ['Participantes'],
      body: z.object({
        name: z.string().min(4),
        email: z.string().email()
      }),
      params: z.object({
        eventId: z.string().uuid(),
      }),
      response: {
        201: z.object({
          atendeeId: z.number(),
        })
      }
    }
  }, async (request, reply) => {
    const { eventId } = request.params
    const {name, email} = request.body

    const atendeeFromEmail = await prisma.atendee.findUnique({
      where: {
        eventId_email: {
          email,
          eventId
        }
      }
    })

    if(atendeeFromEmail !== null) {
      throw new BadRequest('Este e-mail já está cadastrado para este evento!')
    }

    const [event, amountOfAtendeesForEvent] = await Promise.all([
      prisma.event.findUnique({
        where: {
          id: eventId,
        }
      }),
      prisma.atendee.count({
        where : {
          eventId,
        }
      })
    ])

    if (event?.maximumAtendees && amountOfAtendeesForEvent >= event?.maximumAtendees) {
      throw new BadRequest('A quantidade maxima de participantes para este evento já foi atingida!')
    }

    const atendee = await prisma.atendee.create({
      data: {
        name,
        email,
        eventId
      }      
    })
    return reply.status(201).send({atendeeId: atendee.id})
  }
  )
}