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
      font-family: 'Roboto', sans-serif; pointer-events: auto;
    `;
    document.body.appendChild(ageGate);
    console.log('Gate appended to body');

    setTimeout(() => {
      const yesBtn = document.getElementById('yesBtn');
      const noBtn = document.getElementById('noBtn');
      if (yesBtn && noBtn) {
        console.log('Buttons found - attaching listeners');
        // Yes Button
        yesBtn.addEventListener('click', function(e) {
          console.log('Yes click detected'); // Debug
          yesBtn.style.border = '3px solid red'; // TEMP Visual flash
          setTimeout(() => yesBtn.style.border = '', 500); // Reset
          alert('Yes clicked! Gate should hide now.'); // TEMP - remove after
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          localStorage.setItem('ageVerified', 'true');
          ageGate.style.display = 'none'; // Fallback hide
          setTimeout(() => ageGate.remove(), 100); // Ensure removal
          console.log('Yes - gate hidden/removed');
        });
        // No Button
        noBtn.addEventListener('click', function(e) {
          console.log('No click detected'); // Debug
          noBtn.style.border = '3px solid red'; // TEMP Visual flash
          setTimeout(() => noBtn.style.border = '', 500); // Reset
          alert('No clicked! Redirecting...'); // TEMP - remove after
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          console.log('No - redirecting');
          window.location.href = 'https://www.responsiblemarijuana.org';
        });
        yesBtn.focus();
        // Allow clicks on gate bg (no action)
        ageGate.addEventListener('click', function(e) {
          if (e.target === ageGate) {
            console.log('Clicked gate background - ignore');
          }
        });
      } else {
        console.error('Buttons not found - check innerHTML');
      }
    }, 200); // Longer delay for safety
  } else {
    console.log('Age verified - skipping gate');
  }
});
