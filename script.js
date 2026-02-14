// script.js - ULTRA SIMPLE VERSION (Loading screen WILL disappear)
document.addEventListener('DOMContentLoaded', function() {
  // ===== SIMPLE LOADING SCREEN - GUARANTEED TO WORK =====
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');
  
  // Force hide loading screen after 2 seconds no matter what
  setTimeout(function() {
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(function() {
        if (loadingScreen) loadingScreen.style.display = 'none';
      }, 500);
    }
    if (mainContent) {
      mainContent.style.opacity = '1';
    }
  }, 2000);
  
  // Also hide it immediately if everything loads fast
  if (loadingScreen) {
    // Fallback: hide after 3 seconds maximum
    setTimeout(function() {
      if (loadingScreen.style.display !== 'none') {
        loadingScreen.style.display = 'none';
        if (mainContent) mainContent.style.opacity = '1';
      }
    }, 3000);
  }

  // ===== SIMPLE APPLICATION =====
  console.log("Valentine card starting...");
  
  // Get elements
  const envelopeFront = document.getElementById('envelopeFront');
  const envelopeInside = document.getElementById('envelopeInside');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const loveLetter = document.getElementById('loveLetter');
  const appreciationLetter = document.getElementById('appreciationLetter');
  const letterVault = document.getElementById('letterVault');
  const gifContainer = document.getElementById('gifContainer');
  
  // Check if elements exist
  if (!envelopeFront || !yesBtn || !noBtn) {
    console.log("Some elements not found, but loading screen will still hide");
    return;
  }
  
  // Simple state
  let yesPressCount = 0;
  let noPressCount = 0;
  const MAX_PRESS = 3;
  
  // Button texts
  const yesTexts = ["YES 💝", "really? 💭", "you sure? 💖"];
  const noTexts = ["no 😢", "really? 💭", "you sure? 💔"];
  
  // GIF links
  const HAPPY_CAT = 'https://media.tenor.com/6n68etrhR2wAAAAi/happy-catto-cats.gif';
  const SUS_CAT = 'https://media.tenor.com/_cGquT5e21MAAAAi/cat.gif';
  
  // Simple GIF function
  function showGif(type) {
    if (!gifContainer) return;
    gifContainer.innerHTML = '';
    const img = document.createElement('img');
    img.className = 'reaction-gif';
    img.src = type === 'happy' ? HAPPY_CAT : SUS_CAT;
    img.alt = type === 'happy' ? 'Happy Cat' : 'Suspicious Cat';
    gifContainer.appendChild(img);
    setTimeout(() => {
      if (gifContainer) gifContainer.innerHTML = '';
    }, 3000);
  }
  
  // Reset functions
  function resetYes() {
    yesPressCount = 0;
    yesBtn.textContent = yesTexts[0];
    yesBtn.classList.remove('pressed');
  }
  
  function resetNo() {
    noPressCount = 0;
    noBtn.textContent = noTexts[0];
    noBtn.classList.remove('pressed');
  }
  
  // Update functions
  function updateYes() {
    if (yesPressCount < MAX_PRESS) {
      yesBtn.textContent = yesTexts[yesPressCount];
      yesBtn.classList.add('pressed');
      if (yesPressCount === 2) showGif('happy');
    }
    if (yesPressCount >= MAX_PRESS) {
      // Show letter
      envelopeFront.classList.add('hidden');
      envelopeInside.classList.remove('visible');
      if (letterVault) letterVault.style.display = 'block';
      if (loveLetter) loveLetter.classList.add('visible');
      if (appreciationLetter) appreciationLetter.classList.remove('visible');
    }
  }
  
  function updateNo() {
    if (noPressCount < MAX_PRESS) {
      noBtn.textContent = noTexts[noPressCount];
      noBtn.classList.add('pressed');
      if (noPressCount === 2) showGif('sus');
    }
    if (noPressCount >= MAX_PRESS) {
      // Show letter
      envelopeFront.classList.add('hidden');
      envelopeInside.classList.remove('visible');
      if (letterVault) letterVault.style.display = 'block';
      if (appreciationLetter) appreciationLetter.classList.add('visible');
      if (loveLetter) loveLetter.classList.remove('visible');
    }
  }
  
  // Event listeners
  envelopeFront.addEventListener('click', function(e) {
    e.stopPropagation();
    envelopeFront.classList.add('hidden');
    envelopeInside.classList.add('visible');
    yesPressCount = 0;
    noPressCount = 0;
    resetYes();
    resetNo();
    if (gifContainer) gifContainer.innerHTML = '';
  });
  
  yesBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    yesPressCount++;
    resetNo();
    updateYes();
  });
  
  noBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    noPressCount++;
    resetYes();
    updateNo();
  });
  
  console.log("Valentine card ready!");
});
