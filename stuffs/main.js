const games = document.getElementById('peojects');
const light = document.getElementById('light');

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