const slider = document.querySelector('.slider');
const body = document.querySelector('body');

slider.addEventListener('change', setTheme);
window.addEventListener('load', () => {
    slider.value = localStorage.getItem('prefered-theme');
    setTheme();
})

function setTheme() {
    body.className = '';
    if (slider.value === '1') {
        body.classList.add('dark-theme');
    } else if (slider.value === '2') {
        body.classList.add('light-theme');
    } else if (slider.value === '3') {
        body.classList.add('purple-theme')
    }
    localStorage.setItem('prefered-theme', slider.value);
}