import {
  registerForEvent
} from "./chunk-5FOJ263H.mjs";
import {
  errorhandler
} from "./chunk-IITPVOLY.mjs";
import {
  checkIn
} from "./chunk-HP5BF3ZF.mjs";
import {
  createEvent
} from "./chunk-M4ZGGXWW.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAtendeeBadge
} from "./chunk-3N4KP6VX.mjs";
import {
  getEventAtendees
} from "./chunk-CHBUXXQH.mjs";
import {
  getEvent
} from "./chunk-UGXXEWVO.mjs";
import "./chunk-7C7D4HSE.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass-in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAtendeeBadge);
app.register(checkIn);
app.register(getEventAtendees);
app.setErrorHandler(errorhandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
