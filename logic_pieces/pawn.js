import { colorPiece, paintOptions } from "../js/other-functions.js";

export function logicPawn(rowSelec, columnSelec, piece) {

    let color = colorPiece(piece.piece);

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


    // Pintar primer cuadro
    if(CHESS[pos.square1][pos.column].split(" ").join("").length == 0 
    && pos.square1 >= 0 && pos.square1 < CONFIG_CHESS.num_rows){

        paintOptions(CHESS[pos.square1][pos.column], CHESS_VIEW[pos.square1][pos.column], GAME_PROGRESS.turn);
        if( rowSelec == (pos.square1) && columnSelec == pos.column ) return true;
    }
    // Si el peon no se ha movido antes pintar el segundo cuadro si ambos estan vacios 
    if(piece.row == CHESS.length - 2 || piece.row == 1){
        if(CHESS[pos.square1][pos.column].split(" ").join("").length == 0 && pos.square1 >= 0 && pos.square1 < CONFIG_CHESS.num_rows && CHESS[pos.square2][pos.column].split(" ").join("").length == 0 && pos.square2 >= 0 && pos.square2 < CONFIG_CHESS.num_rows ) {

            paintOptions(CHESS[pos.square2][pos.column], CHESS_VIEW[pos.square2][pos.column], GAME_PROGRESS.turn);
            if( (rowSelec == (pos.square2)) && columnSelec == pos.column ) return true;
        }
    }

    if(CHESS[pos.square1][piece.column + 1].split(" ").join("").length != 0 ) {
        paintOptions(CHESS[pos.square1][piece.column + 1], CHESS_VIEW[pos.square1][piece.column + 1], GAME_PROGRESS.turn);
        if(rowSelec == pos.square1 && columnSelec == piece.column + 1) return true;
        
    }
    if(CHESS[pos.square1][piece.column - 1].split(" ").join("").length != 0 ) {
        paintOptions(CHESS[pos.square1][piece.column - 1], CHESS_VIEW[pos.square1][piece.column - 1], GAME_PROGRESS.turn);
        if(rowSelec == pos.square1 && columnSelec == piece.column - 1) return true;
    }

    return false;
}



