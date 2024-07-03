import { Database } from "bun:sqlite";
import ipv4 from "ip";

const ip_db = new Database("./utils/dataset.db");

const localAddresses = [
  "127.0.0.1", "::1", "::ffff:127.0.0.1", "::ffff:0:0", "::ffff:7f00:1", "::ffff:0:0:7f00:1"
];

export default function ipTracker(ipAddress) {
  if (!ipAddress) {
    return { "region": "unknown" };
  }

  if (localAddresses.includes(ipAddress)) {
    return { "region": "localhost" };
  }

  // Validate IPv4 address
  if (!ipv4.isV4Format(ipAddress)) {
    return { "region": "invalid" };
  }

  const ip = ipv4.toLong(ipAddress);

  const result = ip_db
    .query(
      "SELECT registry, assigned, country_code, country, region FROM ip_ranges WHERE $ip BETWEEN start_ip AND end_ip"
    )
    .all({ $ip: ip });

  return result.length > 0 ? result[0] || "unknown" : "unknown";
}
