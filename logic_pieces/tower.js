import { calculateOptions, validate } from './functions.js';

export function logicTower(rowSelec, columnSelec, piece) {   
    validate.status = false;
    const counters = {
        left:  { status: false, cont: piece.column },
        right: { status: false, cont: piece.column },
        top:   { status: false, cont: piece.row    },
        down:  { status: false, cont: piece.row    }
    }

    while(!counters.left.status || !counters.right.status || !counters.top.status || !counters.down.status){
        
        if( !counters.left.status  ) counters.left.cont  -= 1;
        if( !counters.top.status   ) counters.top.cont   -= 1;
        if( !counters.right.status ) counters.right.cont += 1;
        if( !counters.down.status  ) counters.down.cont  += 1;

        calculateOptions( counters.left  , piece.row          , counters.left.cont  , columnSelec , rowSelec );
        calculateOptions( counters.right , piece.row          , counters.right.cont , columnSelec , rowSelec );
        calculateOptions( counters.top   , counters.top.cont  , piece.column        , columnSelec , rowSelec );
        calculateOptions( counters.down  , counters.down.cont , piece.column        , columnSelec , rowSelec );
          
    }
    return validate.status;
}

// function towerOptions( direction, row, column, columnSelec, rowSelec ){
        
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