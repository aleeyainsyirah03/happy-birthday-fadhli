/* =========================
   BIRTHDAY INTRO
========================= */

const loadingScreen = document.getElementById("loading");
const ageNumber = document.getElementById("ageNumber");
const loadingMessage = document.getElementById("loadingMessage");
const beginBtn = document.getElementById("beginBtn");
const fireworksContainer = document.getElementById("fireworksContainer");

let currentAge = 0;
let introFinished = false;
let fireworkTimer;

/* CREATE ONE FIREWORK */

function createFirework() {
    if (!fireworksContainer || introFinished) return;

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left = 10 + Math.random() * 80 + "%";
    firework.style.top = 8 + Math.random() * 65 + "%";

    const randomScale = 0.7 + Math.random() * 0.6;
    firework.style.setProperty("--fireworkScale", randomScale);

    fireworksContainer.appendChild(firework);

    setTimeout(function () {
        firework.remove();
    }, 1400);
}

/* FIREWORK SPEED BECOMES SLOWER */

function scheduleFirework() {
    if (introFinished) return;

    createFirework();

    const delay = 250 + currentAge * 45;

    fireworkTimer = setTimeout(scheduleFirework, delay);
}

/* COUNT FROM 0 TO 29 */

function startBirthdayCount() {
    if (!ageNumber) return;

    ageNumber.textContent = "0";
    scheduleFirework();

    const countTimer = setInterval(function () {
        currentAge++;

        ageNumber.textContent = currentAge;

        if (currentAge >= 29) {
            clearInterval(countTimer);
            finishBirthdayIntro();
        }
    }, 230);
}

/* FINAL AGE 29 */

function finishBirthdayIntro() {
    introFinished = true;

    clearTimeout(fireworkTimer);

    if (fireworksContainer) {
        setTimeout(function () {
            fireworksContainer.innerHTML = "";
        }, 1300);
    }

    if (loadingMessage) {
        loadingMessage.classList.add("final");
        loadingMessage.textContent = "I made this special for you";
    }

    if (beginBtn) {
        setTimeout(function () {
            beginBtn.style.display = "block";
        }, 900);
    }
}

/* BEGIN WEBSITE + START MUSIC */

if (beginBtn) {
    beginBtn.addEventListener("click", function () {
        const bgMusic = document.getElementById("bgMusic");
        const hero = document.getElementById("hero");

        if (bgMusic) {
            bgMusic.volume = 0.35;

            bgMusic.play().catch(function () {
                console.log("Music could not start.");
            });
        }

        if (loadingScreen) {
            loadingScreen.style.transition = "opacity .9s ease";
            loadingScreen.style.opacity = "0";

            setTimeout(function () {
                loadingScreen.style.display = "none";

                if (hero) {
                    hero.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 900);
        }
    });
}

startBirthdayCount();

/* 29 BIRTHDAY GIFTS */
const reasons = [
"Even sibuk gila pun, baby still reply text i and call i.",
"Every time phone nyala nama baby, auto senyum bodoh tu keluar.",
"Even kita LDR, baby tak buat I rasa lonely.",
"Sebab baby are my first person I nak spill everything",
"Sebab baby always tahu how nak tenangkan I, even when I tengah overthinking *walaupun kadang kadang tak 🙄.",
"Sebab setiap 'leklok kerja' means a lot to me.",
"Sebab I know no matter what happens, baby will always choose us.",
"Sebab suara baby literally fix my mood.",
"Sebab somehow you always can detect bila I tak okay.",
"Sebab dengan you,I tak payah jadi orang lain",
"Sebab baby bukan tunang i jerr , baby kawan baik i jugak hehe.",
"Sebab setiap kali VC takpernah rasa lama,tak puas HAHAHA.",
"Sebab every bye after our calls is still the hardest one.",
"Sebab I suka dengar you cerita pasal hari you, even benda kecik.",
"Sebab every future plan I fikir, you're always in it.",
"Sebab you're my favourite notification. Always.",
"Sebab you make me feel loved without even trying.",
"Sebab Whenever ada good news, you’re the first person I nak bagitahu.",
"Sebab walaupun kita jauh, baby still feel like home.",
"Sebab Every KM between Johor and Shah Alam worth it lah bro.",
"Sebab you make waiting feel worth it.",
"Sebab I know one day all these goodbyes will finally become 'jumpa you malam ni'.",
"Sebab you always buat i percaya everything will be okay.",
"Sebab I rasa selamat dengan baby . No explanation needed.",
"Sebab you're the person I prayed for without even realizing it.",
"Sebab baby the only one I boleh kacau everyday and still know you’ll love me esok hehe.",
"Sebab I takleh imagine i punya future without you once i bercinta dengan you.",
"Sebab next year, i tak panggil baby 'cik tunang'dah.i dah boleh panggil 'my husband'.",
"Sebab harini semua orang sambut birthday baby,tapi sejujurnya I rasa I'm the lucky one. Sebab 29 tahun yang lepas , someone amazing was born, and somehow one day, he became mine. ❤️",
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
    "Kalau dah jumpa secret chat ni, maksudnya baby dah sampai penghujung 🥹",
    "Thank you sebab baca every part of this little website.",
    "I know kita jauh harini...",
    "tapi i harap soon kita akan celebrate together.",
    "I love you. Always n Forever. ❤️",
    "Now tutup this website pat",
    "and call me 🤍",
    "eh last last",
 "Thank you for making me the happiest future wife❤️nanti claim 2h1m eh 😋",
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
        musicBtn.innerHTML = "🎧ྀི";
        musicBtn.classList.add("playing");
    }).catch(function(){
        console.log("Music needs user interaction.");
    });
}

if (musicBtn && bgMusic) {
    musicBtn.onclick = function () {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.innerHTML = "🎧ྀི";
            musicBtn.classList.add("playing");
        } else {
            bgMusic.pause();
            musicBtn.innerHTML = "🔇";
            musicBtn.classList.remove("playing");
        }
    };
}