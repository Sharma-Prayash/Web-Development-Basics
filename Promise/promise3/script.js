function dot(delay, h3) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h3.innerText += ' .';
            resolve();
        }, delay);
    });
}

function content(msg, delay) {
    let h3 = document.createElement("h3");
    document.body.append(h3);

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            h3.innerText = msg;

            dot(1000, h3)
                .then(() => {
                    return dot(500, h3);
                })
                .then(() => {
                    return dot(500, h3);
                })
                .then(() => {
                    resolve(); // Now resolve only after all dots are done
                });

            // resolve();   //THIS WILL CREATE A ISSUE, SO EXECUTE THIS EITHER INSIDE ANOTHER .then() METHOD.
        }, delay);
    });
}

content(">>> Initializing Hacking", 1000)
    .then(() => {
        return content(">>> Reading your Files", 1000);
    })
    .then(() => {
        return content(">>> Password files Detected", 1000);
    })
    .then(() => {
        return content(">>> Sending all passwords and personal files to server", 1000);
    })
    .then(() => {
        return content(">>> Cleaning Up", 1000);
    });