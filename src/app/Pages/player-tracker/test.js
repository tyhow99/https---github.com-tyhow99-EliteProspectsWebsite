const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read More')
    {
        readtMoreBtn.innterText = 'Read Less';
    }
    else
    {
        readMoreBtn.innerText = 'Read Less';
    }
})