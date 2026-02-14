// script.js - COMPLETELY FIXED with working refresh elements
document.addEventListener('DOMContentLoaded', function() {
  // ===== LOADING SCREEN =====
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');
  
  // Force hide loading screen after 2 seconds
  setTimeout(function() {
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
      setTimeout(function() {
        if (loadingScreen) loadingScreen.style.display = 'none';
      }, 1000);
    }
    if (mainContent) {
      mainContent.style.opacity = '1';
    }
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
  const refreshModal = document.getElementById('refreshLetter');
  const refreshMessage = document.getElementById('refreshMessage');
  const closeRefresh = document.getElementById('closeRefresh');
  const surpriseMessage = document.getElementById('surpriseMessage');
  const floatingHearts = document.getElementById('floatingHearts');

  // ===== PERMANENT STORAGE (localStorage) =====
  const ANSWER_KEY = 'valentine_answer';
  const REFRESH_COUNT_KEY = 'valentine_refresh_count';
  
  // Load saved data
  let savedAnswer = localStorage.getItem(ANSWER_KEY);
  let refreshCount = parseInt(localStorage.getItem(REFRESH_COUNT_KEY) || '0');
  
  console.log("Current state:", { savedAnswer, refreshCount }); // For debugging
  
  // PERSONALIZED MESSAGES
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

  // ===== CHECK IF THIS IS A REFRESH/REOPEN =====
  if (savedAnswer) {
    // Show the letter immediately
    envelopeFront.classList.add('hidden');
    envelopeInside.classList.remove('visible');
    letterVault.style.display = 'block';
    
    if (savedAnswer === 'yes') {
      loveLetter.classList.add('visible');
      appreciationLetter.classList.remove('visible');
    } else {
      appreciationLetter.classList.add('visible');
      loveLetter.classList.remove('visible');
    }
    
    // INCREMENT REFRESH COUNT on every visit after answer
    refreshCount++;
    localStorage.setItem(REFRESH_COUNT_KEY, refreshCount.toString());
    
    console.log("After increment:", refreshCount); // For debugging
    
    // SHOW REFRESH ELEMENTS on every visit AFTER the first answer view
    // First answer: refreshCount becomes 1 → DON'T show
    // First refresh: refreshCount becomes 2 → SHOW (message index 0)
    // Second refresh: refreshCount becomes 3 → SHOW (message index 1)
    // etc.
    
    if (refreshCount > 1) {
      // Calculate message index (0-based, starting from first refresh)
      const messageIndex = (refreshCount - 2) % refreshLetters.length;
      
      // Show refresh modal
      refreshMessage.innerHTML = refreshLetters[messageIndex];
      refreshModal.classList.add('show');
      
      // Show surprise header
      const surpriseIndex = (refreshCount - 2) % surpriseMessages.length;
      surpriseMessage.innerText = surpriseMessages[surpriseIndex];
      surpriseHeader.classList.add('show');
      
      generateFloatingHearts();
    }
  }
  
  // ===== BUTTON PRESS LOGIC =====
  let yesPressCount = 0;
  let noPressCount = 0;
  const MAX_PRESS = 3;
  
  const yesTexts = ["YES 💝", "really? 💭", "you sure? 💖"];
  const noTexts = ["no 😢", "really? 💭", "you sure? 💔"];
  
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
  
  function updateYes() {
    if (yesPressCount < MAX_PRESS) {
      yesBtn.textContent = yesTexts[yesPressCount];
      yesBtn.classList.add('pressed');
    }
    if (yesPressCount >= MAX_PRESS) {
      saveAnswer('yes');
    }
  }
  
  function updateNo() {
    if (noPressCount < MAX_PRESS) {
      noBtn.textContent = noTexts[noPressCount];
      noBtn.classList.add('pressed');
    }
    if (noPressCount >= MAX_PRESS) {
      saveAnswer('no');
    }
  }
  
  function saveAnswer(answer) {
    // Save answer
    localStorage.setItem(ANSWER_KEY, answer);
    
    // Set refresh count to 1 (this means: first answer done, next visit will be refresh #1)
    localStorage.setItem(REFRESH_COUNT_KEY, '1');
    
    // Show letter
    envelopeFront.classList.add('hidden');
    envelopeInside.classList.remove('visible');
    letterVault.style.display = 'block';
    
    if (answer === 'yes') {
      loveLetter.classList.add('visible');
      appreciationLetter.classList.remove('visible');
    } else {
      appreciationLetter.classList.add('visible');
      loveLetter.classList.remove('visible');
    }
    
    // DO NOT show refresh elements on first answer
    // They will show on next page load
    
    console.log('🔔 LORAINE ANSWERED:', answer === 'yes' ? 'YES 💝' : 'no 😢');
  }
  
  // ===== EVENT LISTENERS =====
  envelopeFront.addEventListener('click', function(e) {
    e.stopPropagation();
    // Only open if no answer saved yet
    if (!savedAnswer) {
      envelopeFront.classList.add('hidden');
      envelopeInside.classList.add('visible');
      
      yesPressCount = 0;
      noPressCount = 0;
      resetYes();
      resetNo();
    }
  });
  
  yesBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (savedAnswer) return; // Don't allow if already answered
    
    yesPressCount++;
    resetNo();
    updateYes();
  });
  
  noBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (savedAnswer) return; // Don't allow if already answered
    
    noPressCount++;
    resetYes();
    updateNo();
  });
  
  // Close refresh modal
  if (closeRefresh) {
    closeRefresh.addEventListener('click', function() {
      refreshModal.classList.remove('show');
    });
  }
  
  // Stamp effect
  const stamp = document.querySelector('.stamp-sweet');
  if (stamp) {
    stamp.addEventListener('click', function() {
      stamp.style.transform = 'scale(1.2) rotate(8deg)';
      stamp.style.transition = '0.2s';
      setTimeout(function() {
        stamp.style.transform = 'scale(1) rotate(0deg)';
      }, 200);
    });
  }
  
  function generateFloatingHearts() {
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
