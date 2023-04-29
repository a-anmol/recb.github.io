let baseColor = "rgb(255, 60, 60)"

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



let typed= new Typed('.writing',{
      strings:[ 'Rajkiya Engineering College, Bijnor' , 'राजकीय इंजीनियरिंग कॉलेज, बिजनौर'],
      typeSpeed: 70,
      backSpeed: 40,
      smartBackspace: true,
      backDelay: 70,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
})


const nav = document.querySelector(".navBar");
const topNav = document.querySelector(".topNav");
let lstscrollY =  window.scrollY;

window.addEventListener("scroll", ()=>{
      if(lstscrollY<window.scrollY){
            console.log("hi")
      }
      else{
            console.log("by")
      }

      lstscrollY=window.scrollY;
      if(lstscrollY>=topNav.scrollHeight){
            nav.style.background= baseColor;
            nav.children[0].children[0].children[0].children[0].classList.add("navLogoScroll");
      }
      else{
            nav.style.background= "none";
            nav.style.transition="all 0.08s"
            nav.children[0].children[0].children[0].children[0].classList.remove("navLogoScroll");
      }
})
console.log(nav.children[0].children[0].children[0].children[0])


	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll', function() {
		$('.bw2ckk').each(function() {
			if ($(this).isInViewport()) {
				$('.bottom-img').addClass('color');
			} else {
				$('.bottom-img').removeClass('color');
			}
		});
	});