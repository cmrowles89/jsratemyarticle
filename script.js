
const thumbsupBtn = document.querySelector('.thumbsup')
const thumbsdownBtn = document.querySelector('.thumbsdown')
const likesBtn = document.querySelector('.likes')
const dislikesBtn = document.querySelector('.dislikes')


thumbsupBtn.addEventListener('click',() =>{
likesBtn.innerText = parseInt(likesBtn.innerText) + 1;
});

thumbsdownBtn.addEventListener('click', () =>{
dislikesBtn.innerText = parseInt(dislikesBtn.innerText) + 1;
});