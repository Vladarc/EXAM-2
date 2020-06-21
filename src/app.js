



let  isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
let map,marker,geocoder,infowindow;



function getGeocode(value) {
  if(value.trim() == 'Hong Kong - 1588 Feet'){
     value = value.slice(0,value.indexOf('-'))
  }
  geocoder.geocode( {'address': value},function(result,status){
    if(status == 'OK'){
      map.setCenter(result[0].geometry.location);
      marker.setPosition(result[0].geometry.location)
      marker.setTitle(value);
      infowindow.setContent(value)
    }
  } )

 }


function initMap() {
    geocoder  = new google.maps.Geocoder()

    let lat   =  40.671094,
        lng   =  -73.909877,
        icon  = {
          url        : 'img/marker.png',
          scaledSize : new google.maps.Size(80, 80),
          origin     : new google.maps.Point(0,0), 
          anchor     : new google.maps.Point(0, 0) 
        }
        

        
  map = new google.maps.Map(document.getElementById("map"), {
    center  : { lat:lat , lng:lng  },
    zoom    : 13,
    styles  : styles , 
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
  },
  streetViewControlOptions: {
    position: google.maps.ControlPosition.LEFT_TOP
 },
  });

  marker = new google.maps.Marker({
    map       : map,
    position  : { lat:lat, lng:lat}, 
    icon      : icon ,
  

   });     
   getGeocode('Brooklyn,Brownsville')
   
   
  infowindow = new google.maps.InfoWindow();
    

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
 
}


document.addEventListener( 'scroll', function(e) {
  if(window.pageYOffset > 400){
   document.querySelector( '.nav' ).classList.add('nav--active-bg')
  }else {
   document.querySelector( '.nav' ).classList.remove('nav--active-bg')
  }
  
  
} )

const BODY = document.body;

function toggler(e) {
    e.preventDefault();
    BODY.classList.toggle('opened');
}

function addListenerForMobileMenuLinks(){
 const navMenu = document.querySelector('.nav__menu');
    if(window.innerWidth <= 992) {
        navMenu.addEventListener('click',function(event) {
            let cureLink = event.target.classList.contains('nav__menu_link');
                cureLink ? BODY.classList.remove('opened') : null;
        });
    }
}
window.addEventListener('resize',addListenerForMobileMenuLinks);
addListenerForMobileMenuLinks();
  




  




















