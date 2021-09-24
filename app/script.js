const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const button = document.getElementById('button');

const open = () => {
    hamburger.classList.add('opened')
    nav.classList.add('list')
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 880) {
        nav.style.display = 'none'
        hamburger.classList.remove('opened')
        nav.classList.add('list')
        button.classList.add('button')
        button.classList.remove('link')
    } else {
        nav.style.display = 'flex'
        hamburger.classList.add('opened')
        nav.classList.remove('list')
        button.classList.add('link')
        button.classList.remove('button')
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