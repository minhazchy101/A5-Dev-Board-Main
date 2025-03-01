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

const navNumber = document.getElementById("nav-number");

// 

document.getElementById("discover-box").addEventListener("click", function () {
    
    window.location.href = "./qna.html";

})

// 

const today = new Date();
const theDate = today.toDateString();
const currentDate = document.getElementById ("current-Date")

currentDate.innerText = theDate;


//

const complete = document.querySelectorAll(".completed-btn");

const taskNumber = document.getElementById("task-number");

let buttons = 0;


complete.forEach(function (complete) {
    complete.addEventListener("click", function () {
        
        complete.setAttribute(`disabled`, true)
        alert("Board update Successfully")
        
        
        
        
        
        let convertTaskNumber = parseInt(taskNumber.innerText);
        
    convertTaskNumber--;

    taskNumber.innerText = convertTaskNumber;
    
           let convertNavNumber = parseInt(navNumber.innerText);

           convertNavNumber++;

           navNumber.innerText = convertNavNumber;

           buttons++;
           if (buttons === 6) {
               alert("Congrates!! You have completed all the current task")
           }


    })
    
})











