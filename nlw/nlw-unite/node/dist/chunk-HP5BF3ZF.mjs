import {
  BadRequest
} from "./chunk-7C7D4HSE.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/check-ins.ts
import z from "zod";
async function checkIn(app) {
  app.withTypeProvider().get("/atendees/:atendeeId/check-in", {
    schema: {
      summary: "Efetua o check-in de um participante em um evento",
      tags: ["Check-in"],
      params: z.object({
        atendeeId: z.coerce.number().int()
      }),
      response: {
        201: z.null()
      }
    }
  }, async (request, reply) => {
    const { atendeeId } = request.params;
    const atendeeCheckIn = await prisma.checkIn.findUnique({
      where: {
        atendeeId
      }
    });
    if (atendeeCheckIn !== null) {
      throw new BadRequest("Participante ja fez o check-in!");
    }
    await prisma.checkIn.create({
      data: {
        atendeeId
      }
    });
    return reply.status(201).send();
  });
}

export {
  checkIn
};
