import { changeToFigures, printChess, clearConsoleData } from './other-functions.js';
import { kingJake } from '../logic_pieces/functions.js';

export function updateMovement(piece, position, castling){  

    if(castling){
        if(position.column < piece.column){
            CHESS[piece.row][piece.column - 2] = piece.piece;
            CHESS[piece.row][piece.column - 1] = position.position;
            CHESS_VIEW[position.row][piece.column - 2].innerHTML = changeToFigures(piece.piece); 
            CHESS_VIEW[position.row][piece.column - 1].innerHTML = changeToFigures(position.position);
        }else{
            CHESS[piece.row][piece.column + 2] = piece.piece;
            CHESS[piece.row][piece.column + 1] = position.position;
            CHESS_VIEW[position.row][piece.column + 2].innerHTML = changeToFigures(piece.piece); 
            CHESS_VIEW[position.row][piece.column + 1].innerHTML = changeToFigures(position.position);
        }
        CHESS[piece.row][piece.column] = '   ';
        CHESS[position.row][position.column] = '   ';
        CHESS_VIEW[position.row][piece.column].innerHTML = '';
        CHESS_VIEW[position.row][position.column].innerHTML = '';
        
    }else{

        CHESS[position.row][position.column] = piece.piece;
        CHESS[piece.row][piece.column] = position.position;
    
        CHESS_VIEW[position.row][position.column].innerHTML = changeToFigures(piece.piece); 
        CHESS_VIEW[piece.row][piece.column].innerHTML = changeToFigures(position.position); 
    }


    if(GAME_PROGRESS.turn == 'white'){

        GAME_PROGRESS.turn = 'black';
        HTML_TAGS.CONTAINER_CHESS.style.border = `4px solid ${colors.yellow}`;
        CONFIG_CHESS.color_circlePosition = colors.yellow;
        CONFIG_CHESS.colorSelectSquare = colors.yellow;

    }else if(GAME_PROGRESS.turn == 'black'){

        GAME_PROGRESS.turn = 'white';
        HTML_TAGS.CONTAINER_CHESS.style.border = `4px solid ${colors.blue}`;
        CONFIG_CHESS.color_circlePosition = colors.blue;
        CONFIG_CHESS.colorSelectSquare = colors.blue;

    }

    kingJake()

    piece.row = null;
    piece.column = null;
    piece.piece = '';
    
    position.row = null;
    position.column = null;
    position.position = '';
    
    MOTION_OPTIONS.length = 0;

    clearConsoleData()
    printChess(listLetter, CHESS, GAME_PROGRESS);

}

