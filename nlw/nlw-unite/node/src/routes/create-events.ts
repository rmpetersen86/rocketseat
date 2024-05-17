import { ZodTypeProvider } from  'fastify-type-provider-zod'
import { z } from 'zod';
import { generateSlug } from '../utils/generate-slug';
import { prisma } from "../lib/prisma"
import { FastifyInstance } from 'fastify';
import { BadRequest } from './_errrors/bad-request';

export async function createEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/events', {
    schema: {
      summary: 'Cria um evento',
      tags: ['Eventos'],
      body: z.object({
        title: z.string({ invalid_type_error: 'O título do evento deve ser um texto.' }).min(4),
        details: z.string().nullable(),
        maximumAtendees: z.number().int().positive().nullable(),
      }),
      response: {
        201: z.object({
          eventId: z.string().uuid()
        })
      }
    },
  }, async (request, reply) => {  
    const {
      title,
      details,
      maximumAtendees
    } = (request.body)
  
    const slug = generateSlug(title)
  
    const eventWithSameSlug = await prisma.event.findUnique({
      where: {
        slug,
      }
    })
  
    if (eventWithSameSlug !== null) {
      throw new BadRequest('Já existe um evento com este slug registrado')
    }
    
    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAtendees,
        slug
      },
    })
  
    return reply.status(201).send({ eventId: event.id })
  })
}