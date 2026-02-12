import { NextRequest, NextResponse } from "next/server";

// Nagini AI Chat API Route Stub
// This is a placeholder for future OpenAI integration.
// To enable real AI responses, set OPENAI_API_KEY in your .env.local file.

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Return a stub response when no API key is configured
      return NextResponse.json({
        response:
          "Ssssorry mortal, the Dark Lord has not yet configured my neural pathways. I am running in mock mode. Set OPENAI_API_KEY to unleash my full power.",
        mock: true,
      });
    }

    // Future: OpenAI integration
    // const openai = new OpenAI({ apiKey });
    // const completion = await openai.chat.completions.create({
    //   model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    //   messages: [
    //     {
    //       role: "system",
    //       content: `You are Nagini, the loyal serpent companion of Voldermort (Tyrone Mguni), a full-stack software engineer. You speak with a snake-like hiss (adding extra 's' to words). You are knowledgeable about Tyrone's skills, experience, and projects. You are helpful but maintain a dark, mysterious persona. Keep responses concise and in character.`,
    //     },
    //     { role: "user", content: message },
    //   ],
    //   max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || "300"),
    //   temperature: parseFloat(process.env.OPENAI_TEMPERATURE || "0.8"),
    // });
    //
    // return NextResponse.json({
    //   response: completion.choices[0]?.message?.content || "...",
    //   mock: false,
    // });

    return NextResponse.json({
      response:
        "Ssssorry mortal, the AI integration is not yet complete. Running in mock mode.",
      mock: true,
    });
  } catch (error) {
    console.error("Nagini chat error:", error);
    return NextResponse.json(
      { error: "The dark arts have failed. Try again later." },
      { status: 500 }
    );
  }
}
