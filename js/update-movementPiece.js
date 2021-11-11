import { changeToFigures } from './other-functions.js';

export function updateMovement(piece, position){

    CHESS[position.row][position.column] = piece.piece;
    CHESS[piece.row][piece.column] = position.position;

    CHESS_VIEW[position.row][position.column].innerHTML = changeToFigures(piece.piece); 
    CHESS_VIEW[piece.row][piece.column].innerHTML = changeToFigures(position.position); 


    piece.row = null;
    piece.column = null;
    piece.piece = '';
    
    position.row = null;
    position.column = null;
    position.position = '';
    
    MOTION_OPTIONS.length = 0;

    if(GAME_PROGRESS.turn == 'white'){
        GAME_PROGRESS.turn = 'black';
        HTML_TAGS.CONTAINER_CHESS.style.border = '4px solid #fff500';
        CONFIG_CHESS.color_circlePosition = '#fff500';
        CONFIG_CHESS.colorSelectSquare = '#fff500';
    }else if(GAME_PROGRESS.turn == 'black'){
        GAME_PROGRESS.turn = 'white';
        HTML_TAGS.CONTAINER_CHESS.style.border = '4px solid #06adf7';
        CONFIG_CHESS.color_circlePosition = '#06adf7';
        CONFIG_CHESS.colorSelectSquare = '#06adf7';
    }

    // printChess(listLetter, CHESS, GAME_PROGRESS);
}

