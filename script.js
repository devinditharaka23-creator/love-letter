// =========================
// GET ELEMENTS
// =========================

const firstPage = document.getElementById("firstPage");
const yesPage = document.getElementById("yesPage");
const letterPage = document.getElementById("letterPage");

const noBtn = document.getElementById("noBtn");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;


// =========================
// YES BUTTON
// =========================

function sayYes() {

    firstPage.classList.add("hidden");

    yesPage.classList.remove("hidden");

    createHearts();

    createSparkles();
}


// =========================
// NO BUTTON
// =========================

function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


// =========================
// SHOW LOVE LETTER
// =========================

function showLetter() {

    yesPage.classList.add("hidden");

    letterPage.classList.remove("hidden");

    createHearts();

    createSparkles();
}


// =========================
// BACK TO FIRST PAGE
// =========================

function goBackToFirst() {

    yesPage.classList.add("hidden");

    firstPage.classList.remove("hidden");

    noBtn.style.position = "relative";
    noBtn.style.left = "auto";
    noBtn.style.top = "auto";
}


// =========================
// BACK TO YES PAGE
// =========================

function goBackToYes() {

    letterPage.classList.add("hidden");

    yesPage.classList.remove("hidden");
}


// =========================
// FLOATING HEARTS
// =========================

function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(function () {

            const heart = document.createElement("div");

            heart.className = "heart";

            const hearts = [
                "💗",
                "💕",
                "💖",
                "💘",
                "💝",
                "💞"
            ];

            heart.innerHTML =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.animationDuration =
                Math.random() * 3 + 3 + "s";

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 6000);

        }, i * 100);

    }
}


// =========================
// SPARKLES
// =========================

function createSparkles() {

    for (let i = 0; i < 20; i++) {

        setTimeout(function () {

            const sparkle = document.createElement("div");

            sparkle.className = "sparkle";

            sparkle.innerHTML = "✨";

            sparkle.style.left =
                Math.random() * 100 + "vw";

            sparkle.style.top =
                Math.random() * 100 + "vh";

            document.body.appendChild(sparkle);

            setTimeout(function () {
                sparkle.remove();
            }, 2000);

        }, i * 100);

    }
}


// =========================
// MUSIC
// =========================

function toggleMusic() {

    if (musicPlaying === false) {

        music.play();

        musicPlaying = true;

        musicButton.innerHTML = "🔊";

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🔇";

    }

}
