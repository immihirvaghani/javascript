'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtn = document.querySelectorAll('.show-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < showBtn.length; i++)
    showBtn[i].addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)