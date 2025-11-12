document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - starting age gate check');
  if (!localStorage.getItem('ageVerified')) {
    console.log('No verification found - creating gate');
    const ageGate = document.createElement('div');
    ageGate.id = 'ageGate';
    ageGate.setAttribute('role', 'dialog');
    ageGate.setAttribute('aria-modal', 'true');
    ageGate.setAttribute('aria-labelledby', 'ageTitle');
    ageGate.innerHTML = `
      <div style="text-align: center; position: relative; z-index: 1; pointer-events: auto;">
        <h2 id="ageTitle" style="margin-bottom: 1rem;">21+ Only</h2>
        <p style="margin-bottom: 2rem; max-width: 400px;">This site is for adults 21+. Are you 21 or older?</p>
        <button id="yesBtn" style="margin: 0.5rem; padding: 1rem 2rem; background: #DAA520; color: #228B22; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: bold; pointer-events: auto; z-index: 10001;">Yes, I'm 21+</button>
        <button id="noBtn" style="margin: 0.5rem; padding: 1rem 2rem; background: #666; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; pointer-events: auto; z-index: 10001;">No, Take Me Away</button>
      </div>
    `;
    ageGate.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
      background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; 
      z-index: 10000; color: white; flex-direction: column; text-align: center; padding: 2rem;
      font-family: 'Roboto', sans-serif; pointer-events: none; /* Allow clicks to pass through */
    `;
    ageGate.querySelectorAll('button').forEach(btn => btn.style.pointerEvents = 'auto'); // Explicit on buttons
    document.body.appendChild(ageGate);
    console.log('Gate appended to body');

    // Capture Phase Listener on Gate (fires before bubbling)
    ageGate.addEventListener('click', function(e) {
      console.log('Click on gate - target:', e.target.id || e.target.tagName); // Debug: Logs button ID or TAG
      if (e.target.id === 'yesBtn') {
        console.log('Yes button clicked - handling');
        localStorage.setItem('ageVerified', 'true');
        ageGate.remove();
      } else if (e.target.id === 'noBtn') {
        console.log('No button clicked - redirecting');
        window.location.href = 'https://www.responsiblemarijuana.org';
      }
      // Ignore bg clicks
    }, true); // true = capture phase (top-down)

    // Fallback bubble phase on buttons
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    if (yesBtn && noBtn) {
      console.log('Fallback listeners attached');
      yesBtn.addEventListener('click', function(e) {
        console.log('Fallback Yes click');
        localStorage.setItem('ageVerified', 'true');
        ageGate.remove();
      });
      noBtn.addEventListener('click', function(e) {
        console.log('Fallback No click');
        window.location.href = 'https://www.responsiblemarijuana.org';
      });
      yesBtn.focus();
    }
  } else {
    console.log('Age verified - skipping gate');
  }
});
