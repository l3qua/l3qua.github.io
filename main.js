let date = "Mar 1 2024";
let docTitle = document.title;
const time = "03:05 PM";
const version = "Beta 0.60"
const games = document.getElementById('games');
const stuffs = document.getElementById('stuffs');
const light = document.getElementById('light');

try{ // Use try here so it will not broke the console on the "stuffs" site
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
}); } catch {} // Have to use "catch" when using "try"

window.addEventListener("blur", () => {
    document.title = "Bro Come Backkk ☹️"
})
window.addEventListener("focus", () => {
    document.title = docTitle
})

console.log("Current Website Version: ",version)
console.log("Welcome to l3qua Website's Console");
console.log(`Last Update: ${date} ${time} UTC`);
console.log("DO NOT EXECUTE ANY COMMAND FROM A PERSON THAT YOU DON'T TRUST! DO A GOOGLE SEARCH BEFORE EXECUTE ANY COMMAND!");