let btn = document.querySelector("button");
let box = document.querySelector("div");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    let color = randomColor();
    this.style.backgroundColor = color;
    box.style.backgroundColor = color;
    h1.innerText = color;
    console.log("colour updated");
});

// function colorFunction() {
// }

function randomColor(){
    let red = Math.floor( Math.random() * 255 );
    let blue = Math.floor( Math.random() * 255 );
    let green = Math.floor( Math.random() * 255 );

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}