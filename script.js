const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", function () {
    envelope.style.display = "none";
    letter.classList.remove("hidden");
});

function nextPage() {
    document.querySelector(".container").innerHTML = `
        <div class="letter">
            <h1>Do You Love Me? 🥰❤️</h1>

            <div class="buttons">
                <button onclick="yesAnswer()">YES ❤️</button>
                <button id="noBtn" onmouseover="moveNoButton()">NO 😢</button>
            </div>
        </div>
    `;
}

function moveNoButton() {
    const noBtn = document.getElementById("noBtn");

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function yesAnswer() {
    document.querySelector(".container").innerHTML = `
        <div class="letter">
            <h1>I Knew It! 😍❤️</h1>

            <p>
                You are my favorite person in the whole world. 💕
                <br><br>
                I Love You Forever and Ever ❤️🥰
            </p>

            <div class="hearts">
                ❤️ 💕 💖 💗 💓
            </div>
        </div>
    `;
}
