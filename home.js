let home=document.getElementById('home');
home.classList.add('green');
let service=document.getElementById('service');
let contact=document.getElementById('contacts');

home.onmousemove=function(){
    home.classList.add('green');
    service.classList.remove('green');
    contact.classList.remove('green');
    home.style.transition = 'all 1s';
    service.style.transition = 'all 1s';
    contact.style.transition = 'all 1s';
   
}
service.onmousemove=function(){
    service.classList.add('green');
    home.classList.remove('green');
    contact.classList.remove('green');
    home.style.transition = 'all 1s';
    service.style.transition = 'all 1s';
    contact.style.transition = 'all 1s';
    
}
contact.onmousemove=function(){
    contact.classList.add('green')
    home.classList.remove('green');
    service.classList.remove('green');
    home.style.transition = 'all 1s';
    service.style.transition = 'all 1s';
    contact.style.transition = 'all 1s';
}
service.onmouseleave=function(){
    home.classList.add('green');
    service.classList.remove('green');
    home.style.transition = 'all 1s';
    service.style.transition = 'all 1s';
    contact.style.transition = 'all 1s';

}
contact.onmouseleave=function(){
    home.classList.add('green');
    contact.classList.remove('green');
    home.style.transition = 'all 1s';
    service.style.transition = 'all 1s';
    contact.style.transition = 'all 1s';
    

}