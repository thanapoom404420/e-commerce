const ope = document.querySelectorAll('#operator');
const updateText = document.getElementById('update-text');
const cartText =document.getElementById('cart-text');
const add = document.getElementById('add-to-cart');
const update = document.querySelector('.update');
const img = document.getElementById('change');
const cart = document.getElementById('show-cart');
const boxCart = document.querySelector('.box-cart');
const box = document.querySelector('.text');
const textCart = document.querySelector('.text-cart');
const imgCart = document.querySelector('.img-cart');
const previewImg = document.querySelectorAll('.preview-img');
const currentText = document.getElementById('current-text');
const hidden = document.querySelector('.hidden-box');
const cartBox = document.querySelector('.cart');
const navHidden = document.getElementById('ham');


cart.addEventListener('click', function() {
    boxCart.style.display = (boxCart.style.display === 'none' || boxCart.style.display === '') ? 'block' : 'none';
});

ope.forEach(function(e){
    e.addEventListener('click',function(){
        if(e.textContent === '+') {
        var x = updateText.textContent;
        var num = parseInt(x);
        var newNum = num + 1; 
        updateText.textContent = newNum;
        }
        if(e.textContent === "-") {
            var x = updateText.textContent;
            var num = parseInt(x);
            var newNum = num - 1; 
            updateText.textContent = newNum;
            if(updateText.textContent === '0') {
                var newNum = num - 0; 
                updateText.textContent = newNum;
            }
        }
    })
});

add.addEventListener('click',function(){
    update.style.display = 'flex'
    let x = parseInt(update.textContent) + parseInt(updateText.textContent);
    update.textContent = x;
    currentText.textContent = x;
    if(update.textContent !== '0') {
        box.style.display = 'none'
        hidden.style.display = 'flex';
    }
});

function changeImg(myImg){
    let userSelectImg = myImg + ".jpg";
    img.src = userSelectImg;
    imgCart.src = userSelectImg;
}

function toggleNav(){
    navHidden.style.display = 'flex';
    navHidden.style.zIndex = '1';
    navHidden.style.opacity = '100%';
    document.documentElement.style.filter = 'black';
}
function hideNav(){
    navHidden.style.display = 'none';
    document.documentElement.style.opacity = '100%';
}

