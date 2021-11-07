import { printChess } from './js/other-functions.js';
import { validateSizeChess } from './js/validate-size.js'
import { createChessArray, putPiecesArray } from './js/create-chessArray.js'
import { sizeChessCanvas } from './js/create-canvas.js';
import { orderPiecesScreen, createLabelsPieces } from './js/order-PiecesScreen.js';
import { updatePositionPieces } from './js/updatePositionPieces.js';

import { logicPawn } from './logic_pieces/pawn.js';
import { logicHorse } from './logic_pieces/horse.js';
import { logicTower } from './logic_pieces/tower.js';
import { logicBishop } from './logic_pieces/bishop.js';

HTML_TAGS.submit_size.addEventListener('click', validateSizeChess);

function cleanGame(){
    // Arrays del tablero
    CHESS.length = 0;
    CHESS_VIEW.length = 0;
    listLetter.length = 0;
    
    // Progreso del juego
    GAME_PROGRESS.turn = 'white';
    GAME_PROGRESS.deadPiecesWhite.length = 0;
    GAME_PROGRESS.deadPiecesBlack.length = 0;

    // Ultima pieza seleccionada
    CHOSEN_PIECE.piece = '';

    // Eliminar tablero y piezas muertas del HTML
    HTML_TAGS.CONTAINER_CHESS.innerHTML = '';
    HTML_TAGS.deadPiecesWhite.innerHTML = '';
    HTML_TAGS.deadPiecesBlack.innerHTML = '';
    HTML_TAGS.ctx.clearRect(0, 0, HTML_TAGS.canvas.width, HTML_TAGS.canvas.height);
}

function createGameChess(){
    cleanGame();
    // Crear array del tablero
    createChessArray(CONFIG_CHESS.num_rows, CONFIG_CHESS.num_columns );
    putPiecesArray();
    
    sizeChessCanvas();
    createLabelsPieces();
    orderPiecesScreen(CHESS);
    printChess(listLetter, CHESS, GAME_PROGRESS);
}


//----------------------------------[ VALIDACION DE PIEZAS ]--------------------------------------//


function validatePieceMovement(piece){
    switch (piece) {
        case 'B-P': case 'W-P': return logicPawn(CHOSEN_POSITION.row, CHOSEN_POSITION.column, CHOSEN_PIECE);
        case 'B-T': case 'W-T': return logicTower(CHOSEN_POSITION.row,CHOSEN_POSITION.column,CHOSEN_PIECE);
        case 'B-H': case 'W-H': return logicHorse(CHOSEN_POSITION.row,CHOSEN_POSITION.column,CHOSEN_PIECE);
        case 'B-B': case 'W-B': return logicBishop(CHOSEN_POSITION.row,CHOSEN_POSITION.column,CHOSEN_PIECE);
        case 'B-Q': case 'W-Q': return true;
        case 'B-K': case 'W-K': return true;
        
        default: return true;
    }
}


export { createGameChess, updatePositionPieces, validatePieceMovement };


