h1 = document.querySelector('h1');

// function colorChange(color) {
//     h1.style.color = color;
// }

// setTimeout( colorChange("red"), 1000);      //ALTHOUGH THE 'setTimeout' FUNCTION IS ASYNCHRONOUS IN NATURE BUT THE FUNCTION THEY ARE CALLING IS SYNCHRONOUS IN NATURE,
// setTimeout( colorChange("green"), 2000);    //THEREFORE ONLY ONE OF THEM, i.e. THE LAST setTimeout ONLY GETS EXECUTED.
// setTimeout( colorChange("blue"), 3000);


//-----------ONE METHOD--------------
// function colorChange(color, delay) {
//     setTimeout( ()=>{
//         h1.style.color = color;
//     }, delay);
// }

// colorChange("red", 1000);       //BUT STILL THIS IS INEFFICIENT, AS IT ONLY EXPELL THE REDUNDANCY IN CODE, NOT THE ISSUE OF AUTOMATION OF THE ANIMATION DELAY.
// colorChange("blue", 2000);
// colorChange("green", 3000);



//===NOW WE ARE GONNA DO THIS TASK USING THE CONCEPT OF CALL-BACK HELL=====

function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("pink", 1000, () => {
                    changeColor("purple", 1000);
                });
            });
        });
    });
});


//=====--CALL BACK HELL - 2=================

function save(data, success, failure) {                 //THIS PORTION OF CODE IS SYNCHRONOUS WHILE THE FUNCTION CALL FOR THIS FUNCTION IS ASYNCHROUNOUS
    let random = Math.floor(Math.random() * 10) + 1;    //TO MAKE THIS FUNCITON ASYNC, WE CAN INSERT A FUNCTION LIKE 'setTimeout' INSIDE THIS FUNCTION

    if (random > 5) {
        console.log("DATA: ", data);
        success();
    } else {
        failure();
    }
}

save("kshitij sharma", () => {
    console.log("Data1 saved successfully.");
    save("prayash sharma", () => {
        console.log("Data2 saved successfully.")
        save("mahi sharma", () => {
            console.log("Data3 saved successfully");
        }, () => {
            console.log("Fatal Exception: Data can't be saved.");
        });
    }, () => {
        console.log("Fata Exception: Data can't be saved.");
    });
}, () => {
    console.log("Fatal Exception: Data can't be saved.");
});