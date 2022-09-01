
const sideBarButtons= document.querySelectorAll(".sideBarLinkItem")

sideBarButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        sideBarButtons.forEach(btn=>{
            btn.classList.remove("sideBarLinkItemActive");
        })
        button.classList.add("sideBarLinkItemActive");
    })
})