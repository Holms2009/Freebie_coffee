'use strict'

// Shop slider:

let storeBlock = document.querySelector('.coffee_store_block')
let btnRight = storeBlock.querySelector('.btn_right');
let btnLeft = storeBlock.querySelector('.btn_left');
let shopCards = storeBlock.querySelectorAll('.coffee_card');
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

let images = [
    'img/giftset_1.png',
    'img/giftset_2.png',
    'img/giftset_3.png'
]

let giftCard = document.querySelector('.gift_card');
let buttons = giftCard.querySelectorAll('button');
let cards = giftCard.querySelectorAll('.gift_card_content');
let currentImage = giftCard.querySelector('img');

for (let i = 0; i < buttons.length; i++) {
    addListenerForButton(buttons[i], images[i], cards[i]);
}

function addListenerForButton(button, image, card) {
    button.addEventListener('click', function () {

        for (let btn of buttons) {
            btn.classList.remove('selector_btn_active');
        }

        button.classList.add('selector_btn_active');

        for (let card of cards) {
            card.classList.add('hidden_gift');
        }

        card.classList.remove('hidden_gift');
        currentImage.src = image;        
    })
}

// Combos slider:

let combosBlock = document.querySelector('.coffee_combos')
let comboBtnRight = combosBlock.querySelector('.btn_right');
let comboBtnLeft = combosBlock.querySelector('.btn_left');
let shopBigCards = combosBlock.querySelectorAll('.coffee_big_card');
let comboSliderPosition = 0;
let comboRightOpacity = 3;
let comboLeftOpacity = -1;

{
    shopBigCards[comboRightOpacity].style.opacity = 0.5;
    shopBigCards[comboRightOpacity + 1].style.opacity = 0.5;
}

comboBtnRight.addEventListener('click', function () {
    comboSliderPosition -= 390;

    {
        comboLeftOpacity += 1;
        shopBigCards[comboLeftOpacity].style.opacity = 0.5;

        shopBigCards[comboRightOpacity].style.opacity = 1;

        comboRightOpacity += 1;
        if (comboRightOpacity < shopBigCards.length - 1) {
            shopBigCards[comboRightOpacity + 1].style.opacity = 0.5;
        }
    }

    if (comboSliderPosition < 0) comboBtnLeft.classList.remove('slider_btn_hide');
    if (-((shopBigCards.length - 3) * 390) === comboSliderPosition) comboBtnRight.classList.add('slider_btn_hide');

    for (let card of shopBigCards) {
        card.style.left = comboSliderPosition + 'px';
    };

});

comboBtnLeft.addEventListener('click', function () {
    comboSliderPosition += 390;

    {
        shopBigCards[comboLeftOpacity].style.opacity = 1;
        comboLeftOpacity -= 1;

        comboRightOpacity -= 1;
        shopBigCards[comboRightOpacity].style.opacity = 0.5;
    }

    if (comboSliderPosition === 0) comboBtnLeft.classList.add('slider_btn_hide');
    if (-((shopBigCards.length - 3) * 390) < comboSliderPosition) comboBtnRight.classList.remove('slider_btn_hide');

    for (let card of shopBigCards) {
        card.style.left = comboSliderPosition + 'px';
    };

});