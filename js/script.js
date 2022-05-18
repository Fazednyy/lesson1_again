let text = document.getElementById('text');
let buts = document.getElementsByName('bt');
for (let i = 0; i < buts.length; i++) {
buts[i].onclick = function () {
let locStor = this.value;
localStorage.setItem('textKey', locStor);
document.body.style.backgroundColor = this.value;
}
} ;
window.onload = function () {
let locVal = localStorage.getItem('textKey');
document.body.style.backgroundColor = locVal;
}

