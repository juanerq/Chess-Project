export function logicKing(rowSelec, columnSelec, piece){
    let validate = false;

    for(let row = piece.row - 1; row <= piece.row + 1; row++){
        for(let column = piece.column - 1; column <= piece.column + 1; column++){
            if(row >= 0 && column >= 0 && row < CONFIG_CHESS.num_rows && column < CONFIG_CHESS.num_rows ){
                if(rowSelec == row && columnSelec == column){
                    validate = true;
                }
                MOTION_OPTIONS.push(`${row},${column}`)
            }
        }
    }
    return validate;
}