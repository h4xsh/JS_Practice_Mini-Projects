//DARK MODE
let mode = ['Dark', 'Light'];
let i = 1;

let darkbtn = document.createElement("button");

const modeChange = () => {
    i = !i ? 1 : 0;
    
    if (i === 0) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkbtn.innerText = `Switch to ${mode[1]} Mode`;
        darkbtn.style.color = "white";
        darkbtn.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkbtn.innerText = `Switch to ${mode[0]} Mode`;
        darkbtn.style.color = "black";
        darkbtn.style.backgroundColor = "white";
    }
};

darkbtn.innerText = `Switch to ${mode[0]} Mode`;
darkbtn.style.padding = "10px 20px";
darkbtn.style.border = "2px solid #333";
darkbtn.style.borderRadius = "5px";
darkbtn.style.cursor = "pointer";
darkbtn.style.margin = "20px";

document.querySelector("body").prepend(darkbtn);
darkbtn.addEventListener("click", modeChange);