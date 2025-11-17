import { NextRequest, NextResponse } from "next/server";
import { AskSchema } from "@/lib/zodSchemas";

/**
 * @openapi
 * /api/ask:
 *   post:
 *     summary: Ask the local Ollama AI a question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *     responses:
 *       200:
 *         description: Answer from the AI
 */

export async function POST(req: NextRequest) {
    const body = await req.json();
    const parsed = AskSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }
    const { question } = parsed.data;

    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "llama3",
            prompt: question,
            stream: false
            })
  });

  const data = await response.json();

  return NextResponse.json({ answer: data.response });
}
