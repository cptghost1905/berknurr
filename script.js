// Kalp animasyonu için kod
const heartsContainer = document.querySelector('.hearts-background');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Rastgele sol pozisyonu
  heart.style.left = Math.random() * 100 + 'vw';

  // Rastgele animasyon süreleri
  const fallDuration = 6 + Math.random() * 6;
  heart.style.animationDuration = `${fallDuration}s, ${4 + Math.random() * 4}s, ${fallDuration}s`;

  // Rastgele animasyon gecikmesi
  heart.style.animationDelay = `-${Math.random() * fallDuration}s, 0s, 0s`;

  heartsContainer.appendChild(heart);

  // Animasyon sonunda kalbi sil
  setTimeout(() => {
    heart.remove();
  }, fallDuration * 1000);
}

// Kalpleri sürekli oluştur
let heartsInterval;

function startHearts() {
  heartsInterval = setInterval(createHeart, 50);
}

function stopHearts() {
  clearInterval(heartsInterval);
}

// Şifre kontrolü
function checkPassword() {
  const password = document.getElementById("password-input").value;
  if (password === "171223") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.querySelectorAll(".content").forEach(c => c.style.display = "none");
    document.getElementById("home").style.display = "block";

    startHearts(); // Şifre doğruysa kalpler başlasın
  } else {
    alert("Şifre yanlış. 😢");
  }
}