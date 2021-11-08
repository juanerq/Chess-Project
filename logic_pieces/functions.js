import { colorPiece, paintOptions } from "../js/other-functions.js";

export let validate = {status: false}; 

export function calculateOptions( direction, row, column, columnSelec, rowSelec ){

    if( row >= 0 && row < CONFIG_CHESS.num_rows && column >= 0 && column < CONFIG_CHESS.num_columns ){

        if(columnSelec == column && rowSelec == row) return validate.status = true;

        if( !direction.status ){
            let color = colorPiece( CHESS[row][column] );
            
            paintOptions(CHESS[row][column], CHESS_VIEW[row][column], GAME_PROGRESS.turn);

            if( CHESS[row][column].split(" ").join("").length != 0 ){

                if( color != GAME_PROGRESS.turn ){
                    paintOptions(CHESS[row][column], CHESS_VIEW[row][column], GAME_PROGRESS.turn);
                }
                return direction.status = true;
            }
        }
    }else{
        return direction.status = true;
    }
}
