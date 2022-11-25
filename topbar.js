function removeNotice() {
      document.getElementById("topBar").remove();
}


// function changeIcon(from, to) {
//       const icon = document.querySelector('#icon')
//       icon.addEventListener('click', (e) => {
//             const themeText = document.querySelector('.themeText')
//             themeText.textContent === 'Dark' ?
//                   themeText.textContent = 'Light' :
//                   themeText.textContent = 'Dark'


//             let iconClass = e.currentTarget.children[1].children[1].children[0];
//             iconClass.getAttribute('href') === from ?
//                   iconClass.setAttribute('href', to) :
//                   iconClass.setAttribute('href', from);

//       })
// }
// changeIcon('#moon', '#sun')



const themeText = document.querySelector('.themeText')
//             themeText.textContent === 'Dark' ?
//                   themeText.textContent = 'Light' :
//                   themeText.textContent = 'Dark'
const darkTheme ="darkTheme";
const icon = document.querySelector("#icon");

const selectedTheme=localStorage.getItem("selectedTheme");


const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?"dark":"light";
const getCurrentIcon=()=>document.body.classList.contains(darkTheme)?"#moon":"#sun";

if(selectedTheme){
      document.body.classList[selectedTheme==="dark"?'add':'remove'](darkTheme)
      icon.children[1].children[1].children[0].setAttribute("href",[selectedTheme==="dark"?'#moon':'#sun']);
      
}


icon.addEventListener("click",()=>{
      document.body.classList.toggle(darkTheme);
      icon.children[1].children[1].children[0].getAttribute("href")==="#moon"?
            icon.children[1].children[1].children[0].setAttribute("href",'#sun'):
            icon.children[1].children[1].children[0].setAttribute("href",'#moon');
      localStorage.setItem("selectedTheme",getCurrentTheme())
      themeText.textContent === 'Dark' ?
            themeText.textContent = 'Light' :
            themeText.textContent = 'Dark'

})


const closePrompt=document.querySelector(".closePrompt");
const blurArea=document.querySelector(".blurArea");
const promptMessage=document.querySelector(".promptMessage");

closePrompt.addEventListener("click",()=>{
      blurArea.remove();
      promptMessage.remove();
})