// =========================CHANGE BACKGROUND COLOR============
function scrollHeader(){
    const header=document.getElementById('header')
    if(this.scrolly >=50) header.classlist.add('scroll-header');
    else
    header.classList.remove('scroll-header') 
}   
window.addEventListener('scroll',scrollHeader)

// =====================SERVICE MODAL=============================================

let modalViews =document.querySelectorAll('.service_modal'),
     modalBtns = document.querySelectorAll('.service-button'),
       modalClose=document.querySelectorAll('.services__modal-close')
  
let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        modal(i)
    })
})


modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

// ====================SWIPER TESTIMONIAL============
var swiper = new Swiper(".testimonial_container", {
    spaceBetween: 24,
    loop : true,
    grabCursor : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//=====================LIGHT THEME==========================================

let themeButton = document.getElementById('theme-button')
let lightTheme = 'light-theme'
let iconTheme = 'bx-sun'

let selectedTheme = localStorage.getItem('selected-theme')

let selectedIcon = localStorage.getItem('selected-icon')

let getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'

let getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx bx-moon ' : 'bx bx-sun'

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click' , () =>{
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)

      localStorage.setItem('selected-theme' , getCurrentTheme())
      localStorage.setItem('selected-icon' , getCurrentIcon() )
})




// =============MIXIUP FILTER PORTFOLIO================


let mixerPortfolio = mixitup('.work_container',{
    selectors: {
        target: '.work_card'
    },
    animation:{
        duration:300
    }
});

// // Link active work 
   const linkWork = document.querySelectorAll('.work_item')

   function activework(){
       linkWork.forEach(l=>l.classList.remove('.active_work'))
       this.classList.add('.active_work')
   }
linkWork.forEach(l=>l.addEventListener('click',activework))


// ====================SCROLL SECTION ACTIVE LINK==========================
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:'true',

})

sr.reveal('.home_data')

sr.reveal('.home-handle',{delay:700})

sr.reveal('.home_social, .home_scroll',{delay:900,origin:'bottom'})