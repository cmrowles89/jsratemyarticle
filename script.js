//I pulled the thumbs up and thumbs down from DOM using their class and created a variable
let thumbsup = document.querySelector('.thumbsup')
let thumbsdown = document.querySelector('.thumbsdown')
//let span = document.querySelector('span')
let likesBtn = document.querySelector('.likes')
let dislikesBtn = document.querySelector('.dislikes')
//let span = document.getElementByTagName('span')

thumbsup.addEventListener('click', function (){
//console.log('test') -This is to check if my click function is working
likesBtn.value = parseInt(likesBtn.value) + 1;
});
//alert('This test was successful') - This is to test if the alert was working

thumbsdown.addEventListener('click', () =>{
//console.log('test')
dislikesBtn.value = parseInt(dislikesBtn.value) + 1;
});