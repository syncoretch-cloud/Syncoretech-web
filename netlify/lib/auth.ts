import { createHmac, timingSafeEqual } from "node:crypto";

const TTL_MS = 12 * 60 * 60 * 1000;

const secret = () => process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "";

const sign = (payload: string) =>
  createHmac("sha256", secret()).update(payload).digest("base64url");

const safeEqual = (a: string, b: string) => {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
};

export const checkPassword = (input: string) => {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  // Hash both sides so the comparison is constant-length.
  const h = (s: string) => createHmac("sha256", "pw").update(s).digest("base64url");
  return safeEqual(h(input), h(real));
};

export const issueToken = () => {
  const payload = String(Date.now() + TTL_MS);
  return `${payload}.${sign(payload)}`;
};

export const verifyToken = (header: string | null) => {
  if (!secret() || !header?.startsWith("Bearer ")) return false;
  const [payload, sig] = header.slice(7).split(".");
  if (!payload || !sig || !safeEqual(sig, sign(payload))) return false;
  return Number(payload) > Date.now();
};

export const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
