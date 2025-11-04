document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('ageVerified')) {
    const ageGate = document.createElement('div');
    ageGate.id = 'ageGate';
    ageGate.innerHTML = `
      <div style="text-align: center;">
        <h2 style="margin-bottom: 1rem;">21+ Only</h2>
        <p style="margin-bottom: 2rem; max-width: 400px;">This site is for adults 21+. Are you 21 or older?</p>
        <button id="yesBtn" style="margin: 0.5rem; padding: 1rem 2rem; background: #DAA520; color: #228B22; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: bold;">Yes, I'm 21+</button>
        <button id="noBtn" style="margin: 0.5rem; padding: 1rem 2rem; background: #666; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem;">No, Take Me Away</button>
      </div>
    `;
    ageGate.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
      background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; 
      z-index: 100; color: white; flex-direction: column; text-align: center; padding: 2rem;
      font-family: 'Roboto', sans-serif;
    `;
    document.body.appendChild(ageGate);

    // Add Event Listeners for Buttons
    document.getElementById('yesBtn').addEventListener('click', function() {
      localStorage.setItem('ageVerified', 'true');
      ageGate.remove(); // Hide overlay
    });
    document.getElementById('noBtn').addEventListener('click', function() {
      window.location.href = 'https://www.responsiblemarijuana.org'; // Redirect
    });
  }
});
