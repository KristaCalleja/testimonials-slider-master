const nextSlideBtn = document.getElementById('next');
const prevSlideBtn = document.getElementById('prev');
const textBox = document.querySelector('.text');

function loadNextSlide(){
    console.log('clicked button');
    // while(textBox.firstChild) textBox.removeChild(textBox.firstChild);
    // textBox.appendChild(document.createTextNode('If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer'));
}
nextSlideBtn.addEventListener('click', loadNextSlide);
prevSlideBtn.addEventListener('click', loadNextSlide);