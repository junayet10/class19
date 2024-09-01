let on = document.querySelector('.on');
let off = document.querySelector('.off');
let light = document.querySelector('.light');

on.addEventListener('click',function(){
    light.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});

off.addEventListener('click',function(){
    light.src = "https://www.w3schools.com/js/pic_bulboff.gif";
});



let clrBtn = document.querySelector('.clr-btn');
let clr = document.querySelector('#clr');
clrBtn.addEventListener('click', function(){
    // console.log();
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    clr.style.backgroundColor = `rgb(${red}, ${green} , ${blue})`;
});


let rangeInput = document.querySelector('.range-ip');
let rslt = document.querySelector('.rslt');


rangeInput.addEventListener('input', function(){
    
    
    rslt.innerHTML = Number(rangeInput.value);
})