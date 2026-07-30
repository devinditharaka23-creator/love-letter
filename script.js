// =========================
// GET ELEMENTS
// =========================

const firstPage = document.getElementById("firstPage");
const yesPage = document.getElementById("yesPage");
const letterPage = document.getElementById("letterPage");
const giftPage = document.getElementById("giftPage");
const openWhenPage = document.getElementById("openWhenPage");

const noBtn = document.getElementById("noBtn");


// =========================
// YES BUTTON + MUSIC
// =========================

function sayYes() {

    firstPage.classList.add("hidden");
    yesPage.classList.remove("hidden");

    createHearts();
    createSparkles();

    // YouTube song play
    const youtubeMusic =
        document.getElementById("youtubeMusic");

    youtubeMusic.contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func: "playVideo",
            args: []
        }),
        "*"
    );
}


// =========================
// NO BUTTON
// =========================

function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX =
        window.innerWidth - buttonWidth - 20;

    const maxY =
        window.innerHeight - buttonHeight - 20;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


// =========================
// PAGE 2 → PAGE 3
// =========================

function showLetter() {

    yesPage.classList.add("hidden");
    letterPage.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =========================
// PAGE 2 → PAGE 1
// =========================

function goBackToFirst() {

    yesPage.classList.add("hidden");
    firstPage.classList.remove("hidden");

    noBtn.style.position = "relative";
    noBtn.style.left = "auto";
    noBtn.style.top = "auto";
}


// =========================
// PAGE 3 → PAGE 2
// =========================

function goBackToYes() {

    letterPage.classList.add("hidden");
    yesPage.classList.remove("hidden");
}


// =========================
// PAGE 3 → PAGE 4
// =========================

function showGifts() {

    letterPage.classList.add("hidden");
    giftPage.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =========================
// OPEN GIFTS
// =========================

function openGift(number) {

    const giftMessage =
        document.getElementById("giftMessage");

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
// PAGE 4 → PAGE 5
// =========================

function showOpenWhen() {

    giftPage.classList.add("hidden");
    openWhenPage.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =========================
// OPEN WHEN LETTERS
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


// =========================
// FLOATING HEARTS
// =========================

function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");

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

            const sparkle =
                document.createElement("div");

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
    function showPage6() {

    document.getElementById("openWhenPage").classList.add("hidden");

    document.getElementById("page6").classList.remove("hidden");

    createHearts();
    createSparkles();
}
}
