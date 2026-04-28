/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', () => {
    let seconds = 5;
    const timerDisplay = document.getElementById('timer');
    const progressBar = document.getElementById('progressBar');
    
    if (progressBar) {
        // Start progress bar animation
        setTimeout(() => {
            progressBar.style.width = '0%';
        }, 10);
    }

    if (timerDisplay) {
        const countdown = setInterval(() => {
            seconds--;
            timerDisplay.textContent = seconds;
            if (seconds <= 0) {
                clearInterval(countdown);
                window.location.href = 'index.html';
            }
        }, 1000);
    }
});
