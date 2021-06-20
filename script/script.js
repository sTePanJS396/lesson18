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

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                    popup.style.display = 'block';
                    popupAnimation();
                    requestAnimationFrame(popupAnimation);
                    // popupAnimationInLibrary();
                    if (document.body.clientWidth > 786) {
                        popupLibrary.counter = popupLibrary.start;
                        requestAnimationFrame(popupAnimation);
				    } 
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
        
        const popupLibrary = {
                counter: -900,
                start: -900,
                speed: 30,
                end: -10, 
        }
        function popupAnimation() {
                popupLibrary.start > popupLibrary.end ?
                    popupLibrary.counter -= popupLibrary.speed :
                    popupLibrary.counter += popupLibrary.speed;
                popup.style.transform = `translateX(${popupLibrary.counter}px)`;
                popup.style.setProperty('background-color', 'initial');

                if (popupLibrary.start > popupLibrary.end ?
                    popupLibrary.counter > popupLibrary.end :
                    popupLibrary.counter < popupLibrary.end) {
                    requestAnimationFrame(popupAnimation);
                }
        };
       popupAnimation(); 



    //    function popupAnimationInLibrary() {
    //        popup.classList.add('animate__animated');
    //        popup.classList.add('animate__backInUp');
    //    }
    //    popupAnimationInLibrary();
       
   }
   tooglePopUp();
});
