import {
  BadRequest
} from "./chunk-7C7D4HSE.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/register-for-event.ts
import z from "zod";
async function registerForEvent(app) {
  app.withTypeProvider().post(
    "/events/:eventId/atendees",
    {
      schema: {
        summary: "Registra um participante em um evento",
        tags: ["Participantes"],
        body: z.object({
          name: z.string().min(4),
          email: z.string().email()
        }),
        params: z.object({
          eventId: z.string().uuid()
        }),
        response: {
          201: z.object({
            atendeeId: z.number()
          })
        }
      }
    },
    async (request, reply) => {
      const { eventId } = request.params;
      const { name, email } = request.body;
      const atendeeFromEmail = await prisma.atendee.findUnique({
        where: {
          eventId_email: {
            email,
            eventId
          }
        }
      });
      if (atendeeFromEmail !== null) {
        throw new BadRequest("Este e-mail j\xE1 est\xE1 cadastrado para este evento!");
      }
      const [event, amountOfAtendeesForEvent] = await Promise.all([
        prisma.event.findUnique({
          where: {
            id: eventId
          }
        }),
        prisma.atendee.count({
          where: {
            eventId
          }
        })
      ]);
      if (event?.maximumAtendees && amountOfAtendeesForEvent >= event?.maximumAtendees) {
        throw new BadRequest("A quantidade maxima de participantes para este evento j\xE1 foi atingida!");
      }
      const atendee = await prisma.atendee.create({
        data: {
          name,
          email,
          eventId
        }
      });
      return reply.status(201).send({ atendeeId: atendee.id });
    }
  );
}

export {
  registerForEvent
};
