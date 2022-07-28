function removeNotice() {
      document.getElementById("topBar").remove();
}


function changeIcon(from, to) {
      const icon = document.querySelector('#icon')
      icon.addEventListener('click', (e) => {
            const themeText = document.querySelector('.themeText')
            themeText.textContent === 'Dark' ?
                  themeText.textContent = 'Light' :
                  themeText.textContent = 'Dark'


            let iconClass = e.currentTarget.children[1].children[1].children[0];
            iconClass.getAttribute('href') === from ?
                  iconClass.setAttribute('href', to) :
                  iconClass.setAttribute('href', from);

      })
}
changeIcon('#moon', '#sun')



