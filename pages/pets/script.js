const xMark = document.querySelector("#nav-ul");
let a = 0;

function changeDisplayBurger() {
    let b;
    if(a === 0) {
        xMark.style.display = "block";
        b = 1;
        a = b;
    }else if(a === 1){
        xMark.style.display = "none";
        b = 0;
        a = b;
    }
}