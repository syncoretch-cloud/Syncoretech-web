// Exchanges the admin password (ADMIN_PASSWORD env var) for a short-lived token.
import { checkPassword, issueToken, json } from "../lib/auth";

export const config = { path: "/api/admin/login" };

export default async (request: Request): Promise<Response> => {
  if (request.method !== "POST") return json(405, { error: "Method not allowed" });
  if (!process.env.ADMIN_PASSWORD) return json(500, { error: "Admin login is not configured" });

  let password = "";
  try {
    const body = (await request.json()) as { password?: unknown };
    if (typeof body.password === "string") password = body.password;
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  if (!checkPassword(password)) {
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return json(401, { error: "Incorrect password" });
  }
  return json(200, { token: issueToken() });
};
