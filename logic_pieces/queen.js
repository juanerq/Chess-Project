import { saveValidOptions } from './functions.js';
import { logicBishop } from './bishop.js'
import { logicTower } from './tower.js'

export function logicQueen( piece )  {
    logicBishop(piece);
    logicTower(piece);

    // const counters = {
    //     // Torre
    //     left:      { status: false, cont: piece.column },
    //     right:     { status: false, cont: piece.column },
    //     top:       { status: false, cont: piece.row    },
    //     down:      { status: false, cont: piece.row    },
    //     // Alfil
    //     topLeft:   { status: false, contRow: piece.row, contColumn: piece.column },
    //     topRight:  { status: false, contRow: piece.row, contColumn: piece.column },
    //     downLeft:  { status: false, contRow: piece.row, contColumn: piece.column },
    //     downRight: { status: false, contRow: piece.row, contColumn: piece.column }
    // }

    // while(!counters.left.status || !counters.right.status || !counters.top.status || !counters.down.status || !counters.topLeft.status || !counters.topRight.status || !counters.downLeft.status || !counters.downRight.status){
        
    //     // Validación de Torre
    //     if( !counters.left.status  ) counters.left.cont  -= 1;
    //     if( !counters.top.status   ) counters.top.cont   -= 1;
    //     if( !counters.right.status ) counters.right.cont += 1;
    //     if( !counters.down.status  ) counters.down.cont  += 1;
       
    //     saveValidOptions( counters.left  , piece.row          , counters.left.cont  );
    //     saveValidOptions( counters.right , piece.row          , counters.right.cont );
    //     saveValidOptions( counters.top   , counters.top.cont  , piece.column        );
    //     saveValidOptions( counters.down  , counters.down.cont , piece.column        );

    //     // Validación de Alfil
    //     if( !counters.topLeft.status   ) counters.topLeft.contRow   -= 1; counters.topLeft.contColumn   -= 1;         
    //     if( !counters.topRight.status  ) counters.topRight.contRow  -= 1; counters.topRight.contColumn  += 1; 
    //     if( !counters.downLeft.status  ) counters.downLeft.contRow  += 1; counters.downLeft.contColumn  -= 1; 
    //     if( !counters.downRight.status ) counters.downRight.contRow += 1; counters.downRight.contColumn += 1; 

    //     saveValidOptions( counters.topLeft   , counters.topLeft.contRow   , counters.topLeft.contColumn   );
    //     saveValidOptions( counters.topRight  , counters.topRight.contRow  , counters.topRight.contColumn  );
    //     saveValidOptions( counters.downLeft  , counters.downLeft.contRow  , counters.downLeft.contColumn  );
    //     saveValidOptions( counters.downRight , counters.downRight.contRow , counters.downRight.contColumn );
          
    // }
}
