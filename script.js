// =========================
// GET ELEMENTS
// =========================

const firstPage = document.getElementById("firstPage");
const yesPage = document.getElementById("yesPage");
const letterPage = document.getElementById("letterPage");
const noBtn = document.getElementById("noBtn");


// =========================
// YES BUTTON
// =========================

function sayYes() {

    firstPage.classList.add("hidden");
    yesPage.classList.remove("hidden");

    createHearts();
    createSparkles();

    // Play YouTube song
    document.getElementById("youtubeMusic").contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
    );
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
// SHOW GIFTS PAGE
// =========================

function showGifts() {

    letterPage.classList.add("hidden");

    document.getElementById("giftPage").classList.remove("hidden");

    createHearts();
}


// =========================
// OPEN GIFTS
// =========================

function openGift(number) {

    const giftMessage = document.getElementById("giftMessage");

    if (number === 1) {
        giftMessage.innerHTML =
            "💌 ඔයා මගේ ජීවිතයේ ලස්සනම කෙනා 💗";
    }

    if (number === 2) {
        giftMessage.innerHTML =
            "🧸 ඔයා එක්ක ඉන්න හැම මොහොතක්ම special 💕";
    }

    if (number === 3) {
        giftMessage.innerHTML =
            "💖 මම ඔයාට හැමදාමත් ආදරෙයි 💗";
    }

    createHearts();
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
// SHOW OPEN WHEN PAGE
// =========================

function showOpenWhen() {

    document.getElementById("giftPage").classList.add("hidden");

    document.getElementById("openWhenPage").classList.remove("hidden");

    createHearts();
}


// =========================
// OPEN WHEN LETTER
// =========================

function openWhenLetter(number) {

    const message =
        document.getElementById("openWhenMessage");

    if (number === 1) {

        message.innerHTML =
            "🥺 ඔයාට මාව මතක් වුණා නම්, මතක තියාගන්න... මමත් හැම වෙලාවෙම ඔයාව මතක් කරනවා 💗";
    }

    if (number === 2) {

        message.innerHTML =
            "😢 ඔයාට දුක හිතුණාම, තනියම දුක් වෙන්න එපා. මම ඔයා ළඟින් ඉන්නවා 💕";
    }

    if (number === 3) {

        message.innerHTML =
            "😡 මං එක්ක තරහා ගියා නම්... මට සමාවෙන්න 🥺 මම ඔයාව නැති කරගන්න කැමති නෑ 💗";
    }

    if (number === 4) {

        message.innerHTML =
            "💗 ඔයාට මට ආදරේ හිතුණා නම්... මම ඔයාට ඊටත් වඩා ආදරෙයි 😍";
    }

    createHearts();
    createSparkles();
}
function createSparkles() {
    // ...
}


// මෙතනින් පස්සේ අලුත් code එක දාන්න 👇

function showOpenWhen() {
    // ...
}

function openWhenLetter(number) {
    // ...
}
