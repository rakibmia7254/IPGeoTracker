import ipTracker from "../utils";

export async function route({ params }) {
  const { ip } = params;
  const result = await ipTracker(ip);
  if (!result) return { error: "IP not found", region: "unknown" };
  return {ip, info: result };
}

export async function me({ headers }) {
  const ip = headers["x-forwarded-for"] ||
  headers["x-real-ip"] ||
  headers["x-client-ip"] ||
  headers["x-forwarded-for"] ||
  "127.0.0.1"

  const result = ipTracker(ip);
  return {ip, info: result }
}
