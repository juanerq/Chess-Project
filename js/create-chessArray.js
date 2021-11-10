import { orderPieces } from './other-functions.js';

//--------> CREAR ARRAY DEL TABLERO <--------//

function createChessArray(sizeRows, sizeColumns){
    for(let i = 0; i < sizeRows; i++){
        CHESS[i] = [];
        for(let j = 0; j < sizeColumns; j++){
            CHESS[i][j] = '   ';
            if(i == 0){
                listLetter.push(LETTER[j]);  
            }
        }
    } 
}


//--------> COLOCAR Y ODENAR FICHAS EN ARRAY <--------//

function putPiecesArray(){
    let posStart = (CONFIG_CHESS.num_columns - 8) / 2;
    let posFinish = posStart + 8;
    let posPieces = 1;

    for(let i = posStart; i < posFinish; i++){
        if(posPieces != 9){
            CHESS[0][i] = orderPieces(posPieces, 'black'); // Negros

            CHESS[CONFIG_CHESS.num_rows-1][i] = orderPieces(posPieces, 'white'); // Blancos

            posPieces ++;
        }
        // Dibujar peones
        CHESS[1][i] = orderPieces(9, 'black'); // Negros

        CHESS[CONFIG_CHESS.num_rows-2][i] = orderPieces(9, 'white'); // Blancos
    }
}


    

export { createChessArray, putPiecesArray }