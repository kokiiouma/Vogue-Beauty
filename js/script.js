const menu = document.getElementById('lista');
const bar = document.getElementById('bar');

bar.addEventListener('click', function() {
    menu.classList.toggle('active');
});