import { validatePieceMovement } from '../main.js';
import { colorPiece } from '../js/other-functions.js';

export function logicKing( piece ){
    let colorPieceSelec = colorPiece(CHESS[piece.row][piece.column]);
    
    for(let row = piece.row - 1; row <= piece.row + 1; row++){
        for(let column = piece.column - 1; column <= piece.column + 1; column++){
            
            if(row >= 0 && column >= 0 && row < CONFIG_CHESS.num_rows && column < CONFIG_CHESS.num_rows ){
                let colorPosition = colorPiece(CHESS[row][column]);

                if( CHESS[row][column].split(" ").join("").length != 0 && colorPieceSelec != colorPosition || colorPosition == '') {
                    MOTION_OPTIONS.push(`${row},${column}`);
                    OPTIONS_KILL.push(`${row},${column}`);
                }
            }
        }
    }
}

export function protectKing(rowSelec, columnSelec) {

    OPTIONS_KILL.length = 0;
    const result = [];
    for(let row = 0; row < CONFIG_CHESS.num_rows; row++){
        for(let column = 0; column < CONFIG_CHESS.num_columns; column++){
            
            let piece = CHESS[row][column];
            let color = colorPiece(piece);
            
            if(color != GAME_PROGRESS.turn && color != ''){
                validatePieceMovement(piece, { row, column, piece });

                OPTIONS_KILL.forEach(element => {
                    const rowOption = element.split(',')[0]
                    const columnOption = element.split(',')[1]
                    if(rowSelec == rowOption && columnSelec == columnOption){
                        result.push(`${row},${column}`);
                    }
                })
                OPTIONS_KILL.length = 0;
            }
        }
    }
    return result;
}

export const movedPieces = {
    white: { king: false, towerLeft: false, towerRight: false },
    black: { king: false, towerLeft: false, towerRight: false }
}

export function castling( rowSelec, columnSelec, piece ){

    let result = true;
    let king = colorPiece(piece.piece);
    let tower = colorPiece(CHESS[rowSelec][columnSelec]);

    if(king == tower){
        if(movedPieces[king].king) return result = false; 
        if(columnSelec < piece.column && !movedPieces[king].towerLeft){
            
            for(let i = piece.column - 1; i > 0; i--){
                if(CHESS[piece.row][i].split(" ").join("").length != 0){
                    return result = false
                }
            }
            let enemyPieces = protectKing(rowSelec, piece.column - 2, piece) 
            if(enemyPieces.length > 0) return result = false; 
            
        }else if(columnSelec > piece.column && !movedPieces[king].towerRight){ 
            
            for(let i = piece.column + 1; i < CONFIG_CHESS.num_columns - 1; i++){
                if(CHESS[piece.row][i].split(" ").join("").length != 0){
                    return result = false
                }
            }
            let enemyPieces = protectKing(rowSelec, piece.column + 2, piece) 
            if(enemyPieces.length > 0) return result = false; 
        }else{
            return result = false;
        }
        return result;
    }
    return result = false;
}