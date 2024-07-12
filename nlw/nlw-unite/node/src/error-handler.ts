import { FastifyInstance } from "fastify"
import { BadRequest } from "./routes/_errrors/bad-request"
import { ZodError } from "zod"

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorhandler: FastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: `Falha na validação da requisição`,
      errors: error.flatten().fieldErrors,
  })
  }
  const { validation, validationContext } = error

  if (validation !== undefined) {
    return reply.status(400).send({message: `Falha na validação da requisição ${validationContext}`,
  errors: validation
  })
  }
  if(error instanceof BadRequest) {
    return reply.status(400).send({message: error.message})
  }
  console.log(error)
  return reply.status(500).send({message: 'Erro de sistema!'})
}