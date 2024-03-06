const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

const slider = document.querySelector('.slider-about')

var sectionIndex = 0;

function reset(){
    for (var i = 0; i < slider.children.length; i ++){
        slider.children[i].style.opacity = 0;
        slider.children[i].style.zIndex = 0;
    }
}

next.addEventListener('click', function(){
    reset()
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});

prev.addEventListener('click', function(){
    reset()
    sectionIndex = sectionIndex > 0? sectionIndex - 1 : 0;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});