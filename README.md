# royal-gateway-x402

Canonical home of the RAE catalog gateway. The live app was running for 13 days with **zero Git provenance** (source only inside the Fly container); this repo is the reconstruction from the container copy (11,816B, Aug 26 image) fixed against live truth.

- `catalog-truth.json` — generated 2026-09-08 from each service's live OpenAPI + decoded 402 challenges (network, amount_atoms, payTo verbatim). Regenerate after every service deploy; the catalog must NEVER carry hand-typed prices, paths, or wallets.
- `index.js` — v2 gateway: PLATFORM derived from CATALOG (no literals); exposes payTo per endpoint + catalog_generated_at.

Deploy: `workflow_dispatch` only (no auto-deploy), per Golden Rule. Verify `/` returns payTo 0x7861db4e…, 24 endpoints, and price range matching live challenges.
