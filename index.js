const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.body.style.background = 'rgba(0, 0, 0, 0.2)';
    }, 300)
    

})

closeIcon.addEventListener('click', () => {
    navList.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.body.style.background = 'white';
})