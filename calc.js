const display = document.getElementById('display');
const keys = document.querySelector('.keys');

function safeEval(expr) {

    if (!/^[0-9+\-*/.() ]+$/.test(expr))
         return 'Error';
  try {
    const val = Function(`"use strict"; return (${expr})`)();
    if (Number.isFinite(val)) return String(val);
    return 'Error';
  } catch {
    return 'Error';
  }
}

keys.addEventListener('click', (e) => {
  const k = e.target?.dataset?.k;
  if (!k) return;

  if (k === 'C') {
    display.value = '0';
    return;
  }
  if (k === '=') {
    display.value = safeEval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
    return;
  }
  if (display.value === '0' && /[0-9.]/.test(k)) {
    display.value = k;
  } else {
    display.value += k;
  }
});