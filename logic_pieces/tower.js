import { saveValidOptions } from './functions.js';

export function logicTower( piece ) {   

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

        saveValidOptions( counters.left  , piece.row          , counters.left.cont  , piece);
        saveValidOptions( counters.right , piece.row          , counters.right.cont , piece);
        saveValidOptions( counters.top   , counters.top.cont  , piece.column        , piece);
        saveValidOptions( counters.down  , counters.down.cont , piece.column        , piece);
          
    }
}

