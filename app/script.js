const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

const open = () => {
    hamburger.classList.add('opened')
    nav.classList.add('list')
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 880) {
        nav.style.display = 'none'
        hamburger.classList.remove('opened')
        nav.classList.add('list')
    } else {
        nav.style.display = 'flex'
        hamburger.classList.add('opened')
        nav.classList.remove('list')
    }
})

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('opened')) {
        hamburger.classList.remove('opened')
        nav.classList.remove('list')
        nav.style.display = 'none'
    } else {
        hamburger.classList.add('opened')
        nav.classList.add('list')
        nav.style.display = 'flex'
        }

})