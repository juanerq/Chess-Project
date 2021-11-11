import { validatePieceMovement } from '../main.js';
import { errorColorRed } from './other-functions.js';
import { paintMotionOptions } from '../logic_pieces/functions.js'


export function validatePiece(CHESS, CHOSEN_PIECE, selectedTag){
    let findPiece;
    let piece = CHESS[CHOSEN_PIECE.row][CHOSEN_PIECE.column];

    if(GAME_PROGRESS.turn == 'white'){
        findPiece =  PIECES_WHITE.indexOf(piece);
    }else if(GAME_PROGRESS.turn == 'black'){
        findPiece =  PIECES_BLACK.indexOf(piece);
    }  

    //No encontro la piece?
    if(findPiece == -1){
        // console.log(`Selecciona una pieza de color ${GAME_PROGRESS.turn}`)
        return errorColorRed(CHOSEN_PIECE);
         
    }
    CHOSEN_PIECE.piece = piece;
    // Pintar campo seleccionado
    selectedTag.style.backgroundColor = CONFIG_CHESS.colorSelectSquare;
    // Calcular campos donde la pieza se puede mover
    validatePieceMovement(piece);
    // Pintar los campos
    paintMotionOptions(MOTION_OPTIONS); 
    // console.log(`pieza seleccionada ${piece}`)
}