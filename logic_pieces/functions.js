import { colorPiece, paintOptions, removeRest, endGame } from '../js/other-functions.js';
import { validatePieceMovement } from '../main.js';
import { castling, movedPieces, protectKing } from './king.js'

//--------> GUARDA LAS OPCIONES VALIDAS DE MOVIMIENTOS PARA LA [ TORRE - ALFIL - DAMA ] <--------//

export function saveValidOptions( direction, row, column, piece ){

    let colorPieceSelec = colorPiece(piece.piece);
    if( (row >= 0 && row < CONFIG_CHESS.num_rows) && (column >= 0 && column < CONFIG_CHESS.num_columns) ){
        
        if( !direction.status ){
            let colorPosition = colorPiece(CHESS[row][column]);
            if(colorPosition == colorPieceSelec) {
                OPTIONS_KILL.push(`${row},${column}`);
                return direction.status = true;
            }
            if( CHESS[row][column].split(" ").join("").length != 0 ){
                
                if( colorPieceSelec != colorPosition ) { 
                    if(!direction.foundKing) MOTION_OPTIONS.push(`${row},${column}`) 
                    OPTIONS_KILL.push(`${row},${column}`);
                    if(CHESS[row][column][2] == 'K' && colorPosition != colorPieceSelec){
                        direction.foundKing = true;
                    }
                }
                
                if(!direction.foundKing) return direction.status = true;
            }
            if(!direction.foundKing) MOTION_OPTIONS.push(`${row},${column}`)
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

export function validateOption(position, piece, options){
    let result;

    // Enroque: si la pieza selecionada es el Rey y la posición es una Torre
    if(piece.piece[2] == 'K' && CHESS[position.row][position.column][2] == 'T'){
        let resultKing = castling(position.row, position.column, piece);

        if(resultKing) return result = 'castling';
    }

    result = options.find(element => position.row == element.split(',')[0] && position.column == element.split(',')[1]);

    if(result != undefined){
        // Proteger al Rey
        if(piece.piece[2] == 'K'){
            let enemyPieces = protectKing(position.row, position.column);
            if(enemyPieces.length > 0) result = false;
        }

        // Identificar que pieza( Rey o Torre) se han movido por lo menos una vez
        let color = colorPiece(piece.piece)
        if(piece.piece[2] == 'K') movedPieces[color].king = true;

        if( (piece.piece == 'W-T' && !movedPieces['white'].king) || 
            (piece.piece == 'B-T' && !movedPieces['black'].king) ){
            if(piece.column < CONFIG_CHESS.num_columns/2 && !movedPieces[color].towerLeft){
                movedPieces[color].towerLeft = true;
            }else if(piece.column > CONFIG_CHESS.num_columns/2 && !movedPieces[color].towerRight){
                movedPieces[color].towerRight = true;
            }
        }
    }
    return (!result) ? false : result ;
}


export function kingJake(){ 
    // Se busca el rey
    for(let row = 0; row < CONFIG_CHESS.num_rows; row++){
        for(let column = 0; column < CONFIG_CHESS.num_columns; column++){

            let color = colorPiece(CHESS[row][column]);
            let typePiece = CHESS[row][column];

            if(color == GAME_PROGRESS.turn && typePiece[2] == 'K'){
                let enemyPieces = protectKing(row, column);
                if(enemyPieces.length > 0){

                    GAME_PROGRESS.jake = true;
                    let resultCheckmate = checkmate(row, column);
                    if(resultCheckmate){
                        GAME_PROGRESS.checkmate = true;
                        GAME_PROGRESS.turn = GAME_PROGRESS.turn == 'white' ? 'black' : 'white';
                        return endGame(GAME_PROGRESS.turn);
                    }
                    CHESS_VIEW[row][column].style.backgroundColor = 'orange';  
                    for(const element of enemyPieces){
                        const rowOption = element.split(',')[0]
                        const columnOption = element.split(',')[1]
                        paintOptions(CHESS[rowOption][columnOption], CHESS_VIEW[rowOption][columnOption], GAME_PROGRESS);
                    }   
                    return;    
                }
                GAME_PROGRESS.jake = false;
                return removeRest(GAME_PROGRESS.jake)
            }
        }
    }
}

function checkmate(rowKing, columnKing){
    let result = true;
    MOTION_OPTIONS.length = 0;
    validatePieceMovement('W-K', { row:rowKing, column: columnKing, piece: 'W-K' });

    MOTION_OPTIONS.forEach(element => {
        const rowOption = element.split(',')[0]
        const columnOption = element.split(',')[1]
        let enemyPieces = protectKing(rowOption, columnOption);

        if(enemyPieces.length == 0) {
            return result = false;
        }
    })
    return result;
}