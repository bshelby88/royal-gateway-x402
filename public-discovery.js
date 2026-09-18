"use strict";

// EXEC-22 machine-readable surfaces for the platform catalog gateway.
// /llms.txt + /pricing.md generated DIRECTLY from the catalog constants
// (same source as /.well-known/x402.json and /docs) so the published
// prices can never drift from the manifest the gateway itself serves.

function networkLabel(network) {
  if (network === "eip155:8453") return "Base mainnet (eip155:8453)";
  if (network === "eip155:84532") return "Base Sepolia (eip155:84532)";
  return network;
}

function registerPublicDiscovery(app, config) {
  const { PLATFORM, SERVICES } = config;
  const baseUrl = config.baseUrl.replace(/\/$/, "");
  const network = networkLabel(PLATFORM.network);
  const lines = [
    `# ${PLATFORM.name} x402 Platform Gateway`,
    "",
    `> ${PLATFORM.tagline}`,
    "",
    `- What this is: a machine-readable catalog of every paid x402 endpoint operated by ${PLATFORM.name} (${PLATFORM.total_services} services, ${PLATFORM.total_endpoints} endpoints).`,
    `- Protocol: ${PLATFORM.protocol}`,
    `- Payment network: ${network}, token USDC`,
    `- Price range: ${PLATFORM.price_range} USDC per request`,
    `- Payout treasury (canonical): ${PLATFORM.payTo_wallets.join(", ")}`,
    `- Contact: ${PLATFORM.contact}`,
    "",
    "## Endpoints",
    "",
  ];
  for (const svc of SERVICES) {
    lines.push(`### ${svc.name} — ${svc.category}`);
    lines.push("");
    lines.push(`${svc.description}`);
    lines.push("");
    for (const ep of svc.endpoints) {
      lines.push(`- \`${ep.method} ${svc.url}${ep.path}\` — ${ep.price} USDC. ${ep.description}`);
    }
    lines.push("");
  }
  lines.push("## How to call");
  lines.push("");
  lines.push("Send the request without payment; read the 402 `payment-required` header (base64 x402 v2 challenge); sign a USDC transfer for the exact amount to the challenge `payTo`; re-send with the `payment-signature` header.");
  lines.push("");
  lines.push("## Machine contract");
  lines.push("");
  lines.push(`- x402 manifest: ${baseUrl}/.well-known/x402.json`);
  lines.push(`- OpenAPI catalog: ${baseUrl}/docs`);
  lines.push(`- Live service status: ${baseUrl}/services`);
  lines.push(`- Health: ${baseUrl}/health`);
  lines.push(`- Pricing: ${baseUrl}/pricing.md`);

  app.get("/llms.txt", (_req, res) => {
    res.type("text/plain").send(`${lines.join("\n")}\n`);
  });

  const pricing = [
    `# Pricing — ${PLATFORM.name} x402 Platform Gateway`,
    "",
    `- Billing: pay per request; no account or subscription`,
    `- Network: ${network} via x402 (${PLATFORM.protocol})`,
    `- Price range: ${PLATFORM.price_range} USDC per request`,
    `- Payout treasury: ${PLATFORM.payTo_wallets.join(", ")}`,
    `- Live payment requirements: [x402 manifest](${baseUrl}/.well-known/x402.json)`,
    "",
    "| Service | Endpoint | Price |",
    "| --- | --- | --- |",
  ];
  for (const svc of SERVICES) {
    for (const ep of svc.endpoints) {
      pricing.push(`| ${svc.name} | \`${ep.method} ${svc.url}${ep.path}\` | ${ep.price} |`);
    }
  }
  pricing.push("");
  pricing.push("The live x402 payment challenge is authoritative if a configured price changes.");

  app.get("/pricing.md", (_req, res) => {
    res.type("text/markdown").send(`${pricing.join("\n")}\n`);
  });
}

module.exports = { registerPublicDiscovery };
