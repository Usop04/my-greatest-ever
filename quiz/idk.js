const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'lightgreen';
    btn.style.boxShadow = '0 0 40px lightgreen';
    btn.style.transition = '5s ease';
}); 
const gresit = document.querySelector('.gresit');

gresit.addEventListener('click', () => {
    var style = gresit.style;
    style.backgroundColor = 'red';
    style.boxShadow = '0 0 40px red';
    style.transition = '5s ease';
    style.color = 'darkred'
    style.textShadow = '2px 2px 20px blue'
}); 
const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'red';
    btn1.style.boxShadow = '0 0 40px red';
    btn1.style.transition = '5s ease';
    btn1.style.color = 'darkred'
}); 
