setTimeout(function () {
        const loading = document.getElementById("loading");
        if (loading) loading.style.display = "none";
    }, 3000);

/* 29 BIRTHDAY GIFTS */
const reasons = [
"Because no matter how busy you are, you'll still text or call me.",
"Because every time my phone lights up with your name, automatic I'll smile.",
"Because even kita LDR, you never make me feel alone.",
"Because you're my first person that I nak cerita everything.",
"Because you always know how to calm me down, even when I tengah overthinking.",
"Because every 'leklok kerja' means a lot to me.",
"Because I know no matter what happens, you'll always choose us.",
"Because your voice can literally fix my mood.",
"Because somehow, you always know when something is wrong with me.",
"Because with you, I don't have to pretend to be someone else.",
"Because you're not just my fiancé, you're my best friend too.",
"Because every VC with you never feels long enough.",
"Because every goodbye after our calls is still the hardest one.",
"Because I love dengar you cerita pasal hari you, even benda kecik.",
"Because every future plan I imagine, you're always in it.",
"Because you're my favourite notification. Always.",
"Because you make me feel loved without even trying.",
"Because whenever something good happens, you're the first person I nak bagitahu.",
"Because even far away, you still feel like home.",
"Because every kilometre between Johor and Shah Alam is worth it.",
"Because you make waiting feel worth it.",
"Because I know one day all these goodbyes will finally become 'see you tonight'.",
"Because you always make me believe everything will be okay.",
"Because I feel safe with you. No explanation needed.",
"Because you're the person I prayed for without even realizing it.",
"Because you're the only person I can annoy every day and still know you'll love me tomorrow.",
"Because I can't imagine my future without you in it.",
"Because next year, I won't have to call you my fiancé anymore. I'll finally get to call you my husband.",
"Because today the world celebrates your birthday, but honestly I think I'm the lucky one. Because 29 years ago, someone amazing was born, and somehow one day, he became mine. ❤️"
];

let currentReason = 0;

const giftNumber = document.getElementById("giftNumber");
const reasonText = document.getElementById("reasonText");
const prevReason = document.getElementById("prevReason");
const nextReason = document.getElementById("nextReason");

function showReason() {

    if (!giftNumber || !reasonText || !prevReason || !nextReason) return;

    const card = document.querySelector(".reason-slider");

    card.classList.add("change");

    setTimeout(function () {

        giftNumber.innerHTML = "🎁 Gift " + (currentReason + 1) + " of 29";
        reasonText.innerHTML = reasons[currentReason];

        if (currentReason === 28) {
            nextReason.innerHTML = "❤️ Open My Heart";
        } else {
            nextReason.innerHTML = "🎁 Open Next Gift";
        }

        card.classList.remove("change");

    }, 220);

}

if (nextReason) {
    nextReason.onclick = function () {
        if (currentReason === 28) {
            const ending = document.getElementById("ending");
            if (ending) ending.scrollIntoView({ behavior: "smooth" });
            return;
        }

        currentReason++;
        showReason();
    };
}

if (prevReason) {
    prevReason.onclick = function () {
        currentReason--;

        if (currentReason < 0) {
            currentReason = 28;
        }

        showReason();
    };
}

showReason();

/* COUNTDOWN */
const weddingDate = new Date("July 11, 2027 00:00:00").getTime();

function updateCountdown() {
    const daysBox = document.getElementById("days");
    const hoursBox = document.getElementById("hours");
    const minutesBox = document.getElementById("minutes");
    const secondsBox = document.getElementById("seconds");

    if (!daysBox || !hoursBox || !minutesBox || !secondsBox) return;

    const now = new Date().getTime();
    const distance = weddingDate - now;

    daysBox.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursBox.innerText = Math.floor((distance / (1000 * 60 * 60)) % 24);
    minutesBox.innerText = Math.floor((distance / (1000 * 60)) % 60);
    secondsBox.innerText = Math.floor((distance / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* FINAL POPUP */
const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

if (finalBtn && finalMessage) {
    finalBtn.onclick = function () {
        finalMessage.style.display = "flex";
        finalHearts();
    };
}

function finalHearts(){
    for(let i = 0; i < 12; i++){
        setTimeout(function(){
            const heart = document.createElement("div");

            heart.className = "gift-pop";
            heart.innerHTML = "💖";

            heart.style.left = Math.random() * 90 + "%";
            heart.style.top = "80%";

            finalMessage.appendChild(heart);

            setTimeout(function(){
                heart.remove();
            }, 3000);

        }, i * 120);
    }
}
const revealItems = document.querySelectorAll("section");

revealItems.forEach(function(item){
    item.classList.add("reveal");
});

function revealOnScroll(){
    revealItems.forEach(function(item){
        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", function(){

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";
});
const secretChatBtn = document.getElementById("secretChatBtn");
const secretChat = document.getElementById("secretChat");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");

const secretMessages = [
    "Hi Babykuu",
    "Kalau dah jumpa secret chat ni, maksudnya baby dah sampai ke penghujung 😂",
    "Thank you sebab baca every part of this little website.",
    "I know kita jauh harini...",
    "tapi i harap soon kita akan celebrate together.",
    "I love you. Always n Forever. ❤️",
    "Now tutup this website pat",
    "and call your singa 🤍",
    "eh last last",
 "Thank you for making me the happiest future wife. ❤️"
];

function openSecretChat(){
    secretChat.style.display = "flex";
    chatMessages.innerHTML = "";

    let delay = 0;

    secretMessages.forEach(function(message){
        delay += 1800;

        setTimeout(function(){
            const typing = document.createElement("div");
            typing.className = "chat-bubble typing";
            typing.innerHTML = typing.innerHTML = '<div class="typing-dots"><span>●</span> <span>●</span> <span>●</span></div>';;
            chatMessages.appendChild(typing);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(function(){
                typing.remove();

                const bubble = document.createElement("div");
                bubble.className = "chat-bubble";
                bubble.innerHTML = message;
                chatMessages.appendChild(bubble);
                chatMessages.scrollTop = chatMessages.scrollHeight;

            }, 1100);

        }, delay);
    });
}

if(secretChatBtn && secretChat){
    secretChatBtn.onclick = openSecretChat;
}

if(closeChat && secretChat){
    closeChat.onclick = function(){
        secretChat.style.display = "none";
    };
}
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

function startMusicOnce(){
    if (!bgMusic || musicStarted) return;

    bgMusic.volume = 0.35;

    bgMusic.play().then(function(){
        musicStarted = true;
        musicBtn.innerHTML = "🎵";
        musicBtn.classList.add("playing");
    }).catch(function(){
        console.log("Music needs user interaction.");
    });
}

document.addEventListener("click", startMusicOnce);
document.addEventListener("touchstart", startMusicOnce);
if (musicBtn && bgMusic) {
    musicBtn.onclick = function () {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.innerHTML = "🎵";
            musicBtn.classList.add("playing");
        } else {
            bgMusic.pause();
            musicBtn.innerHTML = "🔇";
            musicBtn.classList.remove("playing");
        }
    };
}