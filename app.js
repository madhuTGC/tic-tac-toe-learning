// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-button");
// let newGameBtn = document.querySelector("#new-game");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");


// let turnO = true; //playerX , playerO;

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ]; 


// const resetGame = ()=>{
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");

// }



// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("box click");
//         if (turnO){
//             box.innerHTML = "O";
//             turnO = false;
//         } else{
//             box.innerHTML = "X";
//             turnO = true;

//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });

// const disableBoxes = ()=>{
//     for (let box of boxes){
//         box.disabled = true;
//     }
// }


// const enableBoxes = ()=>{
//     for (let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//     }
// }

// const showWinner =  (winner)=>{
//     msg.innerText = `Congratulation, Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }


// const checkWinner = ()=>{
//     for (pattern of winPatterns){
//         // console.log(pattern[0], pattern[1], pattern[2]);
//         // console.log(
//         //     boxes[pattern[0]].innerText, 
//         //     boxes[pattern[1]].innerText, 
//         //     boxes[pattern[2]].innerText
//         // );
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if  (pos1Val === pos2Val && pos2Val === pos3Val ){
//                 console.log("winner",pos1Val);
//                 showWinner(pos1Val);
//             }
//         }
//     }
// }



// newGameBtn.addEventListener("Click",resetGame);
// resetBtn.addEventListener("click",resetGame);







let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;

let turnO = true; //playerX , playerO;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 


const resetGame = ()=>{
    count=0
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box click");
        if (turnO){
            box.innerHTML = "O";
            turnO = false;
            count+=1;
        } else{
            box.innerHTML = "X";
            turnO = true;
            count+=1;

        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner =  (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = ()=>{
    for (pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if  (pos1Val === pos2Val && pos2Val === pos3Val ){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
            else if ((count==9)){
                console.log("draw")
                msg.innerText = "Oops! it's Draw";
                msgContainer.classList.remove("hide");
                disableBoxes();

            }
        }
    }
}



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);