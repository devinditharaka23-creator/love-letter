```javascript
// ==========================================
// PAGE ELEMENTS
// ==========================================

const pages = [
    "firstPage",
    "yesPage",
    "letterPage",
    "giftPage",
    "openWhenPage",
    "page6",
    "page7"
];


// ==========================================
// SHOW PAGE
// ==========================================

function showPage(pageNumber) {

    pages.forEach(function (id) {

        const page = document.getElementById(id);

        if (page) {
            page.classList.add("hidden");
        }

    });

    const selectedPage =
        document.getElementById(
            pages[pageNumber - 1]
        );

    if (selectedPage) {

        selectedPage.classList.remove("hidden");

        createHearts();
        createSparkles();
    }
}


// ==========================================
// PAGE 1 → PAGE 2
// ==========================================

function sayYes() {

    showPage(2);

    playMusic();
}


// ==========================================
// MUSIC
// ==========================================

function playMusic() {

    const music =
        document.getElementById("youtubeMusic");

    if (!music) return;

    music.contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func: "playVideo",
            args: []
        }),
        "*"
    );
}


// ==========================================
// NO BUTTON
// ==========================================

function moveNoButton() {

    const button =
        document.getElementById("noBtn");

    if (!button) return;

    const maxX =
        window.innerWidth -
        button.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        button.offsetHeight -
        20;

    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
}


// ==========================================
// PAGE 2 → PAGE 3
// ==========================================

function showLetter() {

    showPage(3);
}


// ==========================================
// PAGE 3 → PAGE 4
// ==========================================

function showGifts() {

    showPage(4);
}


// ==========================================
// GIFT MESSAGES
// ==========================================

function openGift(number) {

    const message =
        document.getElementById("giftMessage");

    if (!message) return;


    if (number === 1) {

        message.innerHTML =
            "💌 ඔයා මගේ ජීවිතයේ ලස්සනම කෙනා 💗";

    }


    if (number === 2) {

        message.innerHTML =
            "🧸 ඔයා එක්ක ඉන්න හැම මොහොතක්ම special 💕";

    }


    if (number === 3) {

        message.innerHTML =
            "💖 මම ඔයාට හැමදාමත් ආදරෙයි 💗";

    }

    createHearts();
}


// ==========================================
// PAGE 4 → PAGE 5
// ==========================================

function showOpenWhen() {

    showPage(5);
}


// ==========================================
// OPEN WHEN LETTERS
// ==========================================

function openWhenLetter(number) {

    const message =
        document.getElementById("openWhenMessage");

    if (!message) return;


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


// ==========================================
// PAGE 5 → PAGE 6
// ==========================================

function showPage6() {

    showPage(6);
}


// ==========================================
// PAGE 6 → PAGE 7
// ==========================================

function showPage7() {

    showPage(7);
}


// ==========================================
// PAGE 7 → PAGE 8
// ==========================================

function showPage8() {

    alert("Page 8 එක අපි ඊළඟට හදමු 💗");

}


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");

            heart.className = "heart";

            const heartList = [
                "💗",
                "💕",
                "💖",
                "💘",
                "💝",
                "💞"
            ];

            heart.innerHTML =
                heartList[
                    Math.floor(
                        Math.random() *
                        heartList.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            document.body.appendChild(heart);


            setTimeout(function () {

                heart.remove();

            }, 6000);

        }, i * 100);
    }
}


// ==========================================
// SPARKLES
// ==========================================

function createSparkles() {

    for (let i = 0; i < 15; i++) {

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
```
