const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.add('active');
    setTimeout(() => {
        document.body.style.background = 'rgba(0, 0, 0, 0.2)';
    }, 300)
    

})

closeIcon.addEventListener('click', () => {
    navList.classList.remove('active');
    document.body.style.background = 'white';
})
