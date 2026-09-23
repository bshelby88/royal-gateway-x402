// EXEC-40: standalone test for the free /sample surface on the platform gateway.
// No dev-dependency footprint: built-in assert + net + fetch only (node >= 18).
const assert = require('assert');
const net = require('net');
const { registerPublicDiscovery } = require('../public-discovery');
const express = require('express');

const PLATFORM = {
  name: 'Royal Agentic', network: 'eip155:8453', payTo_wallets: ['0x7861db4efc14a1ed5dd8c96c528a3796560f1393'],
  total_services: 2, total_endpoints: 3, price_range: '$0.01 – $0.03', tagline: 'test tagline',
  protocol: 'x402', contact: 'test@example.com', categories: ['a'],
};
const SERVICES = [
  { name: 'SupraPack', slug: 'suprapack', url: 'https://suprapack-x402.fly.dev', category: 'dev', description: 'skill index',
    endpoints: [{ method: 'POST', path: '/api/find-skill', price: '$0.03', network: 'eip155:8453', payTo: PLATFORM.payTo_wallets[0], body: { query: 'string' }, description: 'find skill' }] },
  { name: 'Nimbus Oracle', slug: 'nft-oracle', url: 'https://nimbus-agent.fly.dev', category: 'data', description: 'nft data',
    endpoints: [
      { method: 'POST', path: '/api/nft/floor', price: '$0.01', network: 'eip155:8453', payTo: PLATFORM.payTo_wallets[0], body: { slug: 'string' }, description: 'floor' },
      { method: 'POST', path: '/api/nft/trending', price: '$0.01', network: 'eip155:8453', payTo: PLATFORM.payTo_wallets[0], body: {}, description: 'trending' }] },
];

function withServer(app) {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, '127.0.0.1', async () => {
      try {
        resolve(`http://127.0.0.1:${server.address().port}`);
        withServer.server = server;
      } catch (e) { reject(e); }
    });
  });
}

(async () => {
  const app = express();
  registerPublicDiscovery(app, { baseUrl: 'https://royal-gateway-x402.fly.dev', PLATFORM, SERVICES });
  const base = await withServer(app);
  try {
    const r = await fetch(base + '/sample');
    assert.strictEqual(r.status, 200, 'GET /sample must be 200');
    assert.strictEqual(r.headers.get('payment-required'), null, 'sample must be free (no 402 challenge header)');
    const b = await r.json();
    assert.strictEqual(b.ok, true);
    assert.strictEqual(b.free, true);
    assert.match(b.note, /synthetic/i, 'sample must be labeled synthetic');
    assert.strictEqual(b.catalog.endpoints, PLATFORM.total_endpoints, 'catalog stats derive from PLATFORM constants');
    assert.strictEqual(b.catalog.payTo_wallets[0], '0x7861db4efc14a1ed5dd8c96c528a3796560f1393', 'canonical payTo surfaced');
    assert.strictEqual(b.example_request.price, '$0.03', 'example pulls first catalog endpoint price');
    assert.ok(b.example_response.paid_flow[0].includes('/api/find-skill'), 'paid flow references the example endpoint');
    assert.ok(b.machine_contract.x402_manifest.endsWith('/.well-known/x402.json'));
    // sibling surfaces must not have regressed
    assert.strictEqual((await fetch(base + '/pricing.md')).status, 200);
    assert.strictEqual((await fetch(base + '/llms.txt')).status, 200);
    console.log('EXEC-40 /sample test: PASS (11 assertions)');
  } finally {
    withServer.server.close();
  }
})().catch((e) => { console.error('EXEC-40 /sample test: FAIL', e.message); process.exit(1); });
