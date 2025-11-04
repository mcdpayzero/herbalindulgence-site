document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('ageVerified')) {
    const ageGate = document.createElement('div');
    ageGate.id = 'ageGate';
    ageGate.innerHTML = `
      <h2>21+ Only</h2>
      <p>This site is for adults 21+. Are you 21 or older?</p>
      <button onclick="localStorage.setItem('ageVerified', 'true'); document.getElementById('ageGate').remove();">Yes, I'm 21+</button>
      <button onclick="window.location.href='https://www.responsiblemarijuana.org';">No, Take Me Away</button>
    `;
    ageGate.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;justify-content:center;align-items:center;z-index:100;color:white;flex-direction:column;text-align:center;padding:2rem;';
    ageGate.querySelectorAll('button').forEach(btn => {
      btn.style.cssText = 'margin:1rem;padding:1rem;background:#DAA520;color:#228B22;border:none;border-radius:5px;cursor:pointer;font-size:1rem;';
    });
    document.body.appendChild(ageGate);
  }
});