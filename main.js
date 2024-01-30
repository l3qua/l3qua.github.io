let date = "Jan 30 2024";
const time = "01:30:35 AM";
const version = "Beta 0.56"
const games = document.getElementById('games');
const light = document.getElementById('light');

function ver(){
        console.log("Current Website Version: ",version)
}

games.addEventListener('mousemove', e => {
    const rect = games.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    light.style.setProperty('--x', `${x}px`);
    light.style.setProperty('--y', `${y}px`);
});
games.addEventListener('mouseleave', () => {
    light.style.setProperty('--x', `-100%`);
    light.style.setProperty('--y', `-100%`);
});

ver()
console.log("Welcome to l3qua Website's Console");
console.log(`Last Update: ${date} ${time} UTC`);
console.log("DO NOT EXECUTE ANY COMMAND FROM A PERSON THAT YOU DON'T TRUST! DO A GOOGLE SEARCH BEFORE EXECUTE ANY COMMAND!");