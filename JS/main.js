const menuIcon = document.getElementById('icon');
const wrongIcon = document.getElementById('wrong');
const navBar = document.getElementById('navBar');


menuIcon.addEventListener('click', () => {
    navBar.style.display = 'block';
})

wrongIcon.addEventListener('click', () => {
    navBar.style.display = 'none';
})