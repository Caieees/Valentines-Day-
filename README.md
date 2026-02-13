<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💖 for loraine · final version 💖</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- PIXELATED LOADING SCREEN -->
  <div class="loading-pixel" id="loadingScreen">
    <div class="pixel-bg"></div>
    <div class="pixel-envelope">
      <div class="pixel-paper">
        <div class="pixel-flap"></div>
        <div class="pixel-body"></div>
        <div class="pixel-stamp">❤️</div>
      </div>
    </div>
    <p class="pixel-text">LOADING...</p>
  </div>

  <!-- MAIN CONTENT -->
  <div class="pink-paradise" id="mainContent" style="opacity: 0; transition: opacity 1.2s ease;">
    <!-- Background elements -->
    <div class="cloud-bg"></div>
    <div class="petals"></div>
    
    <!-- REFRESH MODAL -->
    <div class="modal-sweet" id="refreshLetter">
      <div class="sweet-ring"></div>
      <div class="sweet-content">
        <button class="sweet-close" id="closeRefresh">✕</button>
        <div class="sweet-message" id="refreshMessage"></div>
      </div>
    </div>

    <!-- SURPRISE HEADER -->
    <div class="header-blush" id="surpriseHeader" style="display: none;">
      <div class="blush-waves"></div>
      <div class="floating-hearts-pink" id="floatingHearts"></div>
      <div class="blush-message" id="surpriseMessage">🌸 welcome back 🌸</div>
    </div>

    <!-- MAIN INTERACTION -->
    <div class="interaction-sweet">
      <!-- ENVELOPE with CARD inside -->
      <div class="envelope-sweet-container">
        <div class="envelope-3d-sweet" id="envelopeCard">
          <!-- Envelope front (visible by default) -->
          <div class="envelope-front-sweet" id="envelopeFront">
            <div class="flap-sweet"></div>
            <div class="stamp-sweet">❤️</div>
            <p class="hint-sweet">tap to open</p>
          </div>
          
          <!-- Inside of envelope - contains the QUESTION CARD -->
          <div class="envelope-inside-sweet" id="envelopeInside">
            <!-- Question card inside envelope -->
            <div class="question-card">
              <div class="card-heart">❤️</div>
              <h2 class="card-question">will you be my valentine?</h2>
              
              <div class="card-buttons">
                <button class="card-btn yes-card" id="yesBtn">YES <span>💝</span></button>
                <button class="card-btn no-card" id="noBtn">no <span>😢</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PERMANENT LETTER VAULT -->
      <div class="letter-pink-vault">
        <!-- LOVE LETTER - if she says YES -->
        <div class="letter-pink love-pink" id="loveLetter">
          <div class="pink-header">
            <div class="pink-orb">💘</div>
            <h2 class="pink-title" id="loveTitle">Hii Loraine,</h2>
          </div>
          <div class="pink-scroll" id="loveBody">
            <p>I'll cherish this day. Thank you for picking YES, I'm really glad. Siguro kung nakikita mo lang ako ngayon, kinikilig na ako sa saya. I'm really looking forward next time na 'di ka na busy.</p>
            
            <p>I know right now you got things to do and life's been busy for you, kaya naiintindihan ko. I hope you are always doing fine out there. Stay healthy and strong, alam kong kakayanin mo 'yan.</p>
            
            <p>Kapag pinanghihinaan ka ng loob at na-stress ikaw, tandaan mong nandito lang ako. Tutulungan kitang pasanin ang bigat na nararamdaman mo, at handang makinig sa'yo, at kung maari, papasayahin kita sa abot ng aking kaya.</p>
            
            <p>If you need something or help, I'm only one call away. I hope I don't put you under pressure.</p>
            
            <p>Yeah, that's all. Thank you for reading my letter until the end. Have a nice day everyday, Loraine!!</p>
            
            <p class="pink-signature">See you soon,<br>💖</p>
          </div>
          <div class="pink-footer">
            <span class="pink-signature-text">Chad Aiel</span>
          </div>
          <div class="pink-mini-hearts">❤️❤️❤️❤️❤️❤️</div>
        </div>

        <!-- APPRECIATION LETTER - if she says no -->
        <div class="letter-pink appreciate-pink" id="appreciationLetter">
          <div class="pink-header">
            <div class="pink-orb">🤍</div>
            <h2 class="pink-title" id="appreciationTitle">Hii Loraine,</h2>
          </div>
          <div class="pink-scroll" id="appreciationBody">
            <p>I understand, it's okay, no worries. I still did this, scared of what would happen, and I totally accept it. You made me happy, and because of you, I learned to love myself more and be better for myself, so thank you for being my friend and for getting to know you. I did this without regret.</p>
            
            <p>I hope you will succeed and achieve your dreams. I will be your number one fan and supporter, so if you need something or help, I'm only one call away. I hope I don't put you under pressure this time.</p>
            
            <p>Yep, that's all. Thank you for reading my letter until the end. Have a nice day everyday, Loraine!!</p>
            
            <p class="pink-signature">See you soon,<br>💫</p>
          </div>
          <div class="pink-footer">
            <span class="pink-signature-text">Chad Aiel</span>
          </div>
          <div class="pink-mini-hearts">🤍💫✨🕊️</div>
        </div>
      </div>
    </div>
  </div>

/* style.css - with personalized signatures */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #ffd1dc;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Quicksand', sans-serif;
  padding: 16px;
  position: relative;
}

/* ===== PIXELATED LOADING SCREEN ===== */
.loading-pixel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8c9d4;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  transition: opacity 1s ease;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

.loading-pixel.fade-out {
  opacity: 0;
  pointer-events: none;
}

.pixel-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(#ffd9e2 1px, transparent 1px),
    linear-gradient(90deg, #ffd9e2 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
}

.pixel-envelope {
  position: relative;
  width: 280px;
  height: 200px;
  animation: pixelFloat 2s infinite steps(8);
  image-rendering: pixelated;
}

.pixel-paper {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f5e6d3;
  border: 4px solid #b78c6a;
  box-shadow: 8px 8px 0 #8b5a2b, 12px 12px 0 rgba(0,0,0,0.1);
  image-rendering: pixelated;
}

.pixel-paper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, #d4b594 2px, transparent 2px),
    linear-gradient(-45deg, #d4b594 2px, transparent 2px);
  background-size: 16px 16px;
  opacity: 0.2;
  pointer-events: none;
}

.pixel-flap {
  position: absolute;
  top: -4px;
  left: -4px;
  width: calc(100% + 8px);
  height: 70px;
  background: #e8d5bc;
  border: 4px solid #b78c6a;
  clip-path: polygon(0% 0%, 50% 80%, 100% 0%);
  transform-origin: top;
  animation: pixelFlap 1.5s infinite steps(6);
  z-index: 5;
  image-rendering: pixelated;
}

.pixel-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 130px;
  background: #f5e6d3;
  border-top: 4px solid #b78c6a;
  image-rendering: pixelated;
}

.pixel-stamp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: #ff4d6d;
  text-shadow: 2px 2px 0 #8b0000, 4px 4px 0 rgba(0,0,0,0.2);
  animation: pixelHeart 1s infinite steps(4);
  z-index: 10;
  image-rendering: pixelated;
  filter: drop-shadow(0 0 10px #ff8a9f);
}

.pixel-text {
  position: absolute;
  bottom: 20%;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  color: #8b5a2b;
  background: #f5e6d3;
  padding: 15px 25px;
  border: 4px solid #b78c6a;
  box-shadow: 4px 4px 0 #6b4226;
  image-rendering: pixelated;
  letter-spacing: 2px;
  animation: pixelText 1s infinite steps(4);
}

/* ===== MAIN PANEL ===== */
.pink-paradise {
  width: 100%;
  max-width: 800px;
  background: rgba(255, 230, 240, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 60px;
  padding: 35px 25px 45px;
  box-shadow: 0 30px 50px rgba(255, 150, 180, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.6);
  border: 3px solid rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
}

.cloud-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" opacity="0.2"><circle cx="30" cy="30" r="20" fill="white"/><circle cx="70" cy="40" r="25" fill="white"/><circle cx="120" cy="25" r="30" fill="white"/><circle cx="180" cy="35" r="22" fill="white"/></svg>');
  background-size: 300px 150px;
  animation: cloudsMove 40s infinite linear;
  pointer-events: none;
}

.petals {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.15"><path d="M20,20 Q25,10 30,20 T40,20" stroke="%23ff8a9f" fill="%23ffb6c1" transform="rotate(15)"/><path d="M70,60 Q75,50 80,60 T90,60" stroke="%23ff8a9f" fill="%23ffb6c1" transform="rotate(-10)"/></svg>');
  background-size: 150px 150px;
  animation: petalsFall 20s infinite linear;
  pointer-events: none;
}

/* ===== REFRESH MODAL ===== */
.modal-sweet {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 520px;
  z-index: 300;
  display: none;
  filter: drop-shadow(0 15px 30px rgba(255, 120, 150, 0.4));
}

.modal-sweet.show {
  display: block;
  animation: sweetPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.sweet-ring {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 3px solid #ffb7c7;
  border-radius: 50px;
  animation: ringSweet 3s infinite linear;
}

.sweet-content {
  background: #fff0f5;
  border: 4px solid white;
  border-radius: 40px;
  padding: 30px 35px;
  box-shadow: 0 20px 40px rgba(255, 150, 180, 0.3);
  position: relative;
}

.sweet-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: #ffe2e7;
  border: 2px solid #ffb7c7;
  font-size: 1.8rem;
  color: #ff6b8b;
  cursor: pointer;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.sweet-close:hover {
  background: #ffb7c7;
  color: white;
  transform: scale(1.1);
}

.sweet-message {
  font-size: 1.2rem;
  color: #ac4f6e;
  line-height: 1.7;
}

.sweet-message p {
  margin-bottom: 12px;
}

/* ===== SURPRISE HEADER ===== */
.header-blush {
  width: 100%;
  background: rgba(255, 220, 230, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 120px;
  padding: 25px;
  margin-bottom: 35px;
  border: 3px solid white;
  box-shadow: 0 15px 30px rgba(255, 150, 180, 0.2);
  position: relative;
  overflow: hidden;
}

.blush-waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 200, 220, 0.4) 50%, transparent 70%);
  animation: blushFlow 6s infinite alternate;
}

.floating-hearts-pink {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 2.5rem;
  margin-bottom: 15px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.floating-hearts-pink span {
  display: inline-block;
  animation: floatPink 2.4s infinite alternate;
  filter: drop-shadow(0 5px 10px #ffb6c1);
  color: #ff8a9f;
}

.blush-message {
  font-size: 1.6rem;
  color: #ac4f6e;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  padding: 12px 30px;
  border-radius: 80px;
  text-align: center;
  border: 2px solid white;
}

/* ===== ENVELOPE WITH CARD INSIDE ===== */
.interaction-sweet {
  width: 100%;
}

.envelope-sweet-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  perspective: 1000px;
}

.envelope-3d-sweet {
  width: 100%;
  max-width: 500px;
  height: 400px;
  position: relative;
  transition: transform 0.3s;
}

.envelope-3d-sweet:hover {
  transform: translateY(-5px);
}

/* Envelope front */
.envelope-front-sweet {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffe2e7;
  border: 4px solid white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  opacity: 1;
  pointer-events: auto;
  box-shadow: 0 20px 30px rgba(255, 150, 180, 0.3);
  transition: opacity 0.5s ease;
}

.envelope-front-sweet.hidden {
  opacity: 0;
  pointer-events: none;
}

.flap-sweet {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: #ffc1d0;
  clip-path: polygon(0% 0%, 50% 85%, 100% 0%);
  border-bottom: 3px solid white;
}

.stamp-sweet {
  font-size: 4.2rem;
  background: white;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dotted #ff8a9f;
  margin-bottom: 20px;
  box-shadow: 0 0 30px #ffb6c1;
  color: #ff6b8b;
}

.hint-sweet {
  font-size: 1.4rem;
  background: #ffb7c7;
  padding: 12px 30px;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  border: 2px solid white;
  box-shadow: 0 5px 0 #ac4f6e;
}

/* Envelope inside */
.envelope-inside-sweet {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff5f9;
  border: 4px solid white;
  border-radius: 30px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
  box-shadow: 0 20px 30px rgba(255, 150, 180, 0.3);
  padding: 25px;
}

.envelope-inside-sweet.visible {
  opacity: 1;
  pointer-events: auto;
  z-index: 15;
}

/* Question card */
.question-card {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 40px;
  padding: 35px 25px;
  box-shadow: 0 15px 30px rgba(255, 100, 150, 0.2), inset 0 0 20px #ffe2e7;
  border: 3px solid #ffb7c7;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: cardPop 0.4s ease;
}

.card-heart {
  font-size: 4rem;
  animation: heartPink 2s infinite;
  margin-bottom: 20px;
  color: #ff6b8b;
  filter: drop-shadow(0 0 20px #ff8a9f);
}

.card-question {
  font-size: 2.2rem;
  color: #ac4f6e;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.4;
  padding: 0 10px;
}

.card-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.card-btn {
  border: none;
  color: white;
  font-size: 1.6rem;
  padding: 14px 30px;
  border-radius: 60px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: 0 7px 0 #ac4f6e, 0 8px 15px rgba(255, 120, 150, 0.3);
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid white;
  transform: translateY(0);
}

.card-btn:active {
  transform: translateY(5px);
  box-shadow: 0 2px 0 #ac4f6e, 0 5px 10px rgba(255, 120, 150, 0.3);
}

.yes-card {
  background: linear-gradient(145deg, #ff8a9f, #ff6b8b);
}

.no-card {
  background: linear-gradient(145deg, #c4a5b0, #b38e9c);
  box-shadow: 0 7px 0 #8e6b78, 0 8px 15px rgba(180, 130, 150, 0.3);
}

.card-btn.pressed {
  transform: translateY(5px);
  box-shadow: 0 2px 0 #ac4f6e, 0 5px 10px rgba(255, 120, 150, 0.3);
  padding-left: 18px;
  padding-right: 18px;
  min-width: 120px;
  filter: brightness(0.95);
}

/* ===== PERMANENT LETTER VAULT ===== */
.letter-pink-vault {
  width: 100%;
  background: rgba(255, 240, 245, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 50px;
  padding: 35px;
  border: 3px solid white;
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.8), 0 20px 30px rgba(255, 150, 180, 0.2);
}

.letter-pink {
  display: none;
  flex-direction: column;
  width: 100%;
  animation: pinkReveal 0.5s ease;
}

.letter-pink.visible {
  display: flex;
}

.pink-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.pink-orb {
  font-size: 3rem;
  animation: orbSweet 3s infinite;
  filter: drop-shadow(0 0 20px #ffb6c1);
  color: #ff8a9f;
}

.pink-title {
  font-size: 2.2rem;
  color: #ac4f6e;
  font-family: 'Dancing Script', cursive;
  text-shadow: 0 2px 10px #ffd5da;
}

.pink-scroll {
  background: #fff9fb;
  border-radius: 40px;
  padding: 35px;
  box-shadow: inset 0 0 30px #ffe2e7, 0 10px 20px rgba(255, 150, 180, 0.1);
  border: 2px solid white;
  font-size: 1.1rem;
  color: #ac4f6e;
  line-height: 1.8;
  max-height: 500px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.pink-scroll p {
  margin-bottom: 18px;
  font-family: 'Quicksand', sans-serif;
}

.pink-scroll p:last-child {
  margin-bottom: 0;
}

.pink-signature {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #ff6b8b;
  margin-top: 25px;
  font-family: 'Dancing Script', cursive;
  line-height: 1.4;
}

.pink-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
}

.pink-signature-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ac4f6e;
  font-family: 'Dancing Script', cursive;
}

.pink-mini-hearts {
  font-size: 2.2rem;
  letter-spacing: 10px;
  text-align: center;
  margin-top: 15px;
  opacity: 0.7;
  color: #ff8a9f;
}

/* ===== ANIMATIONS ===== */
@keyframes pixelFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes pixelFlap {
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(25deg); }
}

@keyframes pixelHeart {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

@keyframes pixelText {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes cloudsMove {
  0% { background-position: 0 0; }
  100% { background-position: 300px 150px; }
}

@keyframes petalsFall {
  0% { background-position: 0 -100px; }
  100% { background-position: 200px 200px; }
}

@keyframes sweetPop {
  0% { opacity: 0; transform: translateX(-50%) scale(0.8); }
  100% { opacity: 1; transform: translateX(-50%) scale(1); }
}

@keyframes ringSweet {
  0% { transform: rotate(0deg); border-color: #ffb7c7; }
  50% { transform: rotate(180deg); border-color: #ff8a9f; }
  100% { transform: rotate(360deg); border-color: #ffb7c7; }
}

@keyframes blushFlow {
  0% { transform: translateX(-10%); }
  100% { transform: translateX(10%); }
}

@keyframes floatPink {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-12px) rotate(5deg); }
}

@keyframes heartPink {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px #ff8a9f); }
  50% { transform: scale(1.15); filter: drop-shadow(0 0 35px #ff6b8b); }
}

@keyframes orbSweet {
  0%, 100% { filter: drop-shadow(0 0 15px #ffb6c1); transform: scale(1); }
  50% { filter: drop-shadow(0 0 30px #ff8a9f); transform: scale(1.1); }
}

@keyframes pinkReveal {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes cardPop {
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

/* scrollbar */
.pink-scroll::-webkit-scrollbar {
  width: 8px;
}
.pink-scroll::-webkit-scrollbar-track {
  background: #ffe2e7;
  border-radius: 10px;
}
.pink-scroll::-webkit-scrollbar-thumb {
  background: #ffb7c7;
  border-radius: 10px;
}

/* responsive */
@media (max-width: 550px) {
  .pink-paradise { padding: 25px 15px; }
  .envelope-3d-sweet { height: 450px; }
  .pixel-envelope { width: 220px; height: 160px; }
  .pixel-stamp { font-size: 3rem; }
  .pixel-text { font-size: 0.7rem; padding: 10px 15px; }
  .card-btn { font-size: 1.4rem; padding: 12px 22px; min-width: 120px; }
  .card-question { font-size: 1.9rem; margin-bottom: 25px; }
  .card-heart { font-size: 3.5rem; }
  .pink-title { font-size: 1.9rem; }
  .pink-scroll { padding: 25px; font-size: 1rem; }
  .sweet-message { font-size: 1rem; }
  .pink-signature-text { font-size: 1.5rem; }
}

// script.js - with all personalized elements
document.addEventListener('DOMContentLoaded', () => {
  // ===== TRACKING SYSTEM =====
  const VISIT_COUNT_KEY = 'valentine_visit_count';
  const ANSWER_KEY = 'valentine_answer';
  const NOTIFICATION_SENT_KEY = 'valentine_notification_sent';
  
  // Generate a unique visitor ID if not exists
  let visitorId = localStorage.getItem('visitor_id');
  if (!visitorId) {
    visitorId = 'visitor_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('visitor_id', visitorId);
  }
  
  // Track visit count
  let visitCount = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0');
  visitCount++;
  localStorage.setItem(VISIT_COUNT_KEY, visitCount.toString());
  
  // Get stored answer if any
  const storedAnswer = localStorage.getItem(ANSWER_KEY);
  
  // ===== SEND NOTIFICATION TO YOU =====
  function sendNotification(type, data) {
    const notification = {
      timestamp: new Date().toISOString(),
      visitorId: visitorId,
      type: type,
      data: data,
      visitCount: visitCount,
      userAgent: navigator.userAgent
    };
    
    console.log('🔔 VALENTINE NOTIFICATION:', notification);
    
    // Show tracker indicator
    const trackerIndicator = document.createElement('div');
    trackerIndicator.style.position = 'fixed';
    trackerIndicator.style.bottom = '10px';
    trackerIndicator.style.right = '10px';
    trackerIndicator.style.background = 'rgba(0,0,0,0.5)';
    trackerIndicator.style.color = 'white';
    trackerIndicator.style.padding = '5px 10px';
    trackerIndicator.style.borderRadius = '20px';
    trackerIndicator.style.fontSize = '0.8rem';
    trackerIndicator.style.zIndex = '9999';
    trackerIndicator.style.backdropFilter = 'blur(5px)';
    trackerIndicator.innerHTML = `🔍 ${visitCount} visit${visitCount !== 1 ? 's' : ''}`;
    document.body.appendChild(trackerIndicator);
  }
  
  // Send initial visit notification
  const notificationSent = sessionStorage.getItem(NOTIFICATION_SENT_KEY);
  if (!notificationSent) {
    sendNotification('visit', { 
      action: 'page_load',
      storedAnswer: storedAnswer || 'none'
    });
    sessionStorage.setItem(NOTIFICATION_SENT_KEY, 'true');
  }
  
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
  
  const surpriseHeader = document.getElementById('surpriseHeader');
  const floatingHearts = document.getElementById('floatingHearts');
  const surpriseMessage = document.getElementById('surpriseMessage');
  
  const refreshModal = document.getElementById('refreshLetter');
  const refreshMessage = document.getElementById('refreshMessage');
  const closeRefresh = document.getElementById('closeRefresh');

  const loveBody = document.getElementById('loveBody');
  const loveSignature = document.getElementById('loveSignature');
  const appreciationBody = document.getElementById('appreciationBody');
  const appreciationSignature = document.getElementById('appreciationSignature');

  // ---------- STATE MANAGEMENT (using localStorage for permanence) ----------
  const CLICKED_KEY = 'valentine_clicked';
  const REFRESH_COUNT_KEY = 'valentine_refresh_count';
  const ENVELOPE_OPENED_KEY = 'valentine_envelope_opened';

  // Track press counts for each button (max 3)
  let yesPressCount = 0;
  let noPressCount = 0;
  const MAX_PRESS = 3;

  // Button text sequences
  const yesTexts = ["YES 💝", "really? 💭", "you sure? "];
  const noTexts = ["no 😢", "really? 💭", "you sure? "];

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

  // Show refresh modal
  function showRefreshModal(refreshCount) {
    const messageIndex = refreshCount % refreshLetters.length;
    refreshMessage.innerHTML = refreshLetters[messageIndex];
    refreshModal.classList.add('show');
  }

  closeRefresh.addEventListener('click', () => {
    refreshModal.classList.remove('show');
  });

  // Show the final letter and send notification
  function showFinalLetter(type) {
    envelopeInside.classList.remove('visible');
    envelopeFront.classList.add('hidden');
    
    // Store the answer permanently
    localStorage.setItem(ANSWER_KEY, type);
    
    // Send notification about the answer
    sendNotification('answer', { 
      answer: type === 'yes' ? 'YES 💝' : 'no 😢',
      pressCount: type === 'yes' ? yesPressCount : noPressCount
    });
    
    if (type === 'yes') {
      loveLetter.classList.add('visible');
      appreciationLetter.classList.remove('visible');
      setClicked('yes');
    } else {
      appreciationLetter.classList.add('visible');
      loveLetter.classList.remove('visible');
      setClicked('no');
    }
    
    generatePinkHearts();
  }

  // ---------- CLICK HANDLERS ----------
  envelopeFront.addEventListener('click', (e) => {
    e.stopPropagation();
    // Only if no choice has been made yet
    if (!getClicked()) {
      envelopeFront.classList.add('hidden');
      envelopeInside.classList.add('visible');
      setEnvelopeOpened();
      
      // Send notification that envelope was opened
      sendNotification('envelope_opened', {});
      
      // Reset button states
      yesPressCount = 0;
      noPressCount = 0;
      resetYesButton();
      resetNoButton();
    }
  });

  yesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    yesPressCount++;
    resetNoButton();
    updateYesButton();
    
    // Track button presses
    if (yesPressCount < MAX_PRESS) {
      sendNotification('button_press', { 
        button: 'yes', 
        pressCount: yesPressCount,
        text: yesBtn.textContent
      });
    }
  });

  noBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    noPressCount++;
    resetYesButton();
    updateNoButton();
    
    // Track button presses
    if (noPressCount < MAX_PRESS) {
      sendNotification('button_press', { 
        button: 'no', 
        pressCount: noPressCount,
        text: noBtn.textContent
      });
    }
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

  // ---------- STATE MANAGEMENT ----------
  function setClicked(value) {
    localStorage.setItem(CLICKED_KEY, value);
    localStorage.setItem(REFRESH_COUNT_KEY, '0');
  }

  function getClicked() {
    return localStorage.getItem(CLICKED_KEY);
  }

  function getRefreshCount() {
    const count = localStorage.getItem(REFRESH_COUNT_KEY);
    return count ? parseInt(count, 10) : 0;
  }

  function incrementRefreshCount() {
    const current = getRefreshCount();
    const newCount = current + 1;
    localStorage.setItem(REFRESH_COUNT_KEY, newCount.toString());
    return newCount;
  }

  function setEnvelopeOpened() {
    localStorage.setItem(ENVELOPE_OPENED_KEY, 'true');
  }

  function wasEnvelopeOpened() {
    return localStorage.getItem(ENVELOPE_OPENED_KEY) === 'true';
  }

  // ---------- INITIALISE ----------
  function applyPersistedState() {
    const clicked = getClicked();
    const envelopeOpened = wasEnvelopeOpened();
    
    if (clicked) {
      const refreshCount = incrementRefreshCount();
      
      sendNotification('refresh', { refreshCount });
      
      envelopeFront.classList.add('hidden');
      envelopeInside.classList.remove('visible');
      
      if (clicked === 'yes') {
        loveLetter.classList.add('visible');
        appreciationLetter.classList.remove('visible');
      } else {
        appreciationLetter.classList.add('visible');
        loveLetter.classList.remove('visible');
      }
      
      showRefreshModal(refreshCount);
      
      const surpriseIndex = refreshCount % surpriseMessages.length;
      surpriseMessage.innerText = surpriseMessages[surpriseIndex];
      
      surpriseHeader.style.display = 'block';
      generatePinkHearts();
      
    } else if (envelopeOpened) {
      envelopeFront.classList.add('hidden');
      envelopeInside.classList.add('visible');
      loveLetter.classList.remove('visible');
      appreciationLetter.classList.remove('visible');
      surpriseHeader.style.display = 'none';
      
      yesPressCount = 0;
      noPressCount = 0;
      resetYesButton();
      resetNoButton();
      
    } else {
      envelopeFront.classList.remove('hidden');
      envelopeInside.classList.remove('visible');
      loveLetter.classList.remove('visible');
      appreciationLetter.classList.remove('visible');
      surpriseHeader.style.display = 'none';
    }
  }

  setTimeout(applyPersistedState, 2100);
});
  <script src="script.js"></script>
</body>
</html>
