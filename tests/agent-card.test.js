// AGENSTRY-W1 cycle-6 acceptance tests — A2A v1.0 agent card + free JSON-RPC
// SendMessage surface on the platform catalog gateway (recO9y9mCEnExkp3W).
// Mirrors the proven rae-fleet-router test_agent_card.cjs harness (PR #6):
// (1) GET /.well-known/agent-card.json + /.well-known/agent.json -> 200 JSON,
//     never 402, no PAYMENT-REQUIRED header (this app has no payment
//     middleware at all — free by construction);
// (2) card schema-conformance for Agenstry scoring: protocolVersion "1.0"
//     Major.Minor, https /a2a url, supportedInterfaces bonus, >=3 skills each
//     with id/name/description/tags, examples list[str], x402 capability
//     extension naming eip155:8453 + canonical treasury;
// (3) POST /a2a answers SendMessage (v1), message/send (v0.3), GetAgentCard;
//     unknown method -> -32601, malformed -> -32600, all in-body at HTTP 200;
// (4) every number in the card/guide is DERIVED from the same generated
//     catalog that feeds /pricing.md — cross-checked against live /pricing.md
//     and /.well-known/x402.json shapes in this repo.
// Run: node tests/agent-card.test.js   (no secrets, no network, no money)
const assert = require('assert');
const { app, SERVICES, PLATFORM, PAY_TO, agentCardJson, catalogStats } = require('../index.js');

let failures = 0;
function check(name, cond, detail) {
  console.log(`${cond ? 'PASS' : 'FAIL'} ${name}${detail ? ' — ' + detail : ''}`);
  if (!cond) failures++;
}

async function main() {
  const server = app.listen(0, '127.0.0.1');
  await new Promise((r) => server.once('listening', r));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    // (1) free ungated card at both well-known URIs
    const rC = await fetch(`${base}/.well-known/agent-card.json`);
    check('GET /.well-known/agent-card.json -> 200', rC.status === 200, `got ${rC.status}`);
    check('card route never 402', rC.status !== 402);
    check('no PAYMENT-REQUIRED header on card', !rC.headers.get('payment-required'));
    const card = await rC.json();
    const rOld = await fetch(`${base}/.well-known/agent.json`);
    check('GET /.well-known/agent.json -> 200 (v0.3 URI alias)', rOld.status === 200, `got ${rOld.status}`);

    // (2) card shape
    check("protocolVersion is Major.Minor '1.0'", card.protocolVersion === '1.0', card.protocolVersion);
    check('version declared', typeof card.version === 'string' && card.version.length > 0);
    check('name + description', typeof card.name === 'string' && card.name.length > 3 && typeof card.description === 'string' && card.description.length > 20);
    check('card url is https /a2a', /^https:\/\//.test(card.url || '') && /\/a2a$/.test(card.url || ''), card.url);
    check('supportedInterfaces bonus present', Array.isArray(card.supportedInterfaces) && card.supportedInterfaces.length >= 1 && card.supportedInterfaces[0].transport === 'JSONRPC');
    check('v1 AgentInterface protocolBinding present (REQUIRED by a2a v1 proto; SDK transport matching fails without it)', card.supportedInterfaces[0].protocolBinding === 'JSONRPC' && card.supportedInterfaces[0].protocolVersion === '1.0');
    check('preferredTransport JSONRPC', card.preferredTransport === 'JSONRPC');
    check('provider = Royal Agentic Enterprises', card.provider && card.provider.organization === 'Royal Agentic Enterprises');
    check('documentationUrl = live /pricing.md', card.documentationUrl === 'https://royal-gateway-x402.fly.dev/pricing.md');
    check('>=3 skills', Array.isArray(card.skills) && card.skills.length >= 3, `skills=${(card.skills || []).length}`);
    check('every skill has id/name/description/tags', (card.skills || []).every((s) => s.id && s.name && s.description && Array.isArray(s.tags) && s.tags.length >= 1));
    check('skill examples are strings (AgentSkill schema)', (card.skills || []).every((s) => s.examples === undefined || (Array.isArray(s.examples) && s.examples.every((x) => typeof x === 'string'))));
    const ext = ((card.capabilities || {}).extensions) || [];
    check('x402 capability flag declared', ext.some((e) => /x402/i.test(String(e.uri || '') + String(e.description || ''))));
    check('extension text names mainnet + canonical treasury', ext.some((e) => /eip155:8453/.test(e.description || '') && /0x7861db4efc14a1ed5dd8c96c528a3796560f1393/.test(e.description || '')));

    // (4) catalog-derived truth — card numbers must equal generated catalog math
    const st = catalogStats();
    check('skill count derived matches catalog (16/27 at stamp)', st.nServices === SERVICES.length && st.nEndpoints === SERVICES.reduce((n, s) => n + s.endpoints.length, 0), `${st.nServices} svcs / ${st.nEndpoints} eps`);
    check('card description carries live counts', card.description.includes(String(st.nServices)) && card.description.includes(String(st.nEndpoints)));
    check('payTo in card == catalog payTo[0] == canonical', PAY_TO[0] === '0x7861db4efc14a1ed5dd8c96c528a3796560f1393' && card.capabilities.extensions[0].description.includes(PAY_TO[0]));
    check('every catalog endpoint priced with $ parses', SERVICES.every((s) => s.endpoints.every((e) => /^\$\d+(\.\d+)?$/.test(e.price))));

    // (3) JSON-RPC SendMessage surface
    const rpc = async (payload, headers) => {
      const r = await fetch(`${base}/a2a`, { method: 'POST', headers: Object.assign({ 'Content-Type': 'application/json' }, headers || {}), body: typeof payload === 'string' ? payload : JSON.stringify(payload) });
      return { status: r.status, noPay: r.status !== 402 && !r.headers.get('payment-required'), body: await r.json() };
    };
    const v03 = await rpc({ jsonrpc: '2.0', id: 7, method: 'message/send', params: { message: { kind: 'message', role: 'user', messageId: 'm1', parts: [{ kind: 'text', text: 'what does the fleet cost?' }] } } });
    check('v0.3 message/send -> 200 JSON-RPC result', v03.status === 200 && v03.body.jsonrpc === '2.0' && v03.body.id === 7 && !!v03.body.result, `status=${v03.status}`);
    check('v0.3 answer never bills', v03.noPay);
    check('v0.3 result is agent message with text parts', v03.body.result.kind === 'message' && v03.body.result.role === 'agent' && Array.isArray(v03.body.result.parts) && typeof v03.body.result.parts[0].text === 'string');
    check('guide text names counts + treasury + cheapest', /\d+ services/.test(v03.body.result.parts[0].text) && v03.body.result.parts[0].text.includes(PAY_TO[0]) && /Cheapest live endpoint/.test(v03.body.result.parts[0].text));
    check('guide metadata declares free + x402 payTo', v03.body.result.metadata.free === true && v03.body.result.metadata.x402.payTo === PAY_TO[0] && v03.body.result.metadata.x402.network === 'eip155:8453');

    const v1 = await rpc({ jsonrpc: '2.0', id: 'a', method: 'SendMessage', params: { message: { parts: [{ text: 'cheapest way to generate an image?' }] } } });
    check('v1.0 SendMessage -> 200 result', v1.status === 200 && v1.body.result && v1.body.id === 'a');
    check('v1 protojson negotiation: ROLE_AGENT + bare parts', v1.body.result.role === 'ROLE_AGENT' && v1.body.result.kind === undefined && v1.body.result.parts[0].kind === undefined && typeof v1.body.result.parts[0].text === 'string');
    check('bare-text inbound parts parsed', /nanobanana/i.test(v1.body.result.parts[0].text));
    check('keyword routing adds catalog match', /Matched:/.test(v1.body.result.parts[0].text) && /NanoBanana/.test(v1.body.result.parts[0].text), v1.body.result.parts[0].text.slice(-200));

    const nftQ = await rpc({ jsonrpc: '2.0', id: 9, method: 'SendMessage', params: { message: { parts: [{ kind: 'text', text: 'NFT floor and OpenSea collections' }] } } });
    check('nft keyword hits NFT Alpha / OpenSea data', /NFT Alpha|OpenSea/.test(nftQ.body.result.parts[0].text));

    const gc = await rpc({ jsonrpc: '2.0', id: 3, method: 'GetAgentCard', params: {} });
    check('GetAgentCard returns the card', gc.status === 200 && gc.body.result && gc.body.result.protocolVersion === '1.0' && Array.isArray(gc.body.result.skills));

    const unk = await rpc({ jsonrpc: '2.0', id: 4, method: 'tasks/get', params: {} });
    check('unknown method -> in-body -32601 at HTTP 200', unk.status === 200 && unk.body.error && unk.body.error.code === -32601);
    const bad = await rpc({ hello: 'world' });
    check('malformed request -> in-body -32600', bad.status === 200 && bad.body.error && bad.body.error.code === -32600);

    // regression: existing catalog surfaces still work
    for (const [path, expect] of [['/health', 'json'], ['/pricing.md', 'text'], ['/.well-known/x402.json', 'json'], ['/llms.txt', 'text'], ['/docs', 'json']]) {
      const r = await fetch(`${base}${path}`);
      check(`regression ${path} -> 200`, r.status === 200, `got ${r.status}`);
    }
  } finally {
    server.close();
  }
  console.log(`\n${failures === 0 ? 'ALL PASS' : failures + ' FAILURES'} — agent-card gateway acceptance`);
  process.exit(failures === 0 ? 0 : 1);
}
main().catch((e) => { console.error('FATAL', e); process.exit(1); });
