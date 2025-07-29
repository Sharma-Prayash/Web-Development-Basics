//=====THE CODE BELOW DEMONSTRATE CALL-BACK HELL=========

// function save(data, success, failure) {
//     let random = Math.floor(Math.random() * 10) + 1;

//     if (random > 5) {
//         console.log("DATA: ", data);
//         success();
//     } else {
//         failure();
//     }
// }

// save("kshitij sharma", () => {
//     console.log("Data1 saved successfully.");
//     save("prayash sharma", () => {
//         console.log("Data2 saved successfully.")
//         save("mahi sharma", () => {
//             console.log("Data3 saved successfully");
//         }, () => {
//             console.log("Fatal Exception: Data can't be saved.");
//         });
//     }, () => {
//         console.log("Fata Exception: Data can't be saved.");
//     });
// }, () => {
//     console.log("Fatal Exception: Data can't be saved.");
// });


//=========OPTIMISED CODE USING PROMISE================

function save(data) {
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 10) + 1;
        if (random > 5) {
            resolve("resolved: the task is completed.");
        }
        else {
            reject("rejected: the task is unable to complete.");
        }
    });
}

let request = save("kshitij");

request
    .then(() => {
        console.log("request fulfilled");
    })
    .catch(() => {
        console.log("request denied");
    });

