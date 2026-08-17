const menu=document.querySelector('.menu');
const nav=document.querySelector('.topbar nav');
if(menu && nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('.dropdown .dropbtn').forEach(btn=>{
  btn.addEventListener('click',e=>{
    e.preventDefault();
    btn.parentElement.classList.toggle('open');
  });
});

document.querySelectorAll('.topbar nav a').forEach(link=>{
  link.addEventListener('click',()=>nav?.classList.remove('open'));
});
