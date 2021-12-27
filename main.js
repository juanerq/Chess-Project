import { printChess, clearConsoleData } from './js/other-functions.js';
import { validateSizeChess } from './js/validate-size.js'
import { createChessArray, putPiecesArray } from './js/create-chessArray.js'
import { sizeChessCanvas } from './js/create-canvas.js';
import { orderPiecesScreen, createLabelsPieces } from './js/order-PiecesScreen.js';

import { logicPawn } from './logic_pieces/pawn.js';
import { logicHorse } from './logic_pieces/horse.js';
import { logicTower } from './logic_pieces/tower.js';
import { logicBishop } from './logic_pieces/bishop.js';
import { logicQueen } from './logic_pieces/queen.js';
import { logicKing } from './logic_pieces/king.js';

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
    GAME_PROGRESS.jake = false;
    GAME_PROGRESS.checkmate = false;

    // Ultima pieza seleccionada
    CHOSEN_PIECE.piece = '';
    MOTION_OPTIONS.length = 0;
    
    // Eliminar tablero y piezas muertas del HTML
    HTML_TAGS.CONTAINER_PIECES.innerHTML = '';
    HTML_TAGS.deadPiecesWhite.innerHTML = '';
    HTML_TAGS.deadPiecesBlack.innerHTML = '';
    HTML_TAGS.ctx.clearRect(0, 0, HTML_TAGS.canvas.width, HTML_TAGS.canvas.height);
    
    HTML_TAGS.end_game.style.display = 'none';
    HTML_TAGS.formModal.style.display = 'none';
    HTML_TAGS.CONTAINER_CHESS.style.pointerEvents = '';
    HTML_TAGS.CONTAINER_CHESS.style.border = `4px solid ${colors.blue}`;

    CONFIG_CHESS.color_circlePosition = colors.blue;
    CONFIG_CHESS.colorSelectSquare = colors.blue;

    clearConsoleData()
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

function validatePieceMovement(piece, CHOSEN_PIECE){
    switch (piece) {
        case 'B-P': case 'W-P': return logicPawn   ( CHOSEN_PIECE );
        case 'B-T': case 'W-T': return logicTower  ( CHOSEN_PIECE );
        case 'B-H': case 'W-H': return logicHorse  ( CHOSEN_PIECE );
        case 'B-B': case 'W-B': return logicBishop ( CHOSEN_PIECE );
        case 'B-Q': case 'W-Q': return logicQueen  ( CHOSEN_PIECE );
        case 'B-K': case 'W-K': return logicKing   ( CHOSEN_PIECE );

        default: return true;
    }
}


export { createGameChess, validatePieceMovement };


