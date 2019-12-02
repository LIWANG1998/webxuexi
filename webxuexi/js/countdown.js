// (function () {
let timers = [...document.querySelectorAll('.times')];
let timer = null;
_daojishi();
function _daojishi() {
    timer = setInterval(function () {
        let _cutime = new Date();//当前时间
        let _newtime = new Date(2020, 0, 25);//
        let ta = _newtime - _cutime;
        let shi = 3600 * 1000;
        let feng = 60 * 1000;
        let miao = 1000;
        let tian = 24 * 3600 * 1000;
        let _cutDays = Math.floor(ta / tian).toString();
        timers[0].innerHTML = _cutDays;
        let _cutHours = Math.floor(ta % tian / shi).toString().padStart(2, '0');
        timers[1].innerHTML = _cutHours;
        let _cutMinutes = Math.floor(ta % shi / feng).toString().padStart(2, '0');
        timers[2].innerHTML = _cutMinutes;
        let _cutSeconds = Math.floor(ta % feng / miao).toString().padStart(2, '0');
        timers[3].innerHTML = _cutSeconds;
    }, 1000)

}
function stop() {
    clearInterval(timer);
}
// setInterval(_daojishi, 1000);
