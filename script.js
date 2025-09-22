const socialEl=document.getElementById("socialEl");
const flashEl=document.getElementById("flashEl");
const listEl=document.getElementById("listEl");
const FacebookEl=document.getElementById("FacebookEl")

socialEl.addEventListener("click",()=>{
    listEl.classList.toggle("showhidden")
});
FacebookEl.addEventListener("click",()=>{
    socialEl.classList.remove("social")
    socialEl.textContent=FacebookEl.textContent
})


