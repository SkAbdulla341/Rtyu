// Gauge
const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) return;

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
}

setGaugeValue(gaugeElement, 0.6);


// Living Room Light
function light1() {
    let lightswitch1 = document.getElementById("lightswitch1");
    let lightimg1 = document.getElementById("lightimg1");

    if (lightswitch1.checked) {
        lightimg1.style.opacity = "0.3";
    } else {
        lightimg1.style.opacity = "1";
    }
}


// Bed Lamp
function bedlamp1() {
    let bedlampswitch1 = document.getElementById("bedlampswitch1");
    let bedlampimg1 = document.getElementById("bedlampimg1");

    if (bedlampswitch1.checked) {
        bedlampimg1.style.opacity = "0.3";
    } else {
        bedlampimg1.style.opacity = "1";
    }
}


// Fan (ONLY ONE)
let fanswitch1 = document.getElementById("fanswitch1");
let fan1 = document.getElementById("fan1");

function fanrotate1() {
    if (fanswitch1.checked) {
        fan1.classList.add("rotate");   // ✅ correct way
    } else {
        fan1.classList.remove("rotate"); // ✅ correct way
    }
}


// Time + Date
function startTime() {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    let timeString = today.toLocaleString('en-US', options);

    document.getElementById('date').innerHTML = day + "/" + month + "/" + year;
    document.getElementById('time').innerHTML = timeString;

    setTimeout(startTime, 500);
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZOJ8D4-uQeWUvuteiCqWQOYmxpzJc8g8",
  authDomain: "smarthomeautomation-28a7d.firebaseapp.com",
  databaseURL: "https://smarthomeautomation-28a7d-default-rtdb.firebaseio.com",
  projectId: "smarthomeautomation-28a7d",
  storageBucket: "smarthomeautomation-28a7d.firebasestorage.app",
  messagingSenderId: "168787359215",
  appId: "1:168787359215:web:9df7cf748b60026f7f721a",
  measurementId: "G-2F1X11SQBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}