import { colorPiece, paintOptions } from '../js/other-functions.js';
import { showFormModal } from './pawn.js'
import { protectKing, castling } from './king.js'

//--------> GUARDA LAS OPCIONES VALIDAS DE MOVIMIENTOS PARA LA [ TORRE - ALFIL - DAMA ] <--------//

export function saveValidOptions( direction, row, column, piece ){
    let colorPieceSelec = colorPiece(piece.piece);

    if( (row >= 0 && row < CONFIG_CHESS.num_rows) && (column >= 0 && column < CONFIG_CHESS.num_columns) ){

        if( !direction.status ){
        
            let color = colorPiece( CHESS[row][column] );
            if(color == GAME_PROGRESS.turn) return direction.status = true;
            
            if( CHESS[row][column].split(" ").join("").length != 0 ){

                let colorPosition = colorPiece(CHESS[row][column]);

                if( colorPieceSelec != colorPosition ) { 
                    MOTION_OPTIONS.push(`${row},${column}`) 
                    OPTIONS_KILL.push(`${row},${column}`)
}
                
                return direction.status = true;
            }
            MOTION_OPTIONS.push(`${row},${column}`)
            OPTIONS_KILL.push(`${row},${column}`)
            
        }   
    }else{
        return direction.status = true;
    }
}

//--------> PINTAR OPCIONES DE MOVIMIENTO CON LA POSICIONES QUE TIENE EL ARRAY( MOTION_OPTIONS ) <--------//

export function paintMotionOptions(options){
    options.forEach(element => {
        const row = element.split(',')[0]
        const column = element.split(',')[1]
        paintOptions(CHESS[row][column], CHESS_VIEW[row][column], GAME_PROGRESS.turn);
    }); 
}

//--------> VALIDAR EL MOVIENTO DE LA PIEZA CON EL ARRAY( MOTION_OPTIONS ) QUE TIENE LAS POSICIONES VALIDAS <--------//

export function validateOption(rowSelec, columnSelec, options){
    let result;
    
    // Enroque: si la pieza selecionada es el Rey y la posición es una Torre
    if((CHOSEN_PIECE.piece == 'W-K' || CHOSEN_PIECE.piece == 'B-K') && 
    (CHESS[rowSelec][columnSelec] == 'W-T' || CHESS[rowSelec] [columnSelec] == 'B-T')){
        let resultKing = castling(rowSelec, columnSelec, CHOSEN_PIECE)

        if(resultKing == false) {
            return result = false; 
        }else{
            return result = 'castling';
        }
    }
    options.forEach(element => {
        const row = element.split(',')[0]
        const column = element.split(',')[1]
        if(rowSelec == row && columnSelec == column) {
            result = element;

            // Cambiar peon por otra ficha( la función funciona si la pieza es un peon )
            showFormModal(rowSelec, columnSelec, CHOSEN_PIECE);

        }
    }); 

    return (!result) ? false : result ;
}
