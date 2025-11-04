function updateQuote() {
  const base = 499;
  const addons = { eDebit: 99, scanner: 199 };
  let total = base;
  document.querySelectorAll('#configurator input[type="checkbox"]:checked').forEach(cb => {
    total += addons[cb.value] || 0;
  });
  document.getElementById('quote-total').textContent = `$${total}`;
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('configurator')) {
    updateQuote();  // Initial calc
  }
});