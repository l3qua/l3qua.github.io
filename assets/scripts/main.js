let docTitle = document.title; // For line 25 to work propely
let date = "May 1 2025"; // Site deployment date
const time = "19:35 PM"; // Site deployment time
const version = "Beta 0.85.2" // a few more version before stable
const projects = document.getElementById('projects'); // For main site
const light = document.getElementById('light'); // For "try" event at line 8

try{ // Use try here so it will not break the console on the "stuffs" site
projects.addEventListener('mousemove', e => {
    const rect = projects.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    light.style.setProperty('--x', `${x}px`);
    light.style.setProperty('--y', `${y}px`);
});
projects.addEventListener('mouseleave', () => {
    light.style.setProperty('--x', `-100%`);
    light.style.setProperty('--y', `-100%`);
}); } catch {} // Have to use "catch" when using "try"

window.addEventListener("blur", () => {
    document.title = "Bro Come Backkk ☹️"
})
window.addEventListener("focus", () => {
    document.title = docTitle
}) // Some unnessesary stuff that no one will mention about

// Some useless line when console started
console.log("Current Website Version: ",version)
console.log("Welcome to l3qua Website's Console");
console.log(`Last Update: ${date} ${time} UTC+7`);
// console.log("NEVER EXECUTE ANY COMMAND FROM A PERSON THAT YOU DON'T TRUST! DO A GOOGLE SEARCH BEFORE EXECUTE ANY COMMAND!");
// End of those useless lines and script file