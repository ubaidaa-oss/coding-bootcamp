let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let desc = document.querySelector('.desc');
let perImg = document.querySelector('.perImg');
let n = document.querySelector('.n');
let j = document.querySelector('.j');


next.addEventListener('click', () => {
    desc.innerText = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident aboutstarting up as a professional developer. ”'
    perImg.src = 'assets/images/image-john.jpg'
    n.innerText = 'John Tarkpor' 
    j.innerText = 'Junior Front-end Developer ' 
})
prev.addEventListener('click', () => {
    desc.innerText = ' “ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    perImg.src = 'assets/images/image-tanya.jpg'
    n.innerText = 'Tanya Sinclair' 
    j.innerText = 'UX Engineer' 
})