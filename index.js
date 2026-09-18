// royal-gateway-x402 — CORRECTED catalog (regenerated 2026-09-08 from live 402 challenges + live OpenAPI).
// Source of truth: records/engine/2026-09-08-gateway-catalog/catalog-truth.json
// RULE: never hardcode price/path/payTo literals — this file is GENERATED; regenerate after every service deploy.
const express = require("express");
const app = express();

const CATALOG = {
  "generated_utc": "2026-09-18T04:20Z",
  "payTo": [
    "0x7861db4efc14a1ed5dd8c96c528a3796560f1393"
  ],
  "services": [
    {
      "name": "SupraPack",
      "slug": "suprapack",
      "url": "https://suprapack-x402.fly.dev",
      "category": "AI / Developer Tools",
      "description": "Pay-per-search index of Claude Code / Hermes agent skills. 531 skills indexed. Given a goal or keyword, returns the most relevant skills with descriptions and usage guidance.",
      "openapi": "https://suprapack-x402.fly.dev/openapi.json",
      "wellknown": "https://suprapack-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/find-skill",
          "price": "$0.03",
          "amount_atoms": "30000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "goal": "string"
          },
          "description": "Find Skill ($0.03) \u2014 semantic search over agent skill catalog"
        },
        {
          "method": "POST",
          "path": "/api/get-skill",
          "price": "$0.03",
          "amount_atoms": "30000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "name": "string"
          },
          "description": "Get Skill ($0.03) \u2014 retrieve full skill content by name"
        },
        {
          "method": "POST",
          "path": "/api/list-top",
          "price": "$0.03",
          "amount_atoms": "30000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "limit": "integer?",
            "category": "string?"
          },
          "description": "List Top ($0.03) \u2014 top skills by usage or category"
        }
      ]
    },
    {
      "name": "NanoBanana",
      "slug": "nanobanana",
      "url": "https://nanobanana-x402.fly.dev",
      "category": "AI / Creative",
      "description": "Pay-per-request AI image generation and editing via x402 USDC. Supports 10 aspect ratios. Powered by Gemini.",
      "openapi": "https://nanobanana-x402.fly.dev/openapi.json",
      "wellknown": "https://nanobanana-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/generate-image",
          "price": "$0.01",
          "amount_atoms": "10000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "prompt": "string",
            "aspectRatio": "string?"
          },
          "description": "Generate an AI image from a text prompt ($0.01)"
        },
        {
          "method": "POST",
          "path": "/api/edit-image",
          "price": "$0.01",
          "amount_atoms": "10000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "prompt": "string",
            "image_b64": "string",
            "mime_type": "string?",
            "aspectRatio": "string?"
          },
          "description": "Edit an existing image with a text prompt ($0.01)"
        }
      ]
    },
    {
      "name": "Vault Pro",
      "slug": "vault-pro",
      "url": "https://vault-pro-x402.fly.dev",
      "category": "AI / Productivity",
      "description": "Pay-per-scaffold AI generation of Obsidian vault structures and project templates from a goal or description. Returns a ready-to-import folder structure with notes, templates, and maps of content.",
      "openapi": "https://vault-pro-x402.fly.dev/openapi.json",
      "wellknown": "https://vault-pro-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/scaffold-project",
          "price": "$0.05",
          "amount_atoms": "50000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "goal": "string"
          },
          "description": "Scaffold Project ($0.05) \u2014 AI-generated Obsidian vault structure"
        },
        {
          "method": "POST",
          "path": "/api/scaffold-agent",
          "price": "$0.05",
          "amount_atoms": "50000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "goal": "string"
          },
          "description": "Scaffold Agent ($0.05) \u2014 AI-generated agent task board and workflow"
        }
      ]
    },
    {
      "name": "Royal Ruby",
      "slug": "royal-ruby",
      "url": "https://royal-ruby-x402.fly.dev",
      "category": "Legal / Compliance",
      "description": "",
      "openapi": null,
      "wellknown": "https://royal-ruby-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/law-lookup",
          "price": "$0.05",
          "amount_atoms": "50000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "see 402 resource description"
        }
      ]
    },
    {
      "name": "NFT Alpha",
      "slug": "nft-alpha",
      "url": "https://nft-alpha-x402.fly.dev",
      "category": "Crypto / Analytics",
      "description": "Paid x402 OpenSea NFT market signal endpoint on Base USDC.",
      "openapi": "https://nft-alpha-x402.fly.dev/openapi.json",
      "wellknown": "https://nft-alpha-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/nft-signal",
          "price": "$0.02",
          "amount_atoms": "20000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "collection": "string?",
            "collections": "string[]?"
          },
          "description": "Get NFT collection market signals"
        }
      ]
    },
    {
      "name": "Royal Feel",
      "slug": "royal-feel",
      "url": "https://royal-feel-x402.fly.dev",
      "category": "Legal / Compliance",
      "description": "Pay $2.00 USDC, get an FTC compliance lint report on your wellness or marketing copy. Flags unqualified efficacy claims, disease treatment claims, weight loss hype, and unscientific buzzwords.",
      "openapi": "https://royal-feel-x402.fly.dev/openapi.json",
      "wellknown": "https://royal-feel-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/lint-copy",
          "price": "$2.00",
          "amount_atoms": "2000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Lint marketing copy or product descriptions against FTC compliance guidelines"
        },
        {
          "method": "POST",
          "path": "/api/batch-lint",
          "price": "$5.00",
          "amount_atoms": "5000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Batch-lint up to 10 marketing copy texts against FTC compliance guidelines in a single paid request"
        }
      ]
    },
    {
      "name": "TradingAgents",
      "slug": "tradingagents",
      "url": "https://tradingagents-x402.fly.dev",
      "category": "Finance / Analytics",
      "description": "Pay $0.05 USDC per request for the current synthetic degraded demonstration payload. Current implementation returns a synthetic, degraded demonstration response; it does not execute TradingAgents or retrieve live market data. Configured synthetic report roles: market, social, news, fundamentals. The",
      "openapi": "https://tradingagents-x402.fly.dev/openapi.json",
      "wellknown": "https://tradingagents-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/analyze-ticker",
          "price": "$0.05",
          "amount_atoms": "50000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "ticker": "string",
            "date": "string?",
            "analysts": "string[]?"
          },
          "description": "Price $0"
        },
        {
          "method": "POST",
          "path": "/api/analyze-arbitrage",
          "price": "$0.05",
          "amount_atoms": "50000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "ticker": "string"
          },
          "description": "Price $0"
        }
      ]
    },
    {
      "name": "Contract Eye",
      "slug": "contract-eye",
      "url": "https://contract-eye-x402.fly.dev",
      "category": "Legal / AI",
      "description": "Pay $0.05 USDC, get a detailed risk analysis of any contract text. Flags risky, one-sided, or unusual clauses.",
      "openapi": "https://contract-eye-x402.fly.dev/openapi.json",
      "wellknown": "https://contract-eye-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/analyze-contract",
          "price": "$0.05",
          "amount_atoms": "50000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Analyze a contract for risky, one-sided, or unusual clauses"
        }
      ]
    },
    {
      "name": "Lingua",
      "slug": "lingua",
      "url": "https://lingua-x402.fly.dev",
      "category": "AI / Language",
      "description": "Pay USDC, get context-aware AI translation between any language pair. Supports 100+ languages, cultural adaptation, and batch translation.",
      "openapi": "https://lingua-x402.fly.dev/openapi.json",
      "wellknown": "https://lingua-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/translate",
          "price": "$1.00",
          "amount_atoms": "1000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Translate text between any language pair"
        },
        {
          "method": "POST",
          "path": "/api/localize",
          "price": "$2.00",
          "amount_atoms": "2000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Full localization with cultural adaptation"
        },
        {
          "method": "POST",
          "path": "/api/batch-translate",
          "price": "$3.00",
          "amount_atoms": "3000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Translate up to 20 strings at once"
        }
      ]
    },
    {
      "name": "BriefSnap",
      "slug": "briefsnap",
      "url": "https://briefsnap-x402.fly.dev",
      "category": "AI / Productivity",
      "description": "Pay USDC, get instant AI summaries, action item extraction, and simplified explanations of any document or text.",
      "openapi": "https://briefsnap-x402.fly.dev/openapi.json",
      "wellknown": "https://briefsnap-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/summarize",
          "price": "$1.00",
          "amount_atoms": "1000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Summarize any document or text"
        },
        {
          "method": "POST",
          "path": "/api/extract-actions",
          "price": "$1.50",
          "amount_atoms": "1500000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Extract action items, decisions, and deadlines"
        },
        {
          "method": "POST",
          "path": "/api/eli5",
          "price": "$1.00",
          "amount_atoms": "1000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Explain Like I'm 5 \u2014 simplify complex text"
        },
        {
          "method": "POST",
          "path": "/api/compare-docs",
          "price": "$3.00",
          "amount_atoms": "3000000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Compare two documents side by side"
        }
      ]
    },
    {
      "name": "Power Pack",
      "slug": "power-pack",
      "url": "https://power-pack-x402.fly.dev",
      "category": "AI / Utilities",
      "description": "Pay USDC, get an outreach email scored on subject line, body quality, predicted open rate, spam risk, and top 3 specific improvement suggestions. Useful for sales/marketing/recruiting agents that need to QA outbound messages before sending.",
      "openapi": "https://power-pack-x402.fly.dev/openapi.json",
      "wellknown": "https://power-pack-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/score-email",
          "price": "$0.01",
          "amount_atoms": "10000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "subject": "string",
            "body": "string",
            "recipient_context": "string?"
          },
          "description": "Score an outreach email on subject quality, body quality, predicted open rate, spam risk, tone, length, personalization, and CTA clarity"
        }
      ]
    },
    {
      "name": "Dispute Forge",
      "slug": "dispute-forge",
      "url": "https://dispute-forge-x402.fly.dev",
      "category": "Legal / Compliance",
      "description": "Pay $0.75 USDC, get an FCRA-compliant dispute letter and unique on-chain certificate.",
      "openapi": "https://dispute-forge-x402.fly.dev/openapi.json",
      "wellknown": "https://dispute-forge-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/dispute-pack",
          "price": "$0.75",
          "amount_atoms": "750000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Generate an FCRA-compliant dispute letter and an SVG certificate of dispute"
        }
      ]
    },
    {
      "name": "Sentry Forge",
      "slug": "sentry-forge",
      "url": "https://sentry-forge-x402.fly.dev",
      "category": "Security / Web3",
      "description": "Pay $0.50 USDC, get an 8-file dispute pack: collector letter, OC letter, CFPB complaints, bureau disputes, court records search, action checklist, evidence inventory.",
      "openapi": "https://sentry-forge-x402.fly.dev/openapi.json",
      "wellknown": "https://sentry-forge-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/dispute-pack",
          "price": "$0.50",
          "amount_atoms": "500000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "_note": "see .well-known/x402 for this host"
          },
          "description": "Generate an 8-file consumer-debt dispute pack from a collector letter, original contract, and customer narrative"
        }
      ]
    },
    {
      "name": "Dispatch Router",
      "slug": "dispatch",
      "url": "https://dispatch-x402.fly.dev",
      "category": "Platform / Routing",
      "description": "Paid routing layer for the agent-commerce fleet. One natural-language intent in, the right paid service + params out.",
      "openapi": "https://dispatch-x402.fly.dev/openapi.json",
      "wellknown": "https://dispatch-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/dispatch",
          "price": "$0.50",
          "amount_atoms": "500000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "intent": "string (min 2 chars)",
            "params": "object? \u2013 optional downstream params"
          },
          "description": {
            "_note": "free companion routes: GET /api/services, POST /classify"
          }
        }
      ]
    },
    {
      "name": "Agent Escrow",
      "slug": "escrow",
      "url": "https://escrow-x402.fly.dev",
      "category": "Platform / Payments",
      "description": "Agent-to-agent USDC escrow on Base mainnet. 1% fee on release, timeout-refundable.",
      "openapi": "https://escrow-x402.fly.dev/openapi.json",
      "wellknown": "https://escrow-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api/escrow/create",
          "price": "$0.05",
          "amount_atoms": "50000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "agentB": "string (0x wallet)",
            "amountUsdc": "number",
            "task": "string",
            "timeoutHours": "number? (default 24)"
          },
          "description": {}
        }
      ]
    },
    {
      "name": "OpenSea Collection Data",
      "slug": "opensea-data",
      "url": "https://opensea-data-x402.fly.dev",
      "category": "Marketplace Data",
      "description": "Query OpenSea collection data: floor price, listings, offers, and traits for any collection slug.",
      "openapi": "https://opensea-data-x402.fly.dev/openapi.json",
      "wellknown": "https://opensea-data-x402.fly.dev/.well-known/x402",
      "endpoints": [
        {
          "method": "POST",
          "path": "/api",
          "price": "$0.01",
          "amount_atoms": "10000",
          "network": "eip155:8453",
          "payTo": "0x7861db4efc14a1ed5dd8c96c528a3796560f1393",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "body": {
            "collection": "string (slug e.g. boredapeyachtclub)",
            "action": "string enum floor|listings|offers|traits"
          },
          "description": {}
        }
      ]
    }
  ],
  "drift_notes": {
    "last_verification": {
      "utc": "2026-09-18T03:30Z",
      "method": "live 402-challenge decode, all 24 endpoints",
      "result": "24/24 correct network eip155:8453 + canonical payTo + catalog price; 0 drift",
      "price_drift_entries_retired": 12
    },
    "payment_semantics": {
      "note": "400/404 pre-payment on invalid schema is intentional and NOT a leak (buyer never charged); confirmed tradingagents x2, suprapack get-skill.",
      "verified": "2026-09-18"
    },
    "removed_stale_entries": [
      {
        "url": "https://rae-monetization-gateway.fly.dev",
        "reason": "GET /healthz is free, non-catalog product gateway",
        "removed": "2026-09-18"
      }
    ]
  }
};
const SERVICES = CATALOG.services.map((s) => ({
  name: s.name, slug: s.slug, url: s.url, category: s.category, description: s.description,
  openapi: s.openapi, wellknown: s.wellknown,
  endpoints: s.endpoints.map((e) => ({ method: e.method, path: e.path, price: e.price, amount_atoms: e.amount_atoms, network: e.network, payTo: e.payTo, asset: e.asset, body: e.body, description: e.description })),
}));
const PAY_TO = CATALOG.payTo;
const PLATFORM = {
  name: "Royal Agentic Enterprises",
  tagline: "Pay-per-call AI APIs. No keys. No subscriptions. Just USDC.",
  protocol: "x402 (HTTP 402 Payment Required)",
  network: "Base (EIP-155:8453)", token: "USDC",
  payTo_wallets: PAY_TO,
  contact: "jadedfocus@gmail.com",
  total_services: SERVICES.length,
  total_endpoints: SERVICES.reduce((n,s)=>n+s.endpoints.length,0),
  price_range: (() => { const p = SERVICES.flatMap((s)=>s.endpoints.map((e)=>parseFloat(e.price.slice(1)))); return `$${Math.min(...p).toFixed(2)} – $${Math.max(...p).toFixed(2)}`; })(),
  catalog_generated_at: CATALOG.generated_utc,
  categories: [...new Set(SERVICES.map((s)=>s.category))].sort(),
};
app.get("/health", (_q,res)=>res.json({status:"ok",service:"royal-gateway-x402",services:SERVICES.length,endpoints:PLATFORM.total_endpoints}));
app.get("/", (_q,res)=>res.json({platform:PLATFORM,how_it_works:{step_1:"Pick a service and endpoint from the catalog below",step_2:"POST to the endpoint — you get HTTP 402 with a payment spec header",step_3:"Sign a USDC payment on Base using x402",step_4:"Resend with the payment header — get your result instantly",note:"AI agents with x402 wallets handle steps 2-4 automatically."},quickstart:{description:"Example: search Claude Code skills",curl:"curl -X POST https://suprapack-x402.fly.dev/api/find-skill -H 'Content-Type: application/json' -d '{\"query\":\"stripe webhook\"}'",response:'HTTP 402 with payment-required header; pay with any x402-compatible wallet.'},links:{x402_protocol:"https://x402.org",x402_docs:"https://docs.cdp.coinbase.com/x402/welcome",x402_npm:"https://www.npmjs.com/package/@x402/express",bazaar:"https://x402.org/ecosystem"},services:SERVICES}));
app.get("/services", async (_q,res)=>{ const results = await Promise.all(SERVICES.map(async (svc)=>{ let status="unknown"; try { const c=new AbortController(); const t=setTimeout(()=>c.abort(),5000); const r=await fetch(`${svc.url}/health`,{signal:c.signal}); clearTimeout(t); status=r.ok?"healthy":`error:${r.status}`; } catch { status="unreachable"; } return {...svc,status}; })); res.json({ok:true,services:results,checked_at:new Date().toISOString()}); });
app.get("/categories", (_q,res)=>{ const cats={}; for (const svc of SERVICES){ (cats[svc.category]=cats[svc.category]||[]).push({name:svc.name,url:svc.url,endpoints:svc.endpoints.length}); } res.json({ok:true,categories:cats}); });
// x402 v2 platform-level discovery manifest: every paid endpoint in the catalog,
// keyed by absolute URL. Source: catalog-truth.json (regenerated 2026-09-08 from
// live 402 challenges + live OpenAPI). known_drift preserves catalog-vs-challenge gaps.
function platformManifest() {
  const endpoints = {};
  for (const svc of SERVICES) for (const ep of svc.endpoints) {
    endpoints[`${svc.url}${ep.path}`] = {
      method: ep.method,
      accepts: { scheme: "exact", price: ep.price, network: ep.network, payTo: ep.payTo,
                 asset: ep.asset, extra: { service: svc.slug, category: svc.category } },
      description: ep.description,
      mimeType: "application/json",
    };
  }
  return {
    version: "2.0.0",
    service: { name: "royal-gateway-x402", description: "Royal Agentic Enterprises x402 platform catalog — all paid endpoints across every service in one machine-readable manifest.", contact: "jadedfocus@gmail.com", operator: "Royal Agentic Enterprises", homepage: "https://royal-gateway-x402.fly.dev/" },
    generated_from: CATALOG.generated_utc,
    known_drift: CATALOG.drift_notes ?? {},
    endpoints,
  };
}
app.get("/.well-known/x402", (_q,res)=>res.json(platformManifest()));
app.get("/.well-known/x402.json", (_q,res)=>res.json(platformManifest()));
// EXEC-22: /x402.json alias at the discoverable root path (same manifest).
app.get("/x402.json", (_q,res)=>res.json(platformManifest()));
// EXEC-22: machine-readable surfaces generated from the same catalog source.
require("./public-discovery").registerPublicDiscovery(app, {
  baseUrl: "https://royal-gateway-x402.fly.dev",
  PLATFORM,
  SERVICES,
});
app.get("/docs", (_q,res)=>{ const paths={}; for (const svc of SERVICES) for (const ep of svc.endpoints) { const u=`${svc.url}${ep.path}`; paths[u]={[ep.method.toLowerCase()]:{summary:ep.description,service:svc.name,category:svc.category,price:ep.price,payment:"x402 USDC on Base",payTo:ep.payTo,requestBody:ep.body}}; } res.json({openapi:"3.0.0",info:{title:"Royal Agentic Enterprises — x402 API Platform",version:"2.0.0",description:PLATFORM.tagline,contact:{email:PLATFORM.contact}},servers:SERVICES.map((s)=>({url:s.url,description:s.name})),paths}); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`royal-gateway-x402 on :${PORT} — ${SERVICES.length} services, ${PLATFORM.total_endpoints} endpoints, payTo ${PAY_TO.join(',')}`));