let welcome = document.querySelector('h1>a');
let ham = document.querySelector('.ham');
let nav = document.querySelector('nav');
let moreItem = document.querySelector('.more_item');
let itemMore = document.querySelector('.item_more');

welcome.addEventListener("click", function(){
    this.innerHTML = "Have a Good Time!";
});

ham.addEventListener('click', function() {
    if (nav.style.right == '0') {
        this.style.right = '0';
        nav.style.right = '-290px';
    } else if(nav.style.right == '0'||nav.style.right == '-290px'){
        this.style.right = '290px';
        nav.style.right = '0';
    } else{
        this.style.right = '0';
        nav.style.right = '-290px';
    }
});

moreItem.addEventListener('click', function() {
        itemMore.style.display = 'block';
        moreItem.style.display = 'none';
});

