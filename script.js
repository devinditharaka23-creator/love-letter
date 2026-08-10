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
            "මේක අන්තිම gift එක…ඒත් මේක ඇතුළේ තියෙන්නේ තෑග්ගක් නෙවෙයි. 🥺 පොඩි ප්‍රශ්නයක් විතරයි…කවදාහරි අපේ පරණ මතකයක් මතක් වෙලා,ඒ දවස් ආයෙත් ලැබුණා නම් කියලා ඔයාට හිතුණොත්…එදාට ඔයා වෙනස් විදිහකට ආදරේ කරයිද? 💔මොකද සමහර දේවල් අපිට ආයෙත් ලැබෙන්නේ නෑ.සමහර මිනිස්සුත් එහෙමයි… 🥀ඒ නිසා මේ gift එකත් එක්ක මං ඔයාට දෙයක් ඉතුරු කරනවා මාව මතකයක් විදිහට හරි මතක තියාගන්න. ";





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
            "සමහරවිට අද මාව මතක් වෙන්නේ හේතුවක් නැතුව වෙන්න පුළුවන්. එකපාරටම පරණ කතාබහක් මතක් වෙන්න පුළුවන්. අපි එකට හිනා වුණු දවසක්, මං කියපු පොඩි කතාවක්, නැත්නම් අපි දෙන්නා අතර තිබුණු කිසිම කෙනෙක් නොදන්න පුංචි මතකයක්… 🥺ඒ වෙලාවට මං ඔයා ළඟ නැති එක ගැන දුක හිතෙන්න පුළුවන්.ඒත් මට කියන්න තියෙන්නේ එක දෙයයි… ඔයාට මාව මතක් වෙන හැම වෙලාවකම, මමත් කොහේහරි ඉඳන් ඔයාව මතක් කරනවා කියලා හිතාගන්න. ❤️‍🩹අපි අතර තිබුණු දේවල් හැම එකක්ම perfect නොවෙන්න ඇති. අපි දෙන්නම වැරදි කරලා ඇති. සමහර වචන කියන්න තිබුණේ නැති වෙන්නත් පුළුවන්. සමහර දේවල් කියන්න ඕනේ වෙලාවේ කියන්න බැරි වෙන්නත් පුළුවන්.ඒත් ඒ හැමදේකටම වඩා මට වටින්නේ අපි අතර තිබුණු ඇත්තම මතක ටික. 💗ඒ නිසා අද මාව මතක් වුණා නම්… දුක් වෙන්න එපා. පොඩ්ඩක් හිනා වෙන්න. මොකද කවදහරි මගේ මතකයක් ඔයාගේ මූණට හිනාවක් ගෙනාවා නම්, ඒ මතකය තාමත් වටිනවා.මාව මතක් වුණාම මාව අමතක කරන්න උත්සාහ කරන්න එපා…මතකයක් විදිහට හරි මාව ඔයාගේ හිතේ තියාගන්න. 🥺💗";

    }

    else if (number === 2) {

        message.innerHTML =
            "මුලින්ම එක දෙයක් මතක තියාගන්න…ඔයාට හැම වෙලාවෙම strong වෙලා ඉන්න ඕනේ නෑ. 🥺සමහර දවස් තියෙනවා අපිට කිසිම දෙයක් හරියන්නේ නැති වගේ දැනෙන. කවුරුත් අපිව තේරුම් ගන්නේ නෑ වගේ හිතෙන. හැමෝම ළඟ ඉන්නවා වගේ පෙනුණත්, ඇතුළෙන් අපි තනියම වගේ දැනෙන දවස්…එහෙම දවසක් අද නම්, මේ letter එක ටිකක් වෙලා අරගෙන කියවන්න. ❤️‍🩹ඔයාට අඬන්න ඕනේ නම් අඬන්න.හිතේ තියෙන දේවල් හංගගෙන ඉන්න ඕනේ නෑ.මොකද දුක කියන්නේ ඔයා දුර්වලයි කියන එක නෙවෙයි.ඒකෙන් කියන්නේ ඔයාට දේවල් ගැන ඇත්තටම හැඟීමක් තියෙනවා කියන එක.සමහරවිට ඔයාට හිතෙයි, “මේ හැමදේම කවදා හරි හොඳ වෙයිද?” කියලා.ඔව්… කාලයක් යයි.සමහර දේවල් අමතක වෙයි.සමහර දේවල් අමතක නොවුණත් ඒවා එක්ක ජීවත් වෙන්න අපි ඉගෙන ගනී.ඒ නිසා අද දවස අමාරුයි කියලා, හෙටත් එහෙමම වෙයි කියලා හිතන්න එපා. 🥺ඔයාට හිනාවෙන්න තවත් දවස් තියෙනවා. ඔයාට සතුටු වෙන්න තවත් මතක තියෙනවා.ඒ හැමදේම තාම ඉස්සරහට තියෙනවා. 💗ඉතින් අද දුක නම්… ටිකක් අඬලා, හුස්මක් අරගෙන, ආයෙත් හෙමින් ඉස්සරහට යන්න.ඔයා හිතනවට වඩා ගොඩක් වටින කෙනෙක්. ❤️‍🩹";

    }

    else if (number === 3) {

        message.innerHTML =
            "මුලින්ම… ඔයාට මං එක්ක තරහා වෙන්න අයිතිය තියෙනවා. 🥺මං හැම වෙලාවෙම හරි කෙනෙක් නෙවෙයි. මං කියපු වචනයක් ඔයාට රිදෙන්න ඇති. මං කරපු දෙයක් ඔයාට වැරදි විදිහට දැනෙන්න ඇති. සමහරවිට මං ඔයාගේ හිත තේරුම් ගන්න ඕනේ වෙලාවේ ඒක කරන්න බැරි වෙන්න ඇති.ඒ හැමදේකටම මං කියන්නේ…සමාවෙන්න. 💔ඒත් මං ඔයාට රිදවන්න හිතාගෙන කිසිම දෙයක් කළා කියලා හිතන්න එපා.මිනිස්සු ආදරේ කරනකොටත් වැරදි කරනවා.කවදාවත් රිදවන්නේ නැති ආදරයක් කියලා දෙයක් නැති වෙන්න පුළුවන්.ඒත් වැදගත් වෙන්නේ…රිදුණාට පස්සේ අපි ඒක හදාගන්න උත්සාහ කරනවද කියන එක.ඒ නිසා තරහා නම් ටිකක් තරහා වෙලා ඉන්න. 😔මාව මතක් කරන්න ඕනේ නෑ. හැබැයි හිත ටිකක් නිවුණාම, අපි දෙන්නා අතර තිබුණු හොඳ දේවල් ටිකත් මතක් කරන්න.මොකද එක වැරැද්දක් නිසා අපි අතර තිබුණු හැම ලස්සන මතකයක්ම බොරුවක් වෙන්නේ නෑ. 🥀මං කැමති නෑ අපේ අන්තිම මතකය තරහක් වෙන්න.ඒ නිසා කවදාහරි පුළුවන් නම්… මට සමාව දෙන්න. ❤️‍🩹";

    }

    else if (number === 4) {

        message.innerHTML =
            "ඔයාට මාව මතක් වෙලා, එකපාරටම හිතට ඒ පරණ feeling එක ආවොත්… මේක කියවන්න.සමහරවිට ඔයාට මාව ළඟට අරගෙන කතා කරන්න හිතෙයි. මං ළඟ හිටියා නම් කියලා හිතෙයි. පරණ දවස්වලට ආපහු යන්න හිතෙයි.ඒ වෙලාවට මතක තියාගන්න…මං ඔයාට දීපු ආදරේ බොරුවක් නෙවෙයි. 💗මං කියපු හැම “ආදරෙයි” එකක්ම, මං කරපු හැම පොඩි care එකක්ම,ඔයා වෙනුවෙන් මං බලාගෙන හිටපු හැම මොහොතක්ම…ඒ හැමදේකම ඇත්තටම ආදරයක් තිබුණා. සමහරවිට මං ඒක හරියට කියන්න දැනගෙන හිටියේ නෑ. සමහරවිට මගේ ආදරේ ඔයාට ඕනේ විදිහට පෙන්වන්න බැරි වුණා.ඒත් මගේ හිතේ තිබුණු දේ නම් ඇත්ත.අද අපි කොහේ හිටියත්, කොච්චර දුරින් හිටියත්…අපි එකට හිටපු කාලය මගේ ජීවිතේ කොටසක්. 🥺ඒක මට මකා දාන්න බෑ.ඉතින් අද ඔයාට මට ආදරේ හිතුණා නම්…ඒ feeling එකෙන් බය වෙන්න එපා.ටිකක් ඒ මතකය එක්ක ඉන්න. අපි දෙන්නා හිනා වුණු හැටි මතක් කරන්න. අපි කතා කරපු දේවල් මතක් කරන්න.ඒ මතකය ලස්සනයි නම්… ඒක මතකයක් විදිහට හරි තියාගන්න. ❤️‍🩹🥀";

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
function nextOpenWhen(pageNumber) {
    document.getElementById("openWhen1").classList.add("hidden");
    document.getElementById("openWhen2").classList.add("hidden");
    document.getElementById("openWhen3").classList.add("hidden");
    document.getElementById("openWhen4").classList.add("hidden");

    document.getElementById("openWhen" + pageNumber)
        .classList.remove("hidden");
}
function backToPage7() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById("page7").classList.remove("hidden");
}
function backToFirstFromPage8() {

    document.getElementById("page8").classList.add("hidden");

    document.getElementById("firstPage").classList.remove("hidden");

}
