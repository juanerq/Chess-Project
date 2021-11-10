import { validatePiece } from './validate-movePiece.js'
import { validateChosen } from './validate-moveChosen.js'

export function movePiece(posRow, posColumn, selectedTag, CHESS){
    
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
