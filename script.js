'use strict'

// Shop slider:

let btnRight = document.querySelector('.btn_right');
let btnLeft = document.querySelector('.btn_left');
let shopCards = document.querySelectorAll('.coffee_card');
let sliderPosition = 0;
let rightOpacity = 4;
let leftOpacity = -2;

{
    shopCards[rightOpacity].style.opacity = 0.5;
    shopCards[rightOpacity + 1].style.opacity = 0.5;
}

btnRight.addEventListener('click', function () {
    sliderPosition -= 589;

    {
        leftOpacity += 2;
        shopCards[leftOpacity].style.opacity = 0.5;
        shopCards[leftOpacity + 1].style.opacity = 0.5;

        shopCards[rightOpacity].style.opacity = 1;
        shopCards[rightOpacity + 1].style.opacity = 1;

        rightOpacity += 2;
        if (rightOpacity < shopCards.length - 1) {
            shopCards[rightOpacity].style.opacity = 0.5;
            shopCards[rightOpacity + 1].style.opacity = 0.5;
        }
    }

    if (sliderPosition < 0) btnLeft.classList.remove('slider_btn_hide');
    if (-(((shopCards.length - 4) * 589) / 2) === sliderPosition) btnRight.classList.add('slider_btn_hide');

    for (let card of shopCards) {
        card.style.left = sliderPosition + 'px';
    };

});

btnLeft.addEventListener('click', function () {
    sliderPosition += 589;

    {
        shopCards[leftOpacity].style.opacity = 1;
        shopCards[leftOpacity + 1].style.opacity = 1;
        leftOpacity -= 2;

        rightOpacity -= 2;
        shopCards[rightOpacity].style.opacity = 0.5;
        shopCards[rightOpacity + 1].style.opacity = 0.5;
    }

    if (sliderPosition === 0) btnLeft.classList.add('slider_btn_hide');
    if (-(((shopCards.length - 4) * 589) / 2) < sliderPosition) btnRight.classList.remove('slider_btn_hide');

    for (let card of shopCards) {
        card.style.left = sliderPosition + 'px';
    };

});

// Gift-cards toggle:

let giftCard = document.querySelector('.gift_card');