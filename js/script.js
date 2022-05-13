let black = document.getElementById('black');
let white = document.getElementById('white');
let gray = document.getElementById('gray'); 
let p = document.getElementById('text');

let fn = black.onclick = function(){
    p.style.color = 'white';
    document.body.style.background = 'black';
}
let fn2 = white.onclick = function(){
    p.style.color = 'black'
    document.body.style.background = 'white';
}
let fn3 = gray.onclick = function(){
    p.style.color = 'white'
    document.body.style.background = 'gray';
}

localStorage.setItem('Color1', JSON.stringify(fn))
localStorage.setItem('Color1', JSON.stringify(fn2))
localStorage.setItem('Color1', JSON.stringify(fn3))
// localStorage.setItem('Color1')