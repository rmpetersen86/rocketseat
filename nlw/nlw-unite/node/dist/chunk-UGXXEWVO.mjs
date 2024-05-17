import {
  BadRequest
} from "./chunk-7C7D4HSE.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/get-event.ts
import z from "zod";
async function getEvent(app) {
  app.withTypeProvider().get("/events/:eventId", {
    schema: {
      summary: "Retorna um evento",
      tags: ["Eventos"],
      params: z.object({
        eventId: z.string().uuid()
      }),
      response: {
        200: z.object({
          event: z.object({
            id: z.string(),
            title: z.string(),
            slug: z.string(),
            details: z.string().nullable(),
            maximumAtendees: z.number().int().nullable(),
            atendeesAmount: z.number().int()
          })
        })
      }
    }
  }, async (request, reply) => {
    const { eventId } = request.params;
    const event = await prisma.event.findUnique({
      select: {
        id: true,
        title: true,
        slug: true,
        details: true,
        maximumAtendees: true,
        _count: {
          select: {
            atendees: true
          }
        }
      },
      where: {
        id: eventId
      }
    });
    if (event === null) {
      throw new BadRequest("Evento n\xE3o localizado");
    }
    return reply.send({
      event: {
        id: event.id,
        title: event.title,
        slug: event.slug,
        details: event.details,
        maximumAtendees: event.maximumAtendees,
        atendeesAmount: event._count.atendees
      }
    });
  });
}

export {
  getEvent
};
