document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - starting age gate check'); // Debug: Confirm script runs
  if (!localStorage.getItem('ageVerified')) {
    console.log('No verification found - creating gate'); // Debug
    const ageGate = document.createElement('div');
    ageGate.id = 'ageGate';
    ageGate.setAttribute('role', 'dialog'); // Accessibility
    ageGate.setAttribute('aria-modal', 'true');
    ageGate.setAttribute('aria-labelledby', 'ageTitle');
    ageGate.innerHTML = `
      <div style="text-align: center;">
        <h2 id="ageTitle" style="margin-bottom: 1rem;">21+ Only</h2>
        <p style="margin-bottom: 2rem; max-width: 400px;">This site is for adults 21+. Are you 21 or older?</p>
        <button id="yesBtn" style="margin: 0.5rem; padding: 1rem 2rem; background: #DAA520; color: #228B22; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: bold;">Yes, I'm 21+</button>
        <button id="noBtn" style="margin: 0.5rem; padding: 1rem 2rem; background: #666; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem;">No, Take Me Away</button>
      </div>
    `;
    ageGate.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
      background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; 
      z-index: 9999; color: white; flex-direction: column; text-align: center; padding: 2rem;
      font-family: 'Roboto', sans-serif;
    `;
    document.body.appendChild(ageGate);
    console.log('Gate appended to body'); // Debug

    // Wait a tick for DOM update, then attach listeners
    setTimeout(() => {
      const yesBtn = document.getElementById('yesBtn');
      const noBtn = document.getElementById('noBtn');
      if (yesBtn && noBtn) {
        console.log('Buttons found - attaching listeners'); // Debug
        yesBtn.addEventListener('click', function(e) {
          e.preventDefault();
          localStorage.setItem('ageVerified', 'true');
          ageGate.remove();
          console.log('Yes clicked - gate removed'); // Debug
        });
        noBtn.addEventListener('click', function(e) {
          e.preventDefault();
          window.location.href = 'https://www.responsiblemarijuana.org'; // Redirect
          console.log('No clicked - redirecting'); // Debug
        });
        // Focus first button for keyboard nav
        yesBtn.focus();
      } else {
        console.error('Buttons not found - gate creation failed'); // Debug error
      }
    }, 0); // Micro-delay for DOM
  } else {
    console.log('Age verified - skipping gate'); // Debug
  }
});
