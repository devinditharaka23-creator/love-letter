// ===============================
// GET PAGES
// ===============================

const firstPage = document.getElementById("firstPage");
const yesPage = document.getElementById("yesPage");
const letterPage = document.getElementById("letterPage");
const giftPage = document.getElementById("giftPage");
const openWhenPage = document.getElementById("openWhenPage");
const page6 = document.getElementById("page6");
const page7 = document.getElementById("page7");

const noBtn = document.getElementById("noBtn");


// ===============================
// SHOW ONLY ONE PAGE
// ===============================

function showPage(page) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function (p) {
        p.classList.add("hidden");
    });

    page.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// ===============================
// PAGE 1 → PAGE 2
// ===============================

function sayYes() {

    showPage(yesPage);

}


// ===============================
// NO BUTTON
// ===============================

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


// ===============================
// PAGE 2 → PAGE 3
// ===============================

function showLetter() {

    showPage(letterPage);

}


// ===============================
// PAGE 2 → PAGE 1
// ===============================

function goBackToFirst() {

    showPage(firstPage);

    noBtn.style.position = "relative";
    noBtn.style.left = "auto";
    noBtn.style.top = "auto";
}


// ===============================
// PAGE 3 → PAGE 2
// ===============================

function goBackToYes() {

    showPage(yesPage);

}


// ===============================
// PAGE 3 → PAGE 4
// ===============================

function showGifts() {

    showPage(giftPage);

}


// ===============================
// GIFTS
// ===============================

function openGift(number) {

    const message =
        document.getElementById("giftMessage");

    if (number === 1) {

        message.innerHTML =
            "💌 ඔයා මගේ ජීවිතයේ ලස්සනම කෙනා 💗";

    }

    else if (number === 2) {

        message.innerHTML =
            "🧸 ඔයා එක්ක ඉන්න හැම මොහොතක්ම special 💕";

    }

    else if (number === 3) {

        message.innerHTML =
            "💖 මම ඔයාට හැමදාමත් ආදරෙයි 💗";

    }

    createHearts();
}


// ===============================
// PAGE 4 → PAGE 5
// ===============================

function showOpenWhen() {

    showPage(openWhenPage);

}


// ===============================
// OPEN WHEN LETTERS
// ===============================

function openWhenLetter(number) {

    const message =
        document.getElementById("openWhenMessage");

    if (number === 1) {

        message.innerHTML =
            "🥺 ඔයාට මාව මතක් වුණා නම්, මතක තියාගන්න... මමත් හැම වෙලාවෙම ඔයාව මතක් කරනවා 💗";

    }

    else if (number === 2) {

        message.innerHTML =
            "😢 ඔයාට දුක හිතුණාම, තනියම දුක් වෙන්න එපා. මම ඔයා ළඟින් ඉන්නවා 💕";

    }

    else if (number === 3) {

        message.innerHTML =
            "😡 මං එක්ක තරහා ගියා නම්... මට සමාවෙන්න 🥺 මම ඔයාව නැති කරගන්න කැමති නෑ 💗";

    }

    else if (number === 4) {

        message.innerHTML =
            "💗 ඔයාට මට ආදරේ හිතුණා නම්... මම ඔයාට ඊටත් වඩා ආදරෙයි 😍";

    }

    createHearts();
    createSparkles();
}


// ===============================
// PAGE 5 → PAGE 6
// ===============================

function showPage6() {

    showPage(page6);

}


// ===============================
// PAGE 6 → PAGE 7
// ===============================

function showPage7() {

    showPage(page7);

}


// ===============================
// FLOATING HEARTS
// ===============================

function createHearts() {

    for (let i = 0; i < 15; i++) {

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
                        Math.random() *
                        hearts.length
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


// ===============================
// SPARKLES
// ===============================

function createSparkles() {

    for (let i = 0; i < 10; i++) {

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
}
