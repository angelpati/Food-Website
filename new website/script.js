let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header .navbar a');
window.onscroll=() =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach(sec=>{
        let top=window.scrollY;
        let height= sec.offsetHeight;
        let offset=sec.offsetTop-150;
        let id=sec.getAttribute('id');

        if(top=> offset && top<offest+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
            })

        }
    })
}
document.querySelector('#search-icon').onclick=() =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick=() =>{
    document.querySelector('#search-form').classList.remove('active');
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeOut(){
    setInterval(loader, 3000);
}
window.onload=fadeOut;
