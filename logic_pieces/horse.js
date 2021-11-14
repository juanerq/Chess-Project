import { colorPiece } from '../js/other-functions.js';

export function logicHorse(piece) {
    let colorPieceSelec = colorPiece(piece.piece);

    for(const rows in CHESS){
        for(const columns in CHESS[rows]){

            let colorPosition = colorPiece(CHESS[rows][columns])
            let validateChosen = horseOptions(rows, columns, piece);

            if(validateChosen) {
                if(CHESS[rows][columns].split(" ").join("").length == 0 || 
                    colorPieceSelec != colorPosition){
                        
                    MOTION_OPTIONS.push(`${rows},${columns}`)
                    OPTIONS_KILL.push(`${rows},${columns}`)
    
                } 
            }

        }
    }
}

function horseOptions(rowSelec, columnSelec, posCaballo){
    if(rowSelec == (posCaballo.row - 2) || rowSelec == (posCaballo.row + 2) || 
        columnSelec == (posCaballo.column - 2) || columnSelec == (posCaballo.column + 2)){

        if(columnSelec == (posCaballo.column - 1) || columnSelec == (posCaballo.column + 1) || 
            rowSelec == (posCaballo.row - 1) || rowSelec == (posCaballo.row + 1)){
                return true;
        }
    }   
    return false; 
}
