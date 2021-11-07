import { updatePositionPieces, validatePieceMovement } from '../main.js';
import { changeToFigures, printChess, errorColorRed } from './other-functions.js';

function movePiece(posRow, posColumn, selectedTag, CHESS){
    
    if(CHOSEN_PIECE.piece.length == 0){
        CHOSEN_PIECE.row = posRow;
        CHOSEN_PIECE.column = posColumn;
        return validatePiece(CHESS, CHOSEN_PIECE, selectedTag);
    }

    if(CHOSEN_POSITION.position.length == 0){
        CHOSEN_POSITION.row = posRow;
        CHOSEN_POSITION.column = posColumn;
        return validateChosen();
    }

}

function validatePiece(CHESS, CHOSEN_PIECE, selectedTag){
    let piezaEscontrada;
    let pieza = CHESS[CHOSEN_PIECE.row][CHOSEN_PIECE.column];
    if(GAME_PROGRESS.turn == 'white'){
        piezaEscontrada =  PIECES_WHITE.indexOf(pieza);
    }else if(GAME_PROGRESS.turn == 'black'){
        piezaEscontrada =  PIECES_BLACK.indexOf(pieza);
    }  

    //No encontro la pieza?
    if(piezaEscontrada == -1){
        console.log(`Selecciona una pieza de color ${GAME_PROGRESS.turn}`)
        return errorColorRed(CHOSEN_PIECE);
         
    }
    CHOSEN_PIECE.piece = pieza;
    selectedTag.style.backgroundColor = CONFIG_CHESS.colorSelectSquare;
    validatePieceMovement(pieza);

    return console.log(`pieza seleccionada ${pieza}`)
}


function validateChosen(){
    
    let chosenPosition = CHESS[CHOSEN_POSITION.row][CHOSEN_POSITION.column];

    // si da click a la misma pieza una vez mas se deseleccionara
    if(CHOSEN_POSITION.row == CHOSEN_PIECE.row && CHOSEN_POSITION.column == CHOSEN_PIECE.column){
        // Se quita el color(cualquier color) de todos los campos
        for(const element of HTML_TAGS.PIECES){
            element.style.backgroundColor = '';    
        }
        console.log(`pieza deseleccionada ${chosenPosition}`);
        // Se borra la piesa seleccionada
        return CHOSEN_PIECE.piece = '';
    }

    let trappedPiece = (GAME_PROGRESS.turn == 'black') ? 
    PIECES_WHITE.indexOf(chosenPosition) : PIECES_BLACK.indexOf(chosenPosition);

    if(chosenPosition.split(" ").join("").length != 0 && trappedPiece == -1){
        console.log('Selecciona un campo vacio');
        return errorColorRed(CHOSEN_POSITION);
    }

    let resultado = validatePieceMovement(CHOSEN_PIECE.piece);
    if(!resultado){
        console.log(`El movimiento no es valido para esta pieza ${CHOSEN_PIECE.piece}`);
        return errorColorRed(CHOSEN_POSITION);
    }else{
        console.log(`Buen movimiento ${CHOSEN_PIECE.piece}`);
        for(const element of HTML_TAGS.PIECES){
            element.style.backgroundColor = '';    
        }
    }

    // Matar pieza
    if(trappedPiece != -1){
        chosenPosition = changeToFigures(chosenPosition);
        if(GAME_PROGRESS.turn == 'white'){
            GAME_PROGRESS.deadPiecesBlack.push(chosenPosition);
            HTML_TAGS.deadPiecesWhite.innerHTML = GAME_PROGRESS.deadPiecesBlack.join(" ");
        }else{
            GAME_PROGRESS.deadPiecesWhite.push(chosenPosition);
            HTML_TAGS.deadPiecesBlack.innerHTML = GAME_PROGRESS.deadPiecesWhite.join(" ");
        } 
        chosenPosition = '   ';
    }

    CHOSEN_POSITION.position = chosenPosition;
    CHESS_VIEW[CHOSEN_PIECE.row][CHOSEN_PIECE.column].style.backgroundColor = '';

    // Función para cambiar posicion de pieza
    return moverPieza(CHOSEN_PIECE, CHOSEN_POSITION);
}


function moverPieza(piece, position){



    (GAME_PROGRESS.turn == 'white') ? updatePositionPieces(POSITION_PIECES_WHITE, piece, position) :
    updatePositionPieces(POSITION_PIECES_BLACK, piece, position);
    console.log(CHOSEN_PIECE, CHOSEN_POSITION);
    // putPositionPieces([POSITION_PIECES_BLACK, POSITION_PIECES_WHITE], GAME_PROGRESS.idgame);

    if(GAME_PROGRESS.turn == 'white'){
        GAME_PROGRESS.turn = 'black';
    }else if(GAME_PROGRESS.turn == 'black'){
        GAME_PROGRESS.turn = 'white';
    }

    const payload = {
        posBlack: POSITION_PIECES_BLACK,
        posWhite: POSITION_PIECES_WHITE,
        selPiece: piece,
        selPosition: position,
        turn: GAME_PROGRESS.turn
    }


    CHOSEN_PIECE.row = 0;
    CHOSEN_PIECE.column = 0;
    CHOSEN_PIECE.piece = '';

    CHOSEN_POSITION.row = 0;
    CHOSEN_POSITION.column = 0;
    CHOSEN_POSITION.position = '';

    printChess(listLetter, CHESS, GAME_PROGRESS);
}

export { 
    movePiece,
    validatePiece,
    validateChosen,
    moverPieza    
}