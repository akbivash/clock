const secondTick = document.querySelector('.sec')
const minuteTick = document.querySelector('.min')
const hourTick = document.querySelector('.hour')

setInterval(setTime, 1000)

function setTime() {
    let curDate = new Date()
    let seconds = curDate.getSeconds() / 60
    let minutes = (seconds + curDate.getMinutes()) / 60
    let hours = (minutes + curDate.getHours()) / 12
    setRotation(secondTick, seconds)
    setRotation(minuteTick, minutes)
    setRotation(hourTick, hours)
}


function setRotation(el, time) {
    el.style.transform = `rotate(${time * 360}deg)`
}