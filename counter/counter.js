let count = 0;
document.getElementById("increase").onclick = () => {
    count++;
    document.getElementById("counter").textContent = `Counter: ${count}`;
};
document.getElementById("decrease").onclick = () => {
    if(count>0){
    count--;
    }
    document.getElementById("counter").textContent = `Counter: ${count}`;
};
document.getElementById("reset").onclick = () => {
    count = 0;
    document.getElementById("counter").textContent = `Counter: ${count}`;
};
