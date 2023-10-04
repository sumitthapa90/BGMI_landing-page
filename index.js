const API_URL = "https://gaming-portal-be.vercel.app/api/v1/room/rooms";
const APP_URL = "https://app.pattseheadshot.com";
const WEB_URL_WWW = "https://www.pattseheadshot.com/";
const WEB_URL_LOCAL = "file://";
const WEB_URL = "https://pattseheadshot.com/";

var lastTournament;

const renderData = (matchData) => {
  lastTournament = matchData
  console.log("match click", matchData)
  const mapImgUrl = matchData.mapImg;
  const bgmiImg = document.querySelector(".bgmi_img img");
  bgmiImg.src = mapImgUrl;
  const formattedDateAndTime = moment(matchData.dateAndTime).format(
    "YYYY-MM-DD h:mm a"
  );
  var html = `<div>
      <h2 class="bgmiHead">${matchData.gameName}</h2>
      <p class="bgmi_para">Date And Time: ${formattedDateAndTime}</p>
      </div>
      <div class="winning_prize">
        <div class="winning_sec_left">
          <p class="winning_Para">WINNING PRIZE &nbsp <button id="openPopupBtn"><i class="fa-solid fa-arrow-down"></i></button></p>

          <div id="popup" class="popup">
          <div class="popup-content">
            <span class="close" id="closePopupBtn">&times;</span>
         
            <div class="WinngColor">

         <div class="winningSec">
         <h4 class="WiiningPoolSec">WINNING PRIZE POOL</h4>
         <p clas="pool">${matchData.gameName}</p>
         </div>
            <div class="prizePool" id="popupp"></div>
            </div>
          </div>
        </div>

        
          <h3 class="text_size">Last Survival: 200<span> <img src="./assets/rupee img.svg" class="rupee" /></span
            ></h3>
        </div>
        <div class="winning_sec_right">
          <p class="winning_Para">ENTERY FEES</p>
          <span class="text_size"
            >
            ${matchData.entryFee}<span> <img src="./assets/rupee img.svg" class="rupee" /></span
          ></span>
        </div>
      </div>
      <div class="typeandversion">
        <div class="first">
          <p class="winning_Para">TYPE</p>
          <h4 class="text_color">${matchData.gameType}</h4>
        </div>
        <div class="second">
          <p class="winning_Para">VERSION</p>
          <h4 class="text_color">${matchData.version}</h4>
        </div>
        <div class="third">
          <p class="winning_Para">MAP</p>
          <h4 class="text_map">${matchData.mapType}</h4>
        </div>
      </div>
      <div class="spots">
        <div class="spot_space">
          <input type="range" class="input_range" disabled />
          <p class="winning_Para_top">Only 30 spots left 20/50</p>
        </div>
        <div class="button_space">
          <a href="https://app.pattseheadshot.com/auth/signup?gameId=${matchData.roomUuid}" target="_blank" class="btn">JOIN</a>
        </div>
      </div>`;

  document.getElementById("rooms").innerHTML = html;
  const popUpButton = document.getElementById("openPopupBtn");
    const popUp = document.getElementById("popup");
    const closePopUp = document.getElementById("closePopupBtn");
    if (closePopUp) {
      closePopUp.addEventListener("click", () => {
        popUp.style.display = "none";
      });
    }

    var popuppp = "";
    popUpButton?.addEventListener("click", () => {
      popuppp = `<h5>Last Survival: ${lastTournament.lastSurvival} <span> <img src="./assets/rupee img.svg" class="rupee"></span> </h5>
      <h5>Highest kill: ${lastTournament.highestKill} <span> <img src="./assets/rupee img.svg" class="rupee"></span> </h5>
      <h5>2nd Winner: ${lastTournament.secondWin}  <span> <img src="./assets/rupee img.svg" class="rupee"></span>  </h5>
      <h5>3nd Winner: ${lastTournament.thirdWin} <span> <img src="./assets/rupee img.svg" class="rupee"></span> </h5>`;
      document.getElementById("popupp").innerHTML = popuppp;
      popUp.style.display = "block";
    });
}
fetch(API_URL)
  .then((response) => {
    if (response.ok) {
    return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })

  .then((data) => {
    console.log("API Data:", data);
    var roomData = data
    // lastTournament = roomData[0]
    
    renderData(roomData[0])
    var matches = data;

    var allimg = [];
    matches.forEach((element) => {
      console.log("element", element)
      const imgElm = document.createElement('img')
      imgElm.classList.add("imageItem")
      imgElm.src = element?.mapImg ? element?.mapImg : "./assets/1.svg"
      imgElm.addEventListener('click', () => renderData(element))
      // allimg += `<div class="carousel_item" onclick="renderData(${element})"><img  src=${element?.mapImg ? element?.mapImg : "./assets/1.svg"} alt="1" onclick="renderData(${element})"/></div>`;
      allimg.push(imgElm) 
    });
    console.log('allImges', allimg)
    const crslElm = document.getElementById("allImges")
    if(crslElm) {
      allimg.forEach((imgElm) => {
        crslElm.appendChild(imgElm)
      })
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  })

let clock = document.getElementById("clock");
let changeText = document.getElementById("changing-text");
let excitingTournment = document.getElementById("excitingTournment");
let seamless = document.getElementById("seamless");
let cashPrize = document.getElementById("cashPrize");
let skills = document.getElementById("skills");
let dropBoxSection = document.getElementById("drop-box-section");
let dropBox = document.getElementById("drop-box");
let change = document.getElementById("change");
let signup = document.getElementById("signup");
let play = document.getElementById("play");
let rewards = document.getElementById("rewards");

if (clock) {
  clock.addEventListener("mouseenter", () => {
    changeText.innerText =
      "Our dedicated support team is here to assist you around the clock, ensuring a smooth and enjoyable gaming experience.";
  });
}

if (excitingTournment) {
  excitingTournment.addEventListener("mouseenter", (e) => {
    changeText.innerText =
      "Participate in thrilling tournaments and compete against the best in the community for massive cash prizes and recognition.";
  });
}

if (seamless) {
  seamless.addEventListener("mouseenter", () => {
    changeText.innerText =
      "Our secure payment system ensures hassle-free withdrawals so you can enjoy your rewards without any worries.";
  });
}
if (cashPrize) {
  cashPrize.addEventListener("mouseenter", () => {
    changeText.innerText =
      "Play your favorite BGMI battles and win real cash rewards. The more you play, the more you earn!";
  });
}

if (skills) {
  skills.addEventListener("mouseenter", () => {
    changeText.innerText =
      "Showcase your gaming prowess in skill-based challenges designed to test your strategic thinking and reflexes.";
  });
}

if (signup) {
  signup.addEventListener("mouseenter", () => {
    change.innerText =
      "Create your free account in just a few simple steps and join our ever-growing gaming community.";
  });
}

if (play) {
  play.addEventListener("mouseenter", () => {
    change.innerText =
      "Dive into intense BGMI battles, showcase your skills, and climb the leaderboard to win cash rewards";
  });
}

if (rewards) {
  rewards.addEventListener("mouseenter", () => {
    change.innerText =
      "Cash out your earnings with ease and enjoy the real benefits of your gaming talent";
  });
}

const bodyElem = document.getElementById("body");
const audio = document.getElementById("audio");
//  sound  function
function playSound() {
  audio.pause();
  audio.currentTime = 0;

  audio.play();
}
// Attach the onclick event listener to the button

if (bodyElem) {
  bodyElem.onclick = playSound;

  bodyElem.onload = handleLoad;
}

function handleLoad() {
  try {
    const search = window.location.search;
    const localToken = localStorage.getItem("token");

    if (search.includes("token") || localToken) {
      if (search.includes("token")) {
        // Extract the token value from the URL
        const tokenValue = new URLSearchParams(search).get("token");
        // Store the token in localStorage
        localStorage.setItem("token", tokenValue);
        window.location.href = `${window.location.href.split("?")[0]}`;
      }
    }
  } catch (err) {
    console.error("In Load => ", err);
  }
}

// Call the function when the document has finished loading
