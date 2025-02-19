let BTN1=document.getElementById('BTN1')
let PARA1=document.getElementById('PARA1');

BTN1.addEventListener('click',function(){
    PARA1.classList.toggle('open');
});
let BTN2=document.getElementById('BTN2')
let PARA2=document.getElementById('PARA2');

BTN2.addEventListener('click',function(){
    PARA2.classList.toggle('open');
});

let BTN3=document.getElementById('BTN3')
let PARA3=document.getElementById('PARA3');

BTN3.addEventListener('click',function(){
    PARA3.classList.toggle('open');
});
let BTN4=document.getElementById('BTN4')
let PARA4=document.getElementById('PARA4');

BTN4.addEventListener('click',function(){
    PARA4.classList.toggle('open');
});
let BTN5=document.getElementById('BTN5')
let PARA5=document.getElementById('PARA5');

BTN5.addEventListener('click',function(){
    PARA5.classList.toggle('open');
});
let BTN6=document.getElementById('BTN6')
let PARA6=document.getElementById('PARA6');

BTN6.addEventListener('click',function(){
    PARA6.classList.toggle('open');
});
let ouver=document.getElementById('m');
let fermer=document.getElementById('f');
let nav=document.getElementById('nav');

ouver.onclick=function(){
    nav.classList.remove('hide');
    fermer.classList.remove('hide');
    nav.style.transition = 'all 0.5s ease';
    fermer.style.transition = 'all 0.5s ease';
}
fermer.onclick=function(){
    nav.classList.add('hide');
    fermer.classList.add('hide');
    nav.style.transition = 'all 0.5s ease';
    fermer.style.transition = 'all 0.5s ease';
}