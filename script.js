function updateTimer() {
    const newYear = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
setInterval(updateTimer, 1000);

updateTimer();

const backgrounds = [
    'url("1.jpg")',
    'url("2.jpg")'
];

document.getElementById('change-background').addEventListener('click', function() {
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = randomBackground;
});

function openGift() {
    const modal = document.getElementById('congratulation-modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('congratulation-modal');
    modal.style.display = 'none';
}