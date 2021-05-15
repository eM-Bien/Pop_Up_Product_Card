const productName = document.querySelector('.product-name')
productName.innerHTML = productInfo.product.name

const sizeU = document.querySelector('.size-1')
sizeU.innerHTML = productInfo.sizes.items.U.name

const sizeV = document.querySelector('.size-2')
sizeV.innerHTML = productInfo.sizes.items.V.name

const sizeW = document.querySelector('.size-3')
sizeW.innerHTML = productInfo.sizes.items.W.name

// POP-UP OPEN & CLOSE

const btnClick = document.querySelector('.trigger');
const closeIcon = document.querySelector('.fa-times');
const popup = document.querySelector('.pop-up');

btnClick.addEventListener('click', function(){
    popup.classList.toggle('hide');
    btnClick.classList.toggle('hide');

    if (popup.classList.contains('hide')) {
        btnClick.classList.remove('hide');

    } else {
        popup.classList.remove('hide');
        popup.classList.add('animate__bounceInDown');
        btnClick.classList.add('hide');

    };
});

closeIcon.addEventListener('click', function(){
    popup.classList.toggle('hide');
    btnClick.classList.toggle('hide');

    if (btnClick.classList.contains('hide')){
        popup.classList.remove('hide');
        btnClick.classList.add('hide');

    } else {
        btnClick.classList.remove('hide');
        popup.classList.remove('animate__bounceInDown');
        popup.classList.add('hide');
    }
})

// INCREACE & DECREASE QUANTITY

const increase = document.querySelector('.btn-increase');
const decrease = document.querySelector('.btn-decrease');
const quantity = document.querySelector('.p-number');

let i = 1;

increase.addEventListener('click', function(){
    quantity.innerHTML = i++;

    if (i > 0) {
        decrease.style.visibility = 'visible'
    };
})

decrease.addEventListener('click', function(){
    quantity.innerHTML = i--;

    if (i <= 0) {
        quantity.innerHTML = 0
        decrease.style.visibility = 'hidden'
    };

})

// SIZE

const sizeSmall = document.querySelector('.size-1');
const sizeMedium = document.querySelector('.size-2');
const sizeLarge = document.querySelector('.size-3');
const available = document.querySelector('.status-available');
const unavailable = document.querySelector('.status-unavailable');
const price = document.querySelector('.price');

sizeSmall.addEventListener('click', function(){
    sizeSmall.classList.add('active');
    sizeMedium.classList.remove('active');
    sizeLarge.classList.remove('active');

    if (sizeSmall.classList.contains('active')){
        available.classList.remove('hide');
        unavailable.classList.add('hide');
        price.innerHTML = productInfo.sizes.items.U.price + ',00 zł'
    }
})


sizeMedium.addEventListener('click', function(){
    sizeMedium.classList.add('active');
    sizeSmall.classList.remove('active');
    sizeLarge.classList.remove('active');

    if (sizeMedium.classList.contains('active')){
        available.classList.remove('hide');
        unavailable.classList.add('hide');
        price.innerHTML = productInfo.sizes.items.V.price + ',00 zł'
    }
})

sizeLarge.addEventListener('click', function(){
    sizeLarge.classList.add('active');
    sizeSmall.classList.remove('active');
    sizeMedium.classList.remove('active');

    if (sizeLarge.classList.contains('active')){
        unavailable.classList.remove('hide');
        available.classList.add('hide');
        price.innerHTML = productInfo.sizes.items.W.price + ',00 zł'
    }
})

// BUY

const buy = document.querySelector('.buy');

buy.addEventListener('click', function (){
    buy.innerHTML = 'Dodano do koszyka!';
    buy.style.background = '#333';
})

// COLOR VARIANT

const colorGeneral = document.querySelector('.color-container');
const colorList = document.querySelector('.color-list');
const colorActive = document.querySelector('.p-color');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');

colorGeneral.addEventListener('click', function(){
    colorList.classList.toggle('hide');
})

color1.addEventListener('click', function(){
    color1.classList.toggle('active');

    if (color1.classList.contains('active')){
        colorList.classList.add('hide');
        colorActive.innerHTML = 'Srebrny';

    }
})

color2.addEventListener('click', function(){
    color2.classList.toggle('active');

    if (color2.classList.contains('active')){
        colorList.classList.add('hide');
        colorActive.innerHTML = 'Czarny';

    }
})

color3.addEventListener('click', function(){
    color3.classList.toggle('active');

    if (color3.classList.contains('active')){
        colorList.classList.add('hide');
        colorActive.innerHTML = 'Biały';

    }
})

// SLIDER

const arrLeft = document.querySelector('.fa-chevron-left');
const arrRight = document.querySelector('.fa-chevron-right');
const photos = document.querySelectorAll('.photo-all');
const totalPhotos = photos.length;
let index = 0;

arrRight.onclick = function(){
    next("next");
}

arrLeft.onclick = function(){
    next("next");
}

function next (direction) {

    if (direction == "next"){
        index ++;
        if (index == totalPhotos){
            index = 0;
        }
    }

    for (i = 0; i < photos.length; i++) {
        photos[i].classList.remove('active')
    }

    photos[index].classList.add('active');
};



