document.getElementById('imageUpload')?.remove();

function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.toggle('open');
}

function saveMessage() {
  const message = document.getElementById('loveMessage')?.value;
  if (!message || message.trim() === '') return;
  localStorage.setItem('loveMessage', message);
  showSavedMessage();
}

function showSavedMessage() {
  const message = localStorage.getItem('loveMessage');
  if (message) {
    document.getElementById('savedMessage').innerText = `❤️ ${message}`;
  }
}

function showFlowers() {
  const section = document.getElementById('flowerReveal');
  section.classList.toggle('hidden');

  if (!section.classList.contains('hidden')) {
    startPetalRain();
  }
}

function startPetalRain() {
  const container = document.getElementById('petalContainer');

  // Limpa antes
  container.innerHTML = '';

  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (3 + Math.random() * 2) + 's';
    petal.style.animationDelay = (Math.random() * 2) + 's';
    container.appendChild(petal);
  }
}

function toggleVolume() {
  const audio = document.querySelector('audio');
  const btn = document.getElementById('volumeToggle');

  if (audio.volume > 0) {
    audio.volume = 0;
    btn.textContent = '🔇';
  } else {
    audio.volume = 1;
    btn.textContent = '🔊';
  }
}

window.onload = showSavedMessage;