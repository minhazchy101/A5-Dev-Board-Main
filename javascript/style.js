// alert("okay")

/*nav section*/ 

function changeColor() {
    const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
    return color;
}

document.getElementById("color-btn").addEventListener(`click`, function(){
    document.body.style.backgroundColor = changeColor() ;
})

document.getElementById("discover-box").addEventListener("click", function () {
    
    window.location.href = "./qna.html";

})






