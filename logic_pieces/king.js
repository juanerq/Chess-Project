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

export function protectKing(rowSelec, columnSelec, piece){
    let result = true;
    
    if(piece.piece == 'W-K' || piece.piece == 'B-K'){
        OPTIONS_KILL.length = 0;
        for(let row = 0; row < CONFIG_CHESS.num_rows; row++){
            for(let column = 0; column < CONFIG_CHESS.num_columns; column++){
                
                let color = colorPiece(CHESS[row][column]);

                if(color != GAME_PROGRESS.turn && color != ''){
                    validatePieceMovement(CHESS[row][column], { row, column, piece: CHESS[row][column]});

                    OPTIONS_KILL.forEach(element => {
                        const row = element.split(',')[0]
                        const column = element.split(',')[1]
                        if(rowSelec == row && columnSelec == column){
                            console.log(rowSelec,'/',columnSelec);
                            result = false;
                        }
                    })

                }
            }
        }
    }
    return result;
}


export function castling( rowSelec, columnSelec, piece ){

    let result = true;
    let king = colorPiece(piece.piece);
    let tower = colorPiece(CHESS[rowSelec][columnSelec]);

    if(king == tower){
        
        if(columnSelec < piece.column){
            let resultKing = protectKing(rowSelec, piece.column - 2, piece) 
            if(!resultKing) return result = false; 
            
            for(let i = piece.column - 1; i > 0; i--){
                if(CHESS[piece.row][i].split(" ").join("").length != 0){
                    return result = false
                }
            }

        }else{ 
            let resultKing = protectKing(rowSelec, piece.column + 2, piece) 
            if(!resultKing) return result = false; 

            for(let i = piece.column + 1; i < CONFIG_CHESS.num_columns - 1; i++){
                if(CHESS[piece.row][i].split(" ").join("").length != 0){
                    return result = false
                }
            }
        }
        return result;
    }
    return result = false
}