import { calculateOptions } from './functions.js';
// import { colorPiece, paintOptions } from "../js/other-functions.js";
let validate ;

export function logicBishop(rowSelec, columnSelec, piece){
    validate = false;
    const counters = {
        topLeft:   { status: false, contRow: piece.row, contColumn: piece.column },
        topRight:  { status: false, contRow: piece.row, contColumn: piece.column },
        downLeft:  { status: false, contRow: piece.row, contColumn: piece.column },
        downRight: { status: false, contRow: piece.row, contColumn: piece.column }
    }

    while(!counters.topLeft.status || !counters.topRight.status || !counters.downLeft.status || !counters.downRight.status){

        if( !counters.topLeft.status   ) counters.topLeft.contRow   -= 1; counters.topLeft.contColumn   -= 1;         
        if( !counters.topRight.status  ) counters.topRight.contRow  -= 1; counters.topRight.contColumn  += 1; 
        if( !counters.downLeft.status  ) counters.downLeft.contRow  += 1; counters.downLeft.contColumn  -= 1; 
        if( !counters.downRight.status ) counters.downRight.contRow += 1; counters.downRight.contColumn += 1; 

        calculateOptions( counters.topLeft   , counters.topLeft.contRow   , counters.topLeft.contColumn   , columnSelec , rowSelec , validate );
        calculateOptions( counters.topRight  , counters.topRight.contRow  , counters.topRight.contColumn  , columnSelec , rowSelec , validate );
        calculateOptions( counters.downLeft  , counters.downLeft.contRow  , counters.downLeft.contColumn  , columnSelec , rowSelec , validate );
        calculateOptions( counters.downRight , counters.downRight.contRow , counters.downRight.contColumn , columnSelec , rowSelec , validate );
          
    }
    return validate;
}


// function calculateOptions( direction, row, column, columnSelec, rowSelec ){
        
//     if( row >= 0 && row < CONFIG_CHESS.num_rows && column >= 0 && column < CONFIG_CHESS.num_columns ){
//         if(columnSelec == column && rowSelec == row) validate = true;
        
//         if( !direction.status ){
//             let color = colorPiece( CHESS[row][column] );
            
//             paintOptions(CHESS[row][column], CHESS_VIEW[row][column], GAME_PROGRESS.turn);

//             if( CHESS[row][column].split(" ").join("").length != 0 ){

//                 if( color != GAME_PROGRESS.turn ){
//                     paintOptions(CHESS[row][column], CHESS_VIEW[row][column], GAME_PROGRESS.turn);
//                 }
//                 return direction.status = true;
//             }
//         }
//     }else{
//         return direction.status = true;
//     }
// }
