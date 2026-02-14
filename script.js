// script.js - COMPLETELY FIXED VERSION
document.addEventListener('DOMContentLoaded', () => {
  // ===== PIXELATED LOADING SCREEN =====
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');
  
  // Add pixel particles
  const pixelBg = document.querySelector('.pixel-bg');
  for (let i = 0; i < 30; i++) {
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
  
  // Loading timeout
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    mainContent.style.opacity = '1';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000);
  }, 2000);

  // ===== MAIN APPLICATION =====
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

  // Ensure everything starts hidden
  surpriseHeader.classList.remove('show');
  refreshModal.classList.remove('show');
  letterVault.style.display = 'none';
  
  // Track press counts for each button (max 3)
  let yesPressCount = 0;
  let noPressCount = 0;
  const MAX_PRESS = 3;

  // Button text sequences
  const yesTexts = ["YES 💝", "really? 💭", "you sure? 💖"];
  const noTexts = ["no 😢", "really? 💭", "you sure? 💔"];

  // ===== PERSONALIZED REFRESH LETTERS =====
  const refreshLetters = [
    "<p>You came back!! 💕</p><p>I was hoping you would. Every time you visit, my heart does a little flip. The original letter is still waiting for you below.</p><p>Take your time, there's no rush.</p>",
    
    "<p>Miss already? 🥰</p><p>I missed you too. It's nice to see you again.</p><p>The letter hasn't changed, but it's always here for you.</p>",
    
    "<p>How are you? 💭</p><p>I'm glad that you want to read the letter I wrote just for you.</p><p>Take your time!!</p>",
    
    "<p>One more time? 💫</p><p>You keep coming back. I wonder what's on your mind.</p><p>The letter is right there when you're ready.</p>",
    
    "<p>You are not sure about your answer, didn't you? 😏</p><p>It's okay to take your time. Some decisions need a little extra thought.</p><p>The letter will always be here when you're ready.</p>"
  ];

  // Surprise messages that also loop
  const surpriseMessages = [
    '🌸 welcome back 🌸',
    '💕 missed you 💕',
    '💭 glad you came back 💭',
    '✨ one more time? ✨',
    '😏 you came back again... cute 😏'
  ];

  // Check if we're coming back after an answer was given (REFRESH)
  const answerInStorage = sessionStorage.getItem('answerGiven');
  const refreshCountInStorage = sessionStorage.getItem('refreshCount');
  
  if (answerInStorage === 'true') {
    // This is a REFRESH - we already answered before
    let refreshCount = refreshCountInStorage ? parseInt(refreshCountInStorage) : 0;
    
    // Increment refresh count
    refreshCount++;
    sessionStorage.setItem('refreshCount', refreshCount.toString());
    
    const answer = sessionStorage.getItem('userAnswer');
    
    // Hide envelope and show letter
    envelopeFront.classList.add('hidden');
    envelopeInside.classList.remove('visible');
    letterVault.style.display = 'block';
    
    if (answer === 'yes') {
      loveLetter.classList.add('visible');
      appreciationLetter.classList.remove('visible');
    } else if (answer === 'no') {
      appreciationLetter.classList.add('visible');
      loveLetter.classList.remove('visible');
    }
    
    // ONLY ON REFRESH: Show the surprise elements
    const messageIndex = (refreshCount - 1) % refreshLetters.length;
    refreshMessage.innerHTML = refreshLetters[messageIndex];
    refreshModal.classList.add('show');
    
    const surpriseIndex = (refreshCount - 1) % surpriseMessages.length;
    surpriseMessage.innerText = surpriseMessages[surpriseIndex];
    surpriseHeader.classList.add('show');
    
    generatePinkHearts();
  }

  // ---------- BUTTON FUNCTIONS ----------
  function resetYesButton() {
    yesPressCount = 0;
    yesBtn.textContent = yesTexts[0];
    yesBtn.classList.remove('pressed');
  }

  function resetNoButton() {
    noPressCount = 0;
    noBtn.textContent = noTexts[0];
    noBtn.classList.remove('pressed');
  }

  function updateYesButton() {
    if (yesPressCount < MAX_PRESS) {
      yesBtn.textContent = yesTexts[yesPressCount];
      yesBtn.classList.add('pressed');
    }
    if (yesPressCount >= MAX_PRESS) {
      showFinalLetter('yes');
    }
  }

  function updateNoButton() {
    if (noPressCount < MAX_PRESS) {
      noBtn.textContent = noTexts[noPressCount];
      noBtn.classList.add('pressed');
    }
    if (noPressCount >= MAX_PRESS) {
      showFinalLetter('no');
    }
  }

  // Close refresh modal
  closeRefresh.addEventListener('click', () => {
    refreshModal.classList.remove('show');
  });

  // Show the final letter (FIRST TIME ANSWERING)
  function showFinalLetter(type) {
    envelopeInside.classList.remove('visible');
    envelopeFront.classList.add('hidden');
    
    // Show letter vault
    letterVault.style.display = 'block';
    
    if (type === 'yes') {
      loveLetter.classList.add('visible');
      appreciationLetter.classList.remove('visible');
    } else {
      appreciationLetter.classList.add('visible');
      loveLetter.classList.remove('visible');
    }
    
    // Mark that answer has been given
    sessionStorage.setItem('answerGiven', 'true');
    sessionStorage.setItem('userAnswer', type);
    
    // Initialize refresh count to 0 (first answer, not a refresh yet)
    sessionStorage.setItem('refreshCount', '0');
    
    // DO NOT show surprise elements on first answer
    // They will only show on refresh
    
    generatePinkHearts();
  }

  // ---------- CLICK HANDLERS ----------
  envelopeFront.addEventListener('click', (e) => {
    e.stopPropagation();
    envelopeFront.classList.add('hidden');
    envelopeInside.classList.add('visible');
    
    // Reset button states
    yesPressCount = 0;
    noPressCount = 0;
    resetYesButton();
    resetNoButton();
  });

  yesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    yesPressCount++;
    resetNoButton();
    updateYesButton();
  });

  noBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    noPressCount++;
    resetYesButton();
    updateNoButton();
  });

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
  }
});
