let timerID;
let flag = false;
const speed = 55;

function scroll() {
    window.scrollBy(0, 1);
}

function scrollSpeed() {
    const obj = document.scroll_change.scroll;
    const index = obj.selectedIndex;

    switch (index) {
        case 0:
            speed = 1;
            break;

        case 1:
            speed = 10;
            break;

        case 2:
            speed = 20;
            break;

        case 3:
            speed = 25;
            break;

        case 4:
            speed = 30;
            break;

        case 5:
            speed = 35;
            break;

        case 6:
            speed = 40;
            break;

        case 7:
            speed = 45;
            break;

        case 8:
            speed = 50;
            break;

        case 9:
            speed = 55;
            break;

        case 10:
            speed = 60;
            break;

        case 11:
            speed = 65;
            break;

        case 12:
            speed = 70;
            break;

        case 13:
            speed = 75;
            break;

        case 14:
            speed = 80;
            break;

        case 15:
            speed = 85;
            break;

        case 16:
            speed = 90;
            break;

        case 17:
            speed = 95;
            break;

        case 18:
            speed = 100;
            break;

        case 19:
            speed = 110;
            break;
    }

    autoscroll();
}

function autoscroll() {
    if (flag == false) {
        timerID = setInterval("scroll()", speed);
        flag = true;
    } else {
        clearInterval(timerID);
        flag = false;
    }
}
