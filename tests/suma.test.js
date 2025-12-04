const assert = require('node:assert').strict;
const { suma } = require('../src/app.js');

describe('Función suma', () => {
  it('debe sumar correctamente', () => {
    assert.equal(suma(2, 3), 5);
    assert.equal(suma(5, 5), 10);
  });
});
