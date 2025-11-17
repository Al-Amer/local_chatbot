import { NextResponse } from "next/server";
import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
    title: "Local AI API",
    version: "1.0.0",
    description: "Simple Next.js API using Ollama",
    },
    servers: [
    { url: "http://localhost:3000" },
    ],
};

const options = {
    definition: swaggerDefinition,
    apis: ["./src/app/api/**/*.ts"], // all api in /src/app/api
    };

const swaggerSpec = swaggerJSDoc(options);

export function GET() {
    return NextResponse.json(swaggerSpec);
}