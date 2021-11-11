import { colorPiece, paintOptions } from "../js/other-functions.js";

export let validate = { status: false }; 

export function calculateOptions( direction, row, column, columnSelec, rowSelec ){
    if( (row >= 0 && row < CONFIG_CHESS.num_rows) && (column >= 0 && column < CONFIG_CHESS.num_columns) ){

        if(columnSelec == column && rowSelec == row) return validate.status = true;
        if( !direction.status ){
            
            let color = colorPiece( CHESS[row][column] );
            if(color == GAME_PROGRESS.turn) return direction.status = true;
        
            MOTION_OPTIONS.push(`${row},${column}`)
            
            if( CHESS[row][column].split(" ").join("").length != 0 ){
                if( color != GAME_PROGRESS.turn ){

                    MOTION_OPTIONS.push(`${row},${column}`)
                }
                return direction.status = true;
            }
        }
    }else{
        return direction.status = true;
    }
}

export function paintMotionOptions(options){
    options.forEach(element => {
        let row_column = element.split(',')
        paintOptions(CHESS[row_column[0]][row_column[1]], CHESS_VIEW[row_column[0]][row_column[1]], GAME_PROGRESS.turn);
    }); 
}