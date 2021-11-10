import { paintOptions } from "../js/other-functions.js";

export function logicKing(rowSelec, columnSelec, piece){
    let validate = false;

    for(let i = piece.row - 1; i <= piece.row + 1; i++){
        for(let j = piece.column - 1; j <= piece.column + 1; j++){
            if(i >= 0 && j >= 0 && i < CONFIG_CHESS.num_rows && j < CONFIG_CHESS.num_rows ){
                if(rowSelec == i && columnSelec == j){
                    validate = true;
                }
                paintOptions(CHESS[i][j], CHESS_VIEW[i][j], GAME_PROGRESS.turn);

            }
        }

    }
    return validate;
}