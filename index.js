const hours = document.querySelector(".hero .hours i");
const minutes = document.querySelector(".hero .minutes i");
const seconds = document.querySelector(".hero .seconds i");
const bar_seconds = document.querySelector(".hero .bar_seconds");

// Generate 60 second markers
for (let i = 1; i <= 60; i++) {
    bar_seconds.innerHTML += `
    <span style="--index:${i};"><p></p></span>
    `;
}

function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours() % 12; // Convert to 12-hour format
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    // Calculate accurate rotations
    seconds.style.transform = `rotate(${currentSeconds * 6}deg)`; // 360° / 60 = 6° per second
    minutes.style.transform = `rotate(${currentMinutes * 6}deg`; // +0.1° for seconds
    hours.style.transform = `rotate(${currentHours * 30 + currentMinutes * 0.5}deg)`; // +0.5° for minutes
}

// Call every second
setInterval(getCurrentTime, 1000);

// Initial call to avoid delay
getCurrentTime();
