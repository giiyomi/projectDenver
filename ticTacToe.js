const main = document.getElementById("bricks");
const boxes = document.getElementById("boxes");
const piecesDiv = document.querySelectorAll("#pieces div");
const homePage = document.getElementById("homePage");
const footer = document.getElementById("footer");
const pieceWin = document.getElementById("youWin");
const reviewP = document.querySelector("#review p");
const restartP = document.querySelector("#restart p");
const reviewSteps = document.getElementById("reviewSteps");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");
const reset = document.getElementById("reset");
let playerX = true;
let isBoardClickable = true;
let round = 1;

piecesDiv.forEach(pieceDiv => {

    pieceDiv.addEventListener("click", (piece) => {
        console.log(`Round ${round++}`)
        if (piece.target.id === "xPiece") {
            playerX = true;
            homePage.style.display = "none";
            reviewSteps.style.display = "none"
            main.style.display = "flex";
        } else if (piece.target.id === "oPiece") {
            playerX = false;
            homePage.style.display = "none";
            reviewSteps.style.display = "none"
            main.style.display = "flex";
        }
    });
});




function createBoard(){
    for(let box=0; box<9;box++){
        let boxDiv = document.createElement("div"); //nagcreate sya ng div container na pangalan ay tictactoeBox
        boxes.appendChild(boxDiv) //yung div container na yun is inappend nya dun sa board na div originally created in HTML

        boxDiv.setAttribute("id", `id${box}`) // nilagyan yung div container ng ID = "id#", mapapansin dito na naka loop sya so yung id number is depende kung anong iteration na sya.
        boxDiv.addEventListener("click", () => { //dito, kapag pinindot daw yung div container, mag titriger daw yung function na addMove.
            if(boxDiv.innerHTML.trim() === ""){
                if(playerX){
                    boxDiv.textContent = "X";
                    playerX = false;
        
                }else{
                    boxDiv.textContent = "O";
                    playerX = true;
                }
            }
        });
    }
}



