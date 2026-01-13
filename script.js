let musicPlayed = false;

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');

    playMusic();
    createHearts();
}

function playMusic() {
    if (musicPlayed) return;

    const music = document.getElementById('bgMusic');
    music.volume = 0;
    music.play();

    // fade in musik
    let volume = 0;
    const fade = setInterval(() => {
        if (volume < 0.8) {
            volume += 0.02;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 100);

    musicPlayed = true;
}

function createHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-20px';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear`;
        document.getElementById('hearts').appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}

// animasi hati
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
