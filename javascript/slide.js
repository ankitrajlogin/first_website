
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


para.style.diplay = 'none' ; 
        
function toggleHide(){
    let para = document.getElementById('para_toggle'); 
    if(para.style.display != 'none'){
        para.style.display = 'none';


        document.getElementById("change").innerHTML="Read More" ;    
    }
    else{
        para.style.display = 'block';

        document.getElementById("change").innerHTML="Read Less" ;    
    }
  }