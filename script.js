// =====================================================
// GET ELEMENTS
// =====================================================

const firstPage = document.getElementById("firstPage");
const yesPage = document.getElementById("yesPage");
const letterPage = document.getElementById("letterPage");
const giftPage = document.getElementById("giftPage");
const openWhenPage = document.getElementById("openWhenPage");
const page6 = document.getElementById("page6");
const page7 = document.getElementById("page7");

const noBtn = document.getElementById("noBtn");


// =====================================================
// PAGE 1 → PAGE 2
// =====================================================

function sayYes() {

    firstPage.classList.add("hidden");
    yesPage.classList.remove("hidden");

    createHearts();
    createSparkles();

    // Music
    playMusic();
}


// =====================================================
// PLAY MUSIC
// =====================================================

function playMusic() {

    const youtubeMusic =
        document.getElementById("youtubeMusic");

    if (!youtubeMusic) {
        console.log("YouTube iframe not found");
        return;
    }

    try {

        youtubeMusic.contentWindow.postMessage(
            JSON.stringify({
                event: "command",
                func: "playVideo",
                args: []
            }),
            "*"
        );

    } catch (error) {

        console.log("Music error:", error);

    }
}


// =====================================================
// NO BUTTON
// =====================================================

function moveNoButton() {

    if (!noBtn) return;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX =
        window.innerWidth - buttonWidth - 20;

    const maxY =
        window.innerHeight - buttonHeight - 20;

    const randomX =
        Math.max(0, Math.random() * maxX);

    const randomY =
        Math.max(0, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


// =====================================================
// PAGE 2 → PAGE 3
// =====================================================

function showLetter() {

    yesPage.classList.add("hidden");

    letterPage.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =====================================================
// PAGE 2 → PAGE 1
// =====================================================

function goBackToFirst() {

    yesPage.classList.add("hidden");

    firstPage.classList.remove("hidden");

    if (noBtn) {

        noBtn.style.position = "relative";
        noBtn.style.left = "auto";
        noBtn.style.top = "auto";

    }
}


// =====================================================
// PAGE 3 → PAGE 2
// =====================================================

function goBackToYes() {

    letterPage.classList.add("hidden");

    yesPage.classList.remove("hidden");
}


// =====================================================
// PAGE 3 → PAGE 4
// =====================================================

function showGifts() {

    letterPage.classList.add("hidden");

    giftPage.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =====================================================
// OPEN GIFTS
// =====================================================

function openGift(number) {

    const giftMessage =
        document.getElementById("giftMessage");

    if (!giftMessage) return;


    if (number === 1) {

        giftMessage.innerHTML =
            "මේක දැක්කම අපි දෙන්නා එකට හිනා වුණු දවස් මතක් වෙයිද? 🥺ඒ දවස්වල අපිට ඒ හැම මොහොතක්ම සාමාන්‍ය දෙයක් වගේ දැනෙන්න ඇති.ඒත් අද ආපහු මතක් කරද්දි…ඒ පොඩි පොඩි මොහොතවල් තමයි මට ලොකුම මතක වෙලා තියෙන්නේ. 💗සමහරවිට එදා ඒවායේ වටිනාකම අපි දෙන්නටම තේරුණේ නෑ… 🥀 ";

    }

    else if (number === 2) {

        giftMessage.innerHTML =
            "මං ඔයාට කියන්න බැරිවුණු දේවල් ගොඩක් තිබුණා… 🥺“මං ඉන්නවා” කියලා කියපු හැම වෙලාවකම,ඒ වචන ඇතුළේ මං හංගගෙන හිටපු ආදරේ ඔයාට දැනුණාද දන්නේ නෑ.සමහර දේවල් කියන්න ගියාම වචන මදි වෙනවා.ඒ නිසාම වෙන්න ඇති…ං නොකියපු දේවල් අද මේ තරම් බරක් වෙලා තියෙන්නේ. 💔";

            

    }

    else if (number === 3) {

        giftMessage.innerHTML =
            "මේක තමයි අන්තිම gift එක…ඒත් මේක ඇතුළේ තියෙන්නේ තෑග්ගක් නෙවෙයි. 🥺 පොඩි ප්‍රශ්නයක් විතරයි…කවදාහරි අපේ පරණ මතකයක් මතක් වෙලා,ඒ දවස් ආයෙත් ලැබුණා නම් කියලා ඔයාට හිතුණොත්…එදා ඔයා වෙනස් විදිහකට ආදරේ කරයිද? 💔මොකද සමහර දේවල් අපිට ආයෙත් ලැබෙන්නේ නෑ.සමහර මිනිස්සුත් එහෙමයි… 🥀ඒ නිසා මේ gift එකත් එක්ක මං ඔයාට දෙයක් ඉතුරු කරනවා —මාව මතකයක් විදිහට හරි මතක තියාගන්න. ❤️‍🩹";





    }

    createHearts();
}


// =====================================================
// PAGE 4 → PAGE 5
// =====================================================

function showOpenWhen() {

    giftPage.classList.add("hidden");

    openWhenPage.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =====================================================
// OPEN WHEN LETTERS
// =====================================================

function openWhenLetter(number) {

    const message =
        document.getElementById("openWhenMessage");

    if (!message) return;


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


// =====================================================
// PAGE 5 → PAGE 6
// =====================================================

function showPage6() {

    openWhenPage.classList.add("hidden");

    page6.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =====================================================
// PAGE 6 → PAGE 7
// =====================================================

function showPage7() {

    page6.classList.add("hidden");

    page7.classList.remove("hidden");

    createHearts();
    createSparkles();
}


// =====================================================
// PAGE 7 → PAGE 8
// =====================================================

function showPage8() {

    page7.classList.add("hidden");

    // Page 8 තාම HTML එකේ නැත්නම් error නොවෙන්න
    const page8 =
        document.getElementById("page8");

    if (page8) {

        page8.classList.remove("hidden");

        createHearts();
        createSparkles();

    } else {

        console.log("Page 8 HTML එක තාම add කරලා නැහැ.");

    }
}


// =====================================================
// FLOATING HEARTS
// =====================================================

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


// =====================================================
// SPARKLES
// =====================================================

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
}
