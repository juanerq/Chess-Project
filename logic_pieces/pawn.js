import { colorPiece, changeToFigures } from "../js/other-functions.js";

let rowSelecPiece;
let columnSelecPiece;

export function logicPawn(rowSelec, columnSelec, piece) {
    let color = colorPiece(piece.piece);

    rowSelecPiece = rowSelec;
    columnSelecPiece = columnSelec;

    const pos = {
        square1: 0,
        square2: 0,
        column: piece.column
    }

    if(color == 'white'){
        pos.square1 = piece.row - 1;
        pos.square2 = piece.row - 2;
    }else if(color == 'black'){
        pos.square1 = piece.row + 1;
        pos.square2 = piece.row + 2;
    }

    if(pos.square1 >= 0 && pos.square1 < CONFIG_CHESS.num_rows){
        // Pintar primer cuadro
        if(CHESS[pos.square1][pos.column].split(" ").join("").length == 0){

            // paintOptions(CHESS[pos.square1][pos.column], CHESS_VIEW[pos.square1][pos.column], GAME_PROGRESS.turn);
            MOTION_OPTIONS.push(`${pos.square1},${pos.column}`)
            if( rowSelec == (pos.square1) && columnSelec == pos.column ) {
                showFormModal()
                return true;
            }
        }
        // Si el peon no se ha movido antes pintar el segundo cuadro si ambos estan vacios 
        if(piece.row == CHESS.length - 2 || piece.row == 1){
            if(pos.square2 >= 0 && pos.square2 < CONFIG_CHESS.num_rows ){

                if(CHESS[pos.square1][pos.column].split(" ").join("").length == 0 && CHESS[pos.square2][pos.column].split(" ").join("").length == 0 ) {
        
                    MOTION_OPTIONS.push(`${pos.square2},${pos.column}`)
                    if( (rowSelec == (pos.square2)) && columnSelec == pos.column ) return true;
                }
            }
        }

        if((piece.column + 1) < CONFIG_CHESS.num_columns && CHESS[pos.square1][piece.column + 1].split(" ").join("").length != 0 ) {
            MOTION_OPTIONS.push(`${pos.square1},${pos.column + 1}`)
            if(rowSelec == pos.square1 && columnSelec == piece.column + 1) {
                showFormModal()
                return true;
            }
        }

        if(pos.square1 >= 0 && (piece.column - 1) >= 0 && CHESS[pos.square1][piece.column - 1].split(" ").join("").length != 0 ) {
            MOTION_OPTIONS.push(`${pos.square1},${pos.column - 1}`)
            if(rowSelec == pos.square1 && columnSelec == piece.column - 1) {
                showFormModal()
                return true;
            }
        }
    }
    return false;    
}

// Cambiar de pieza el peon
function showFormModal(){
    if(rowSelecPiece == 0 || rowSelecPiece == CONFIG_CHESS.num_rows - 1){
        if(GAME_PROGRESS.turn == 'white'){
            HTML_TAGS.selecPieces[0].style.display = 'none';
            HTML_TAGS.selecPieces[1].style.display = '';
        }else{
            HTML_TAGS.selecPieces[1].style.display = 'none';
            HTML_TAGS.selecPieces[0].style.display = '';
        }
        HTML_TAGS.formModal.style.display = 'flex';
    }
}

HTML_TAGS.formModal.addEventListener('click', () => {
    let form = document.formPiece.changePiece.value;
    CHESS_VIEW[rowSelecPiece][columnSelecPiece].innerHTML = changeToFigures(form);
    CHESS[rowSelecPiece][columnSelecPiece] = form;
    HTML_TAGS.formModal.style.display = 'none';
})

