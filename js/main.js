var imgs =Array.from(document.querySelectorAll(".img-item"));
var lightBoxContainer = document.getElementById("lightbox-container");
var lightBoxItem = document.getElementById("lightbox-item");
var closeIcon = document.getElementById("close");
var prevIcon = document.getElementById("prev");
var nextIcon = document.getElementById("next");
var currentIndex = 0;

for(var i=0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click",function(e){
        lightBoxContainer.style.display="flex";
        var imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
        currentIndex=imgs.indexOf(e.target);
    })
}

closeIcon.addEventListener("click",closeSlider);
function closeSlider(){
    lightBoxContainer.style.display="none";
}

nextIcon.addEventListener("click",nextSlider);
function nextSlider(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}

prevIcon.addEventListener("click",prevSlider);
function prevSlider(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}

document.addEventListener("keydown",function(e){
    if(e.key=="Escape"){
        closeSlider()
    }
    else if(e.key=="ArrowRight"){
        nextSlider()
    }
    else if(e.key=="ArrowLeft"){
        prevSlider()
    }
})

lightBoxContainer.addEventListener("click",function(e){
    if(e.target != lightBoxItem && e.target != nextIcon && e.target != prevIcon){
        closeSlider();
    }
})