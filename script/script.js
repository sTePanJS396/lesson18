window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   
//    Таймер
   function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours');
        let timerMinutes = document.querySelector('#timer-minutes');
        let timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
        }

        function addZero(event) {
            if (String(event).length === 1) { return '0' + event; } else { return String(event); }
        };

        function updateClock() {
            let timer = getTimeRemaining();
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining < 0) {
                clearInterval(thisInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        };

        updateClock();
   };
   let thisInterval = setInterval(countTimer, 1000, '20 june 2021');

//  Меню
   function toggleMenu() {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
        const popupContent = document.querySelector('.popup-content')

        function heandlerMenu() {
            menu.classList.toggle('active-menu')
        }
        btnMenu.addEventListener('click', heandlerMenu);
        closeBtn.addEventListener('click', heandlerMenu);
        menuItems.forEach((elem)=> elem.addEventListener('click', heandlerMenu))
   }
   toggleMenu();

//    Модальное окно
   function tooglePopUp() {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');
        const popupContent = document.querySelector('.popup-content')

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                    popup.style.display = 'block';
                    // popupAnimationInLibrary();
                    if (document.body.clientWidth > 786) {
                        popupAnimation();
				    } 
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
        
        const popupLibrary = {
                counter: -100,
                start: -100,
                speed: 70,
                end: 0, 
        }
        function popupAnimation() {
            popupLibrary.counter++;
            popupContent.style.transform = `translateX(${popupLibrary.counter - 12.5}%)`;
            if (popupLibrary.counter < popupLibrary.end) {
                requestAnimationFrame(popupAnimation);
            }
        };

    //    function popupAnimationInLibrary() {
    //        popup.classList.add('animate__animated');
    //        popup.classList.add('animate__backInUp');
    //    }
    //    popupAnimationInLibrary();
       
   }
   tooglePopUp();
});
