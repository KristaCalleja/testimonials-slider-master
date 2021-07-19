// Create an Object using Object Literal Syntax
const firstSlide = {
    paragraph: `" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`,
    name: "Tanya Sinclair",
    label: "UX Engineer",
}
const secondSlide = {
    paragraph: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
    name: "John Tarkpor",
    label: "Junior Front-End Developer", 
}
// Select elements
const imgElement = document.getElementById('profile-img');
const paragraphElement = document.getElementById('text-box');
const nameElement = document.getElementById('name');
const labelElement = document.getElementById('label');
// Select buttons for event handling
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
function loadFirstSlide(){
    imgElement.src = "images/image-tanya.jpg";
    paragraphElement.innerText = `${firstSlide.paragraph}`;
    nameElement.innerText = `${firstSlide.name}`;
    labelElement.innerText = `${firstSlide.label}`;
}
function loadSecondSlide(){
    imgElement.src = "images/image-john.jpg";
    paragraphElement.innerText = `${secondSlide.paragraph}`;
    nameElement.innerText = `${secondSlide.name}`;
    labelElement.innerText = `${secondSlide.label}`;
}
// Set default load
window.onload = loadFirstSlide;
// Set event handlers on controls
previousBtn.addEventListener('click', loadFirstSlide);
nextBtn.addEventListener('click', loadSecondSlide);