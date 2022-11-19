// const idbutton = document.querySelector("#idbut");
// idbutton.onclick = () => {alert("This is from external javascript using onclick property")};

// const id3 = document.querySelector('#b');
// id3.addEventListener('click', (e) => {
//     console.log(e.target);
// })


const buttons = document.querySelectorAll("button");

let black = false;
const turnBlack = () => {
    buttons.forEach((b) => {
        b.style.backgroundColor = 'black';
        b.style.color = 'white';
        b.style.border = '4px solid white';
    })
    document.body.style.backgroundColor = 'black';
};
const turnWhite = (e) => {
    buttons.forEach((b) => {
        b.style.backgroundColor = 'white';
        b.style.color = 'black';
        b.style.border = '2px solid palegreen';
    })
    document.body.style.backgroundColor = 'white';
}

buttons.forEach((button) => {
    button.addEventListener('click', (button) => {
        if(black){
            turnWhite();
            black = false;
        }else{
            turnBlack()
            black = true;
        }
    });
})
