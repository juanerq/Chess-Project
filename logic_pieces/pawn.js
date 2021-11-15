import { colorPiece, changeToFigures } from "../js/other-functions.js";

let rowSelecPiece;
let columnSelecPiece;

export function logicPawn( piece ) {
    let color = colorPiece(piece.piece);
    let colorPosition;
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

        if(CHESS[pos.square1][pos.column].split(" ").join("").length == 0){
            MOTION_OPTIONS.push(`${pos.square1},${pos.column}`)
        }
        // Si el peon no se ha movido antes de pintar el segundo cuadro y si ambos estan vacios 
        if(piece.row == CHESS.length - 2 || piece.row == 1){
            if(pos.square2 >= 0 && pos.square2 < CONFIG_CHESS.num_rows ){

                if(CHESS[pos.square1][pos.column].split(" ").join("").length == 0 && CHESS[pos.square2][pos.column].split(" ").join("").length == 0 ) {
        
                    MOTION_OPTIONS.push(`${pos.square2},${pos.column}`)
                }
            }
        }
        OPTIONS_KILL.push(`${pos.square1},${pos.column + 1}`)
        OPTIONS_KILL.push(`${pos.square1},${pos.column - 1}`)
        colorPosition = colorPiece(CHESS[pos.square1][pos.column + 1]);
        if((piece.column + 1) < CONFIG_CHESS.num_columns && CHESS[pos.square1][piece.column + 1].split(" ").join("").length != 0 && color != colorPosition) {
            
            MOTION_OPTIONS.push(`${pos.square1},${pos.column + 1}`)
        }
        colorPosition = colorPiece(CHESS[pos.square1][pos.column - 1]);
        if(pos.square1 >= 0 && (piece.column - 1) >= 0 && CHESS[pos.square1][piece.column - 1].split(" ").join("").length != 0 && color != colorPosition) {
            MOTION_OPTIONS.push(`${pos.square1},${pos.column - 1}`)
        }
    }
}

// Cambiar de pieza el peon
export function showFormModal(row, column, piece){
    rowSelecPiece = row;
    columnSelecPiece = column
    if(piece.piece == 'W-P' || piece.piece == 'B-P'){
        if(row == 0 || row == CONFIG_CHESS.num_rows - 1){
            // Cambiar piezas a seleccionar dependiendo del turno
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
}

HTML_TAGS.formModal.addEventListener('click', () => {
    let form = document.formPiece.changePiece.value;

    CHESS_VIEW[rowSelecPiece][columnSelecPiece].innerHTML = changeToFigures(form);
    CHESS[rowSelecPiece][columnSelecPiece] = form;
    HTML_TAGS.formModal.style.display = 'none';
})
