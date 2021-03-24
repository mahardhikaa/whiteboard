//Ambil canvas
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let paint = false;

//Ambil color
let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');

//Ambil Slider
let slider = document.getElementById('lineSize');

canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-10; 

//Saat window berubah ukuran
window.addEventListener('resize', function(e){
    canvas.width = window.innerWidth-10;
    canvas.height = window.innerHeight-10; 
});

//pas ditekan mouse
canvas.addEventListener('mousedown', function(){
    paint = true;
})


//pas mouse dilepas
canvas.addEventListener('mouseup', function(){
    paint = false;
    ctx.beginPath();
})


//pas mouse digerakkan cek apakah sedang ditekan atau tidak
canvas.addEventListener('mousemove', function(e){
    if(paint){
        ctx.lineWidth = slider.value;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
})


//Program warna
black.addEventListener('click', function(){
    black.style.boxShadow = '0 0 0 3px black';
    red.style.boxShadow = 'none';
    blue.style.boxShadow = 'none';
    green.style.boxShadow = 'none';
    ctx.strokeStyle = 'black';
})

red.addEventListener('click', function(){
    black.style.boxShadow = 'none';
    red.style.boxShadow = '0 0 0 3px black';
    blue.style.boxShadow = 'none';
    green.style.boxShadow = 'none';
    ctx.strokeStyle = 'red';
})

blue.addEventListener('click', function(){
    black.style.boxShadow = 'none';
    red.style.boxShadow = 'none';
    blue.style.boxShadow = '0 0 0 3px black';
    green.style.boxShadow = 'none';
    ctx.strokeStyle = 'blue';
})

green.addEventListener('click', function(){
    black.style.boxShadow = 'none';
    red.style.boxShadow = 'none';
    blue.style.boxShadow = 'none';
    green.style.boxShadow = '0 0 0 3px black';
    ctx.strokeStyle = 'green';
})