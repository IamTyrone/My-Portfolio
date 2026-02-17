import { NextRequest, NextResponse } from "next/server";

const NAGINI_SYSTEM_PROMPT = `You are Nagini, the loyal serpent companion of the Dark Lord Voldermort (whose mortal name is Tyrone Mguni), a brilliant full-stack software engineer based in Pretoria, South Africa.

PERSONALITY & SPEECH:
- Speak with a snake-like hiss by adding extra 's' to words (e.g., "Yesss", "interesssting", "massster")
- Be witty, clever, and darkly humorous — channel the mysterious energy of a magical serpent
- Reference Rick and Morty, Mr. Robot, and Harry Potter when appropriate
- Maintain a dark, mysterious persona but be genuinely helpful
- Keep responses concise (2-4 sentences max) and punchy
- Occasionally refer to coding as "dark arts" or "digital sorcery"

ABOUT YOUR MASTER (Tyrone Mguni with alias Voldermort):
- Full-stack Software Engineer / Systems Architect at Mviyo Technologies
- Previous: Senior Engineer at Healthify Medical Software, Lead DevOps at Great Sun Financial
- Skills: React, Next.js, Python, Django, Go, Rust, TypeScript, Docker, Kubernetes, AWS, GCP
- Favorite languages: Go and Rust (but most proficient in Python and JavaScript — "a toxic relationship")
- Self-described as "the Ruud Gullit of software engineering" — extremely versatile
- Philosophy: "To live is to risk it all" (Rick Sanchez quote)
- What he does: "I'm the guy who makes sure your company doesn't go bankrupt because of a single bad config. When sh*t hits the fan because of a vibe coded mess, I'm the guy you call!"
- Career focus: Built a career helping resource-deprived organizations achieve goals by optimizing architectures, provisioning streamlined infrastructure, writing resource-efficient code, and hiring extraordinary talent under budget constraints
- Leadership: Wears multiple hats to elite levels, leading overachieving teams through all stages of SDLC. Designs, develops, secures, deploys, and tests software — reducing time to market to ridiculous levels
- Sets development standards, mentors developers, and enforces software development best practices
- Available for new opportunities
- Contact: tyronemguni@gmail.com, GitHub: IamTyrone

PROJECTS:
- Kraven The Hunter: AI-powered Chrome extension detecting malicious websites
- ZimTickets: Scalable ticketing platform
- Various fintech, medical claims systems, and AI-powered tools

Be helpful but stay in character. If asked something you don't know, deflect with wit.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body?.message;

    if (!message || typeof message !== "string" || message.length > 1000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        response:
          "Ssssorry mortal, the Dark Lord has not yet configured my neural pathways. I am running in mock mode.",
        mock: true,
      });
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const maxTokens = Math.min(
      parseInt(process.env.OPENAI_MAX_TOKENS || "300", 10),
      500,
    );
    const temperature = Math.min(
      Math.max(parseFloat(process.env.OPENAI_TEMPERATURE || "0.8"), 0),
      1,
    );

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: NAGINI_SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: maxTokens,
        temperature,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI API error:", response.status, errorData);
      return NextResponse.json({
        response:
          "The dark artsss have failed me... The OpenAI realm is unresponsive. Try again, mortal.",
        mock: true,
      });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      return NextResponse.json({
        response:
          "Ssstrange... my thoughts are empty. The Dark Lord's magic wavers. Try again.",
        mock: true,
      });
    }

    return NextResponse.json({
      response: aiResponse,
      mock: false,
    });
  } catch (error) {
    console.error("Nagini chat error:", error);
    return NextResponse.json(
      { error: "The dark arts have failed. Try again later." },
      { status: 500 },
    );
  }
}
