
const SECTIONS          = document.querySelectorAll( '.section' ),
      aboutUsLink       = document.querySelector( '.aboutUsLink' ),
      latestNewsLink    = document.querySelector( '.latestNewsLink' ),
      galleryLink       = document.querySelector( '.galleryLink' ),
      navigationLink    = document.querySelector( '.navigationLink' )
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .6
  }
function handler(myelment, observer){
  
    
    myelment.forEach(function(isElemt){
        let target = isElemt.target.classList
        
       
        
        if( target.contains('aboutUs')) {
            aboutUsLink.classList.add('nav__menu_item-active')
        } else {    
            aboutUsLink.classList.remove('nav__menu_item-active')
        }
        

        if(target.contains('latestNews')){
            latestNewsLink.classList.add('nav__menu_item-active')
        } else {    
            latestNewsLink.classList.remove('nav__menu_item-active')
        }


        if(target.contains('gallery')){
            galleryLink.classList.add('nav__menu_item-active')
        } else {    
            galleryLink.classList.remove('nav__menu_item-active')
        }


        if(target.contains('navigation')){
            navigationLink.classList.add('nav__menu_item-active')
        } else {    
            navigationLink.classList.remove('nav__menu_item-active')
        }
          
              
           
                
            
        
        
      
        
      
       
        
    
            
      })
}

let observer = new IntersectionObserver(handler, options)

SECTIONS.forEach(function(el){observer.observe(el)}  )