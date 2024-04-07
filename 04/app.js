let idInterval;
let counter = 1

const runTimer = function() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);

    const stopInterval = function () {
        counter++
    
        if (counter > 5) {
            clearInterval(idInterval)
        }

    }
    stopInterval()
}


idInterval = setInterval(runTimer,5000)




