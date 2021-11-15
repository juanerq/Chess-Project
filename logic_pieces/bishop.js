import { saveValidOptions } from './functions.js';

export function logicBishop(piece){
    const counters = {
        topLeft:   { status: false, contRow: piece.row, contColumn: piece.column , foundKing: false },
        topRight:  { status: false, contRow: piece.row, contColumn: piece.column , foundKing: false },
        downLeft:  { status: false, contRow: piece.row, contColumn: piece.column , foundKing: false },
        downRight: { status: false, contRow: piece.row, contColumn: piece.column , foundKing: false }
    }

    while(!counters.topLeft.status || !counters.topRight.status || !counters.downLeft.status || !counters.downRight.status){

        if( !counters.topLeft.status   ) counters.topLeft.contRow   -= 1; counters.topLeft.contColumn   -= 1;         
        if( !counters.topRight.status  ) counters.topRight.contRow  -= 1; counters.topRight.contColumn  += 1; 
        if( !counters.downLeft.status  ) counters.downLeft.contRow  += 1; counters.downLeft.contColumn  -= 1; 
        if( !counters.downRight.status ) counters.downRight.contRow += 1; counters.downRight.contColumn += 1; 

        saveValidOptions( counters.topLeft   , counters.topLeft.contRow   , counters.topLeft.contColumn   , piece);
        saveValidOptions( counters.topRight  , counters.topRight.contRow  , counters.topRight.contColumn  , piece);
        saveValidOptions( counters.downLeft  , counters.downLeft.contRow  , counters.downLeft.contColumn  , piece);
        saveValidOptions( counters.downRight , counters.downRight.contRow , counters.downRight.contColumn , piece);
          
    }
}

