import { colorPiece, paintOptions } from "../js/other-functions.js";

export function logicPawn(rowSelec, columnSelec, piece) {
    console.log(piece);
    let color = colorPiece(piece.piece);

    const posSquares = {
        square1: 0,
        square2: 0,
        column: piece.column
    }

    if(color == 'white'){
        posSquares.square1 = piece.row - 1;
        posSquares.square2 = piece.row - 2;
    }else if(color == 'black'){
        posSquares.square1 = piece.row + 1;
        posSquares.square2 = piece.row + 2;
    }


    if( piece.row != CHESS.length - 2 || piece.row != 1 ){
        if(posSquares.square1 >= 0 && posSquares.square1 < CONFIG_CHESS.num_rows){
            paintOptions(CHESS[posSquares.square1][posSquares.column], CHESS_VIEW[posSquares.square1][posSquares.column], GAME_PROGRESS.turn);
            if( rowSelec == (posSquares.square1) && columnSelec == posSquares.column ) return true;
        }
    }
    if(piece.row == CHESS.length - 2 || piece.row == 1){
        if(posSquares.square1 >= 0 && posSquares.square1 < CONFIG_CHESS.num_rows){
            paintOptions(CHESS[posSquares.square1][posSquares.column], CHESS_VIEW[posSquares.square1][posSquares.column], GAME_PROGRESS.turn);
            if( (rowSelec == (posSquares.square1) && columnSelec == posSquares.column )) return true;
        }

        if(CHESS[posSquares.square1][posSquares.column].split(" ").join("").length == 0 && posSquares.square2 >= 0 && posSquares.square2 < CONFIG_CHESS.num_rows ){
            paintOptions(CHESS[posSquares.square2][posSquares.column], CHESS_VIEW[posSquares.square2][posSquares.column], GAME_PROGRESS.turn);
            if( (rowSelec == (posSquares.square2)) && columnSelec == posSquares.column ) return true;
        }
    }
    return false;
}