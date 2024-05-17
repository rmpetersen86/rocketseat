import {
  BadRequest
} from "./chunk-7C7D4HSE.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/get-atendee-badge.ts
import z from "zod";
async function getAtendeeBadge(app) {
  app.withTypeProvider().get("/atendees/:atendeeId/badge", {
    schema: {
      summary: "Retorna o registro de um participante",
      tags: ["Participantes"],
      params: z.object({
        atendeeId: z.coerce.number().int()
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
      }
    }
  }, async (request, reply) => {
    const { atendeeId } = request.params;
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
        id: atendeeId
      }
    });
    if (atendee === null) {
      throw new BadRequest("Participante n\xE3o localizado");
    }
    const baseURL = `${request.protocol}://${request.hostname}`;
    const checkInURL = new URL(`/atendees/${atendeeId}/check-in`, baseURL);
    return reply.send({
      badge: {
        name: atendee.name,
        email: atendee.email,
        eventTitle: atendee.event.title,
        checkInURL: checkInURL.toString()
      }
    });
  });
}

export {
  getAtendeeBadge
};
