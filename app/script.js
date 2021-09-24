const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

const open = () => {
    hamburger.classList.add('opened')
    nav.classList.add('list')
}

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('opened')) {
        hamburger.classList.remove('opened')
        nav.classList.remove('list')
    } else {
        hamburger.classList.add('opened')
        nav.classList.add('list')
        }

})