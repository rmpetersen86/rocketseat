import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider } from  'fastify-type-provider-zod'
import { createEvent } from './routes/create-events';
import { registerForEvent } from './routes/register-for-event';
import { getEvent } from './routes/get-event';
import { getAtendeeBadge } from './routes/get-atendee-badge';
import { checkIn } from './routes/check-ins';
import { getEventAtendees } from './routes/get-event-atendees';
import { errorhandler } from './error-handler';

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'pass.in',
      description: 'Especificações da API para o back-end da aplicação pass-in',
      version: '1.0.0'
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAtendeeBadge)
app.register(checkIn)
app.register(getEventAtendees)

app.setErrorHandler(errorhandler)

app.listen({port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running')
})