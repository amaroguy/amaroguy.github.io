const navToggle = document.getElementById('nav-toggle')
const navButtons = document.getElementById('nav-buttons')
let navOpen = false

navToggle.addEventListener('click', () => {
    
    if(!navOpen){
        navButtons.style.transform = "translateX(0%)"
        navOpen = true
    } else {
        navButtons.style.transform = "translateX(100%)"
        navOpen = false
    }
})


window.addEventListener('resize', (e) => {
    if(window.innerWidth >= 930){
        navButtons.style.transform = "translateX(0%)"
        navOpen = false;
    } else if (!navOpen) {
        navButtons.style.transform = "translateX(100%)"
    }
} )