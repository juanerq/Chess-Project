import { calculateOptions, validate } from './functions.js';

export function logicQueen(rowSelec, columnSelec, piece)  {
    validate.status = false;
    const counters = {
        // Torre
        left:      { status: false, cont: piece.column },
        right:     { status: false, cont: piece.column },
        top:       { status: false, cont: piece.row    },
        down:      { status: false, cont: piece.row    },
        // Alfil
        topLeft:   { status: false, contRow: piece.row, contColumn: piece.column },
        topRight:  { status: false, contRow: piece.row, contColumn: piece.column },
        downLeft:  { status: false, contRow: piece.row, contColumn: piece.column },
        downRight: { status: false, contRow: piece.row, contColumn: piece.column }
    }

    while(!counters.left.status || !counters.right.status || !counters.top.status || !counters.down.status || !counters.topLeft.status || !counters.topRight.status || !counters.downLeft.status || !counters.downRight.status){
        
        // Validación de Torre
        if( !counters.left.status      ) counters.left.cont  -= 1;
        if( !counters.top.status       ) counters.top.cont   -= 1;
        if( !counters.right.status     ) counters.right.cont += 1;
        if( !counters.down.status      ) counters.down.cont  += 1;
       
        calculateOptions( counters.left  , piece.row          , counters.left.cont  , columnSelec , rowSelec );
        calculateOptions( counters.right , piece.row          , counters.right.cont , columnSelec , rowSelec );
        calculateOptions( counters.top   , counters.top.cont  , piece.column        , columnSelec , rowSelec );
        calculateOptions( counters.down  , counters.down.cont , piece.column        , columnSelec , rowSelec );

        // Validación de Alfil
        if( !counters.topLeft.status   ) counters.topLeft.contRow   -= 1; counters.topLeft.contColumn   -= 1;         
        if( !counters.topRight.status  ) counters.topRight.contRow  -= 1; counters.topRight.contColumn  += 1; 
        if( !counters.downLeft.status  ) counters.downLeft.contRow  += 1; counters.downLeft.contColumn  -= 1; 
        if( !counters.downRight.status ) counters.downRight.contRow += 1; counters.downRight.contColumn += 1; 

        calculateOptions( counters.topLeft   , counters.topLeft.contRow   , counters.topLeft.contColumn   , columnSelec , rowSelec );
        calculateOptions( counters.topRight  , counters.topRight.contRow  , counters.topRight.contColumn  , columnSelec , rowSelec );
        calculateOptions( counters.downLeft  , counters.downLeft.contRow  , counters.downLeft.contColumn  , columnSelec , rowSelec );
        calculateOptions( counters.downRight , counters.downRight.contRow , counters.downRight.contColumn , columnSelec , rowSelec );
          
    }
    return validate.status;
}
