import {
  BadRequest
} from "./chunk-7C7D4HSE.mjs";

// src/error-handler.ts
import { ZodError } from "zod";
var errorhandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: `Falha na valida\xE7\xE3o da requisi\xE7\xE3o`,
      errors: error.flatten().fieldErrors
    });
  }
  const { validation, validationContext } = error;
  if (validation !== void 0) {
    return reply.status(400).send({
      message: `Falha na valida\xE7\xE3o da requisi\xE7\xE3o ${validationContext}`,
      errors: validation
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Erro de sistema!" });
};

export {
  errorhandler
};
