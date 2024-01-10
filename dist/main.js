/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/playing-area/playing-area.js
class PlayingArea {
  // определяем класс PlayingArea, который дальше будем экспортировать по умолчанию
  constructor(element) {
    this._element = element;
  }
  randomMovingGoblin() {
    const goblinImg = document.createElement('img'); // создадим новый элемент img
    goblinImg.classList.add('playing-area__img'); // для него добавим класс playing-area__img
    goblinImg.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png'; // установим источник изображения с помощью свойства src

    const playingItemsCollection = document.querySelectorAll('.playing-area__item'); // найдем коллецию элементов с классом .playing-area__item

    for (const playingItem of playingItemsCollection) {
      // Если у элемента есть первый дочерний элемент, то он удаляется с помощью метода remove
      if (playingItem.firstElementChild) {
        playingItem.firstElementChild.remove();
      }
    }
    const randomPlayingItem = Math.floor(Math.random() * playingItemsCollection.length); // генерируем случайный элемент из коллекции playingItemsCollection, для того чтоб гоблин 
    // появлялся в различных местах на игровом поле

    playingItemsCollection[randomPlayingItem].append(goblinImg); // отображаем гоблина на игровом поле, посредством добавления этого элемента в качестве последнего 
    // дочернего в выбранной коллекции playingItemsCollection
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const playingArea = new PlayingArea(document.querySelector('.playing-area'));
  setInterval(playingArea.randomMovingGoblin, 1000);
});
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;