export function logicHorse(rowSelec, columnSelec, piece) {
    let correctMove = false;
    for(const rows in CHESS){
        for(const columns in CHESS[rows]){
            let validateChosen = horseOptions(rows, columns, piece);
            if(validateChosen){
                
                MOTION_OPTIONS.push(`${rows},${columns}`)
                
                if(rowSelec == rows && columnSelec == columns && correctMove == false){
                    correctMove = true;
                }
            } 
        }
    }
    return correctMove;
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
