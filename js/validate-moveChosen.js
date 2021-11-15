import { changeToFigures, errorColorRed, removeRest } from './other-functions.js';
import { updateMovement } from './update-movementPiece.js';
import { validateOption } from '../logic_pieces/functions.js';


export function validateChosen(){
    
    let chosenPosition = CHESS[CHOSEN_POSITION.row][CHOSEN_POSITION.column];
    let castling = false;

    // si da click a la misma pieza una vez mas se deseleccionara
    if(CHOSEN_POSITION.row == CHOSEN_PIECE.row && CHOSEN_POSITION.column == CHOSEN_PIECE.column){
        // Se quita el color(cualquier color) de todos los campos
        removeRest();
        // console.log(`pieza deseleccionada ${chosenPosition}`);
        // Se borra la pieza seleccionada
        CHOSEN_PIECE.piece = '';
        // Se borra la posición del campo seleccionado
        CHOSEN_POSITION.column = null;
        CHOSEN_POSITION.row = null;
        // Se eliminan las posibles opciones de la pieza
        MOTION_OPTIONS.length = 0;
        return 
    }
    
    
    // Validar movimiento de las piezas
    const result = validateOption(CHOSEN_POSITION, CHOSEN_PIECE, MOTION_OPTIONS)
    if(!result){
        // console.log(`El movimiento no es valido para esta pieza ${CHOSEN_PIECE.piece}`);
        return errorColorRed(CHOSEN_POSITION);
    }

    if(result == 'castling') castling = true
    // console.log(`Buen movimiento ${CHOSEN_PIECE.piece}`);
    removeRest();
    
    
    // Matar pieza
    // La pieza atrapada se busca en los arrays de piezas blancas o negras
    let trappedPiece = (GAME_PROGRESS.turn == 'black') ? 
    PIECES_WHITE.indexOf(chosenPosition) : PIECES_BLACK.indexOf(chosenPosition);
    
    if(trappedPiece != -1){
        chosenPosition = changeToFigures(chosenPosition);
        if(GAME_PROGRESS.turn == 'white'){
            GAME_PROGRESS.deadPiecesBlack.push(chosenPosition);
            HTML_TAGS.deadPiecesWhite.innerHTML = GAME_PROGRESS.deadPiecesBlack.join(" ");
        }else if(GAME_PROGRESS.turn == 'black'){
            GAME_PROGRESS.deadPiecesWhite.push(chosenPosition);
            HTML_TAGS.deadPiecesBlack.innerHTML = GAME_PROGRESS.deadPiecesWhite.join(" ");
        } 
        chosenPosition = '   ';
    }

    // se guarda la posicion seleccionada
    CHOSEN_POSITION.position = chosenPosition;
    // Se quita el color de la pieza seleccionada
    CHESS_VIEW[CHOSEN_PIECE.row][CHOSEN_PIECE.column].style.backgroundColor = '';

    // Función para cambiar posicion de pieza
    return updateMovement(CHOSEN_PIECE, CHOSEN_POSITION, castling);
}