// load - когда загрузится абсолютно ВСЁ, 
// но нам как правило нужно только DOM дерево - DOMContentLoaded
window.addEventListener('DOMContentLoaded', function () {
    'ust strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function (event) {

        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {

            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {

                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer
    let deadLine = '2020-05-02';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            hours = Math.floor(t / (1000 * 60 * 60)),
            minutes = Math.floor(((t / 1000) / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        if (Date.parse(deadLine) < Date.parse(new Date())) {
            minutes = '00';
            hours = '00';
            seconds = '00';
        }
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function setClock(id, endtime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = `0${t.hours}`.slice(-2);
            minutes.textContent = `0${t.minutes}`.slice(-2);
            seconds.textContent = `0${t.seconds}`.slice(-2);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            // TODO время прошло, результат -

        }
    }

    setClock('timer', deadLine)

    // while (hours != 0) {
    //     if (seconds > 0)
    // };
});


/* <div class="timer-numbers" id="timer">
<span class="hours">18</span>
<span>:</span>
<span class="minutes">20</span>
<span>:</span>
<span class="seconds">11</span>
</div> */