const { test } = require('node:test');
const assert = require('node:assert');
const { suma } = require('../src/app');

test('suma de 2 + 3 debe ser 5', () => {
  assert.strictEqual(suma(2, 3), 5);
});
