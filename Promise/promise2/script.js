h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        let prob = Math.random();
        if(prob > 0.5){
            setTimeout(() => {
                h1.style.color = color;
                resolve();
            }, delay);
        }
        else {
            reject(`error: the probability is not sufficient to change the color: ${prob}`);
        }
    });
}

changeColor("red", 1000)
    .then((result) => {
        return changeColor("blue", 1000);
    })
    .then((result) => {
        return changeColor("green", 1000);
    })
    .then((result) => {
        return changeColor("yellow", 1000);
    })
    .then((result) => {
        return changeColor("pink", 1000);
    })
    .then((result) => {
        return changeColor("purple", 1000);
    })
    .catch((error) => {
        console.log(error);
    });