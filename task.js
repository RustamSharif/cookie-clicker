document.addEventListener('DOMContentLoaded', (event) => {
    const cookie = document.getElementById('cookie');
    const counterDisplay = document.getElementById('clicker__counter');
    let clickCounter = 0;

    let lastClickTime = null;
    const speedDisplay = document.createElement('span');
    speedDisplay.id = 'clicker__speed';
    cookie.parentElement.appendChild(speedDisplay);

    cookie.onclick = function() {
        // Увеличиваем счетчик кликов
        clickCounter++;
        counterDisplay.textContent = clickCounter;

        // Изменение размера печеньки
        if (cookie.width === 200) {
            cookie.style.width = '180px';
        } else {
            cookie.style.width = '200px';
        }

        // Если включена оценка скорости клика
        if (lastClickTime !== null) {
            const currentTime = new Date();
            const timeDiff = (currentTime - lastClickTime) / 1000; // время в секундах
            const clickSpeed = (1 / timeDiff).toFixed(2);
            speedDisplay.textContent = ` Скорость клика: ${clickSpeed} клика/сек`;
        }
        lastClickTime = new Date();
    };
});