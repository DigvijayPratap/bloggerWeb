// setting postion of body below navbar
const navbar=document.getElementById('nav')
let bound=navbar.getBoundingClientRect();
let container=document.getElementById('container');
container.style.marginTop=bound.bottom+'px';
//end//////////////////////////////////////////
//////////////show hide navbar////////////////
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos ) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
////////////////////////////////////////////////////
const nptel=document.getElementById('webName');
//console.log(nptel);
nptel.addEventListener('click', stylefun);
function stylefun(){
  const pagesLinks=document.getElementsByClassName('pageLink');
  
}

