 
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
                // 
        let convertTaskNumber = parseInt(taskNumber.innerText);
        convertTaskNumber--;
        taskNumber.innerText = convertTaskNumber;
    
           let convertNavNumber = parseInt(navNumber.innerText);
           convertNavNumber++;
           navNumber.innerText = convertNavNumber;
        //    

           buttons++;
           if (buttons === 6) {
               alert("Congrates!! You have completed all the current task")
           }
        
           const theBtn = document.querySelectorAll(".card-title")
           for (let index = 0; index < theBtn.length; index++) {
               const element = theBtn[index].innerText;
               
                }
       
        const messageDiv = document.createElement('div');
        
        messageDiv.style.padding = "6px";
        messageDiv.style.margin = "5px";
        messageDiv.style.borderRadius = "10px";
        messageDiv.style.backgroundColor = "lightgray";
        
        messageDiv.textContent = `You have Complete The ${theBtn.innerText} TASK at "${formattedTime}"`;
        
        activityContainer.appendChild(messageDiv);
        
    })
    
})
const activityContainer = document.getElementById("activity-container")

let atTime = new Date();
let hours = atTime.getHours();
let minutes = atTime.getMinutes();
let seconds = atTime.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; 
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;


document.getElementById("clear-btn").addEventListener("click",function(){
        
    activityContainer.innerHTML = "";
  
})

// const theBtn = document.querySelectorAll(".the-btn")
// for (let index = 0; index < theBtn.length; index++) {
//     const element = theBtn[index];

//     console.log(element)
    
// }









