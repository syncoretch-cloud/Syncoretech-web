// Vercel serverless function: relays contact-form submissions through Resend.
// Requires RESEND_API_KEY (and optionally CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL)
// to be set as environment variables in the Vercel project.

type Body = { name?: unknown; email?: unknown; subject?: unknown; message?: unknown };

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export default {
  async fetch(request: Request): Promise<Response> {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    const reply = (status: number, body: object) =>
      new Response(JSON.stringify(body), { status, headers });

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (request.method !== "POST") return reply(405, { error: "Method not allowed" });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return reply(500, { error: "Email service is not configured" });

    let data: Body;
    try {
      data = (await request.json()) as Body;
    } catch {
      return reply(400, { error: "Invalid JSON" });
    }

    const name = str(data.name, 200);
    const email = str(data.email, 320);
    const subject = str(data.subject, 300);
    const message = str(data.message, 10000);

    if (!name || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply(400, { error: "Missing or invalid fields" });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Syncore Website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || "syncoretch@gmail.com"],
        reply_to: email,
        subject: `[Website] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(
          email
        )}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return reply(502, { error: "Failed to send email" });
    }
    return reply(200, { ok: true });
  },
};
