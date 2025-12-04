function suma(a, b) {
  return a + b;
}

function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

if (typeof window !== 'undefined') {
  console.log('App lista');

  const btn = document.getElementById('btnAgregar');
  const input = document.getElementById('inputText');

  btn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto !== '') {
      agregarItem(texto);
      document.getElementById('mensaje').textContent = 'Elemento agregado ✅';
      input.value = '';
    }
  });
}

module.exports = { suma };
