// script.js - COMPLETE FIXED VERSION (Loading screen guaranteed to disappear)
document.addEventListener('DOMContentLoaded', () => {
  // ===== PIXELATED LOADING SCREEN - FIXED =====
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');
  
  // Make sure elements exist
  if (!loadingScreen || !mainContent) {
    console.error("Required elements not found!");
    return;
  }
  
  // Add pixel particles (this won't block loading)
  try {
    const pixelBg = document.querySelector('.pixel-bg');
    if (pixelBg) {
      for (let i = 0; i < 20; i++) {
        const pixel = document.createElement('div');
        pixel.style.position = 'absolute';
        pixel.style.width = '4px';
        pixel.style.height = '4px';
        pixel.style.background = '#ffb7c7';
        pixel.style.left = `${Math.random() * 100}%`;
        pixel.style.top = `${Math.random() * 100}%`;
        pixel.style.opacity = Math.random() * 0.5;
        pixel.style.animation = `pixelFloat ${Math.random() * 3 + 2}s infinite steps(8)`;
        pixelBg.appendChild(pixel);
      }
    }
  } catch (e) {
    console.log("Particle generation skipped:", e);
  }
  
  // FORCE loading screen to disappear after 2 seconds NO MATTER WHAT
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
      // Force hide after fade
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 1000);
    }
    if (mainContent) {
      mainContent.style.opacity = '1';
    }
  }, 2000);

  // ===== MAIN APPLICATION =====
  // Get all elements with error checking
  const envelopeFront = document.getElementById('envelopeFront');
  const envelopeInside = document.getElementById('envelopeInside');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  
  const loveLetter = document.getElementById('loveLetter');
  const appreciationLetter = document.getElementById('appreciationLetter');
  const letterVault = document.getElementById('letterVault');
  
  const surpriseHeader = document.getElementById('surpriseHeader');
  const floatingHearts = document.getElementById('floatingHearts');
  const surpriseMessage = document.getElementById('surpriseMessage');
  
  const refreshModal = document.getElementById('refreshLetter');
  const refreshMessage = document.getElementById('refreshMessage');
  const closeRefresh = document.getElementById('closeRefresh');
  
  const gifContainer = document.getElementById('gifContainer');

  // Check if critical elements exist
  if (!envelopeFront || !yesBtn || !noBtn) {
    console.error("Critical elements missing!");
    return;
  }

  // ===== PERMANENT STORAGE =====
  const STORAGE_KEY = 'valentine_permanent_answer';
  const REFRESH_COUNT_KEY = 'valentine_refresh_count';
  const FIRST_ANSWER_KEY = 'valentine_first_answer_done';
  
  // Load saved state
  let savedAnswer = null;
  let refreshCount = 0;
  let firstAnswerDone = false;
  
  try {
    savedAnswer = localStorage.getItem(STORAGE_KEY);
    refreshCount = parseInt(localStorage.getItem(REFRESH_COUNT_KEY) || '0');
    firstAnswerDone = localStorage.getItem(FIRST_ANSWER_KEY) === 'true';
  } catch (e) {
    console.log("LocalStorage error:", e);
  }
  
  // If there's a saved answer, show the appropriate letter immediately
  if (savedAnswer) {
    console.log("Saved answer found:", savedAnswer);
    
    if (envelopeFront) envelopeFront.classList.add('hidden');
    if (envelopeInside) envelopeInside.classList.remove('visible');
    if (letterVault) letterVault.style.display = 'block';
    
    if (savedAnswer === 'yes') {
      if (loveLetter) loveLetter.classList.add('visible');
      if (appreciationLetter) appreciationLetter.classList.remove('visible');
    } else if (savedAnswer === 'no') {
      if (appreciationLetter) appreciationLetter.classList.add('visible');
      if (loveLetter) loveLetter.classList.remove('visible');
    }
    
    // Show refresh elements ONLY on refresh/reopen
    if (refreshCount > 0 && firstAnswerDone) {
      const messageIndex = (refreshCount - 1) % refreshLetters.length;
      if (refreshMessage) refreshMessage.innerHTML = refreshLetters[messageIndex];
      if (refreshModal) refreshModal.classList.add('show');
      
      const surpriseIndex = (refreshCount - 1) % surpriseMessages.length;
      if (surpriseMessage) surpriseMessage.innerText = surpriseMessages[surpriseIndex];
      if (surpriseHeader) surpriseHeader.classList.add('show');
      
      generatePinkHearts();
    } else {
      if (surpriseHeader) surpriseHeader.classList.remove('show');
      if (refreshModal) refreshModal.classList.remove('show');
    }
  } else {
    if (surpriseHeader) surpriseHeader.classList.remove('show');
    if (refreshModal) refreshModal.classList.remove('show');
    if (letterVault) letterVault.style.display = 'none';
  }
  
  // Track press counts
  let yesPressCount = 0;
  let noPressCount = 0;
  const MAX_PRESS = 3;

  // Button text sequences
  const yesTexts = ["YES 💝", "really? 💭", "you sure? 💖"];
  const noTexts = ["no 😢", "really? 💭", "you sure? 💔"];

  // ===== GIF LINKS =====
  const HAPPY_CAT_GIF = 'https://media.tenor.com/6n68etrhR2wAAAAi/happy-catto-cats.gif';
  const SUS_CAT_GIF = 'https://media.tenor.com/_cGquT5e21MAAAAi/cat.gif';

  // ===== FUNCTION TO SHOW GIF =====
  function showGif(type) {
    if (!gifContainer) return;
    
    // Clear any existing GIF
    gifContainer.innerHTML = '';
    
    // Create GIF image
    const gifImg = document.createElement('img');
    gifImg.className = 'reaction-gif';
    
    // Set the correct GIF
    if (type === 'happy') {
      gifImg.src = HAPPY_CAT_GIF;
      gifImg.alt = 'Happy Cat';
    } else if (type === 'sus') {
      gifImg.src = SUS_CAT_GIF;
      gifImg.alt = 'Suspicious Cat';
    }
    
    gifContainer.appendChild(gifImg);
    
    // Remove GIF after 3 seconds
    setTimeout(() => {
      if (gifContainer) gifContainer.innerHTML = '';
    }, 3000);
  }

  // ===== REFRESH MESSAGES =====
  const refreshLetters = [
    "<p>You came back!! 💕</p><p>I was hoping you would. Every time you visit, my heart does a little flip. The original letter is still waiting for you below.</p><p>Take your time, there's no rush.</p>",
    "<p>Miss already? 🥰</p><p>I missed you too. It's nice to see you again.</p><p>The letter hasn't changed, but it's always here for you.</p>",
    "<p>How are you? 💭</p><p>I'm glad that you want to read the letter I wrote just for you.</p><p>Take your time!!</p>",
    "<p>One more time? 💫</p><p>You keep coming back. I wonder what's on your mind.</p><p>The letter is right there when you're ready.</p>",
    "<p>You are not sure about your answer, didn't you? 😏</p><p>It's okay to take your time. Some decisions need a little extra thought.</p><p>The letter will always be here when you're ready.</p>"
  ];

  const surpriseMessages = [
    '🌸 welcome back 🌸',
    '💕 missed you 💕',
    '💭 glad you came back 💭',
    '✨ one more time? ✨',
    '😏 you came back again... cute 😏'
  ];

  // ---------- BUTTON FUNCTIONS ----------
  function resetYesButton() {
    yesPressCount = 0;
    if (yesBtn) {
      yesBtn.textContent = yesTexts[0];
      yesBtn.classList.remove('pressed');
    }
  }

  function resetNoButton() {
    noPressCount = 0;
    if (noBtn) {
      noBtn.textContent = noTexts[0];
      noBtn.classList.remove('pressed');
    }
  }

  function updateYesButton() {
    if (!yesBtn) return;
    
    if (yesPressCount < MAX_PRESS) {
      yesBtn.textContent = yesTexts[yesPressCount];
      yesBtn.classList.add('pressed');
      
      // Show happy cat GIF when it's "you sure?" (3rd press)
      if (yesPressCount === 2) {
        showGif('happy');
      }
    }
    if (yesPressCount >= MAX_PRESS) {
      saveAnswerAndShowLetter('yes');
    }
  }

  function updateNoButton() {
    if (!noBtn) return;
    
    if (noPressCount < MAX_PRESS) {
      noBtn.textContent = noTexts[noPressCount];
      noBtn.classList.add('pressed');
      
      // Show sus cat GIF when it's "you sure?" (3rd press)
      if (noPressCount === 2) {
        showGif('sus');
      }
    }
    if (noPressCount >= MAX_PRESS) {
      saveAnswerAndShowLetter('no');
    }
  }

  if (closeRefresh) {
    closeRefresh.addEventListener('click', () => {
      if (refreshModal) refreshModal.classList.remove('show');
    });
  }

  function saveAnswerAndShowLetter(answer) {
    if (envelopeInside) envelopeInside.classList.remove('visible');
    if (envelopeFront) envelopeFront.classList.add('hidden');
    if (letterVault) letterVault.style.display = 'block';
    
    if (answer === 'yes') {
      if (loveLetter) loveLetter.classList.add('visible');
      if (appreciationLetter) appreciationLetter.classList.remove('visible');
    } else if (answer === 'no') {
      if (appreciationLetter) appreciationLetter.classList.add('visible');
      if (loveLetter) loveLetter.classList.remove('visible');
    }
    
    try {
      localStorage.setItem(STORAGE_KEY, answer);
      localStorage.setItem(FIRST_ANSWER_KEY, 'true');
      localStorage.setItem(REFRESH_COUNT_KEY, '0');
    } catch (e) {
      console.log("LocalStorage save error:", e);
    }
    
    if (surpriseHeader) surpriseHeader.classList.remove('show');
    if (refreshModal) refreshModal.classList.remove('show');
    
    generatePinkHearts();
  }

  // ---------- CLICK HANDLERS ----------
  if (envelopeFront) {
    envelopeFront.addEventListener('click', (e) => {
      e.stopPropagation();
      envelopeFront.classList.add('hidden');
      if (envelopeInside) envelopeInside.classList.add('visible');
      
      yesPressCount = 0;
      noPressCount = 0;
      resetYesButton();
      resetNoButton();
      
      // Clear any leftover GIFs
      if (gifContainer) gifContainer.innerHTML = '';
    });
  }

  if (yesBtn) {
    yesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      yesPressCount++;
      resetNoButton();
      updateYesButton();
    });
  }

  if (noBtn) {
    noBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      noPressCount++;
      resetYesButton();
      updateNoButton();
    });
  }

  // Stamp effect
  const stamp = document.querySelector('.stamp-sweet');
  if (stamp) {
    stamp.addEventListener('click', () => {
      stamp.style.transform = 'scale(1.2) rotate(8deg)';
      stamp.style.transition = '0.2s';
      setTimeout(() => {
        stamp.style.transform = 'scale(1) rotate(0deg)';
      }, 200);
    });
  }

  function generatePinkHearts() {
    if (!floatingHearts) return;
    
    floatingHearts.innerHTML = '';
    const symbols = ['❤️', '🧡', '💛', '💚', '💙', '💜', '💖', '💗', '🌸', '🌷', '🌺', '🌹'];
    for (let i = 0; i < 16; i++) {
      const span = document.createElement('span');
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      const size = 1.6 + Math.random() * 2.2;
      span.style.fontSize = `${size}rem`;
      span.style.animation = `floatPink ${2.5 + Math.random() * 3}s infinite alternate`;
      span.style.animationDelay = `${Math.random() * 2}s`;
      span.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
      floatingHearts.appendChild(span);
    }
  }
});
