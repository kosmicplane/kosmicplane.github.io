
const menuToggle=document.getElementById("menuToggle");
const menuClose=document.getElementById("menuClose");
const menuPanel=document.getElementById("menuPanel");
const menuBackdrop=document.getElementById("menuBackdrop");
function openMenu(){menuPanel.classList.add("is-open");menuBackdrop.classList.add("is-open");menuPanel.setAttribute("aria-hidden","false");menuToggle.setAttribute("aria-expanded","true")}
function closeMenu(){menuPanel.classList.remove("is-open");menuBackdrop.classList.remove("is-open");menuPanel.setAttribute("aria-hidden","true");menuToggle.setAttribute("aria-expanded","false")}
menuToggle.addEventListener("click",openMenu);menuClose.addEventListener("click",closeMenu);menuBackdrop.addEventListener("click",closeMenu);document.querySelectorAll(".menu-panel a").forEach(link=>link.addEventListener("click",closeMenu));document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});document.getElementById("year").textContent=new Date().getFullYear();
