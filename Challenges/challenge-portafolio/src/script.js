var slides_index = {"portafolio": 1};

document.addEventListener('DOMContentLoaded', function() {
    presentation(0, "portafolio", false);    
});
function presentation(n, section, modify){
    var slides = document.getElementsByClassName(section + " slide");
    var buttons = document.getElementsByClassName(section + " fa-circle");
    if(modify == true){
        slides_index[section]+=n;
        if(slides_index[section] < 0){
            slides_index[section]+= slides.length;
        } else if(slides_index[section] >=slides.length){
            slides_index[section]%=slides.length;
        }
    } else {
        slides_index[section]=n;
    }
    // Set everything blank
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        slides[i].classList.remove("visible");
        buttons[i].className = buttons[i].className.replace("fa-solid", "fa-regular");
    }
    slides[slides_index[section]].style.display = "flex";
    setTimeout(function(){
        slides[slides_index[section]].classList.add("visible");
    }, 10)
    buttons[slides_index[section]].className = buttons[slides_index[section]].className.replace("fa-regular", "fa-solid");
}
