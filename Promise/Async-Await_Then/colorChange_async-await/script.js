h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        // let prob = Math.random();
        // if(prob > 0.5){
            // }
            // else {
                //     reject(`error: the probability is not sufficient to change the color: ${prob}`);
                // }
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed to ${color}.`);
            resolve();
        }, delay);
    });
}

// changeColor("red", 1000)
//     .then((result) => {
//         return changeColor("blue", 1000);
//     })
//     .then((result) => {
//         return changeColor("green", 1000);
//     })
//     .then((result) => {
//         return changeColor("yellow", 1000);
//     })
//     .then((result) => {
//         return changeColor("pink", 1000);
//     })
//     .then((result) => {
//         return changeColor("purple", 1000);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//========OPIMIZED CODE USING 'async' FUNCTION AND 'await-then' KEYWORD============

async function colorChange() {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("pink", 1000);
    await changeColor("purple", 1000);    //USING 'await' KEYWORD OVER HERE ENSURES THAT WHEN ERROR HANDLING IS APPLIED, IT SHOULD CAUGHT THE ERROR OCCURING AT THIS LINE ALSO. OTHERWISE DUE TO THE DELAY, ERROR AT THIS LINE WON'T GET CAUGHT.
    //ALSO IT ENSURE THE CONSISTENCY AND ENSURES THAT THE FURTHER EXECUTION SHOULD BE DONE ONCE THIS CALL IS EXECUTED.
}

colorChange();