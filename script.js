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
  document.querySelector("#volumeToggle").addEventListener("click", () => {
  const audio = document.querySelector('audio');
  const ico = document.querySelector("#volumeToggle");
  if (audio.paused) {
    audio.play();
    ico.textContent = '🔇'; 
  } else {
    audio.pause();
    ico.textContent = '🔊'; 
  }
});
  }
}

window.onload = showSavedMessage;
