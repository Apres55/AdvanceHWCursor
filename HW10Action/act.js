function clickForSound(el) {
    const sound = document.querySelector(`audio[data-key='${el}'`)
        if (!sound) return;
    sound.currentTime = 0;
    sound.play();
    document.querySelector(`.key[data-key='${el}'`).classList.add('playing');
}

const getKey = document.querySelectorAll('.key[data-key]');
getKey.forEach(key => {
    key.addEventListener('click', action => {
        clickForSound(action.currentTarget.dataset.key);
    });

    key.addEventListener('transitionend', action => {
        action.currentTarget.classList.remove('playing');
    });
});

window.addEventListener('keydown', (action) => {
    clickForSound(action.keyCode);
});