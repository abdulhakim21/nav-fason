const marker = document.querySelector('#indicator')
const nav = document.querySelector('nav')
const item = document.querySelectorAll('nav a')

// console.log(marker, nav, item);
nav.onclick = function () { 
    marker.classList.toggle('change');
}

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.display = 'block';
    marker.style.filter = 'hue-rotate('+ Math.random() * 360 +'deg)'
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
});

function addActiveClass() {
    item.forEach((i) => 
    i.classList.remove('active'));
    this.classList.add('active');
}

item.forEach((i) =>
i.addEventListener('click', addActiveClass))