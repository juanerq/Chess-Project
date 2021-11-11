import { movePiece } from './validate-move.js'
import { changeToFigures, colorPiece } from './other-functions.js';

//--------> ORDENAR PIEZAS EN PANTALLA <--------//
function createLabelsPieces(){

    HTML_TAGS.CONTAINER_CHESS.style.border = '4px solid #06adf7';
    const fragment = document.createDocumentFragment();

    for(let iRow = 0; iRow < CONFIG_CHESS.num_rows; iRow++){

        const row = document.createElement('div');
        row.className = 'row';
        CHESS_VIEW[iRow] = [];

        for(let iColumn = 0; iColumn < CONFIG_CHESS.num_columns; iColumn++){

            const column = document.createElement('div');
            column.className = 'column';
            // Estilos para ajustar el tamaño de las piezas y cuadros
            column.style.width = `${CONFIG_CHESS.size_square}px`;
            column.style.height = `${CONFIG_CHESS.size_square}px`;
            column.style.fontSize = `${CONFIG_CHESS.size_piece}px`;
            column.style.lineHeight = `${CONFIG_CHESS.size_square}px`;

            CHESS_VIEW[iRow][iColumn] = column;
            row.appendChild(column);

        }
        fragment.appendChild(row);
    }
    HTML_TAGS.CONTAINER_PIECES.appendChild(fragment);
} 


// function orderPiecesScreen(){
    
//     for(let iRow = 0; iRow < CONFIG_CHESS.num_rows; iRow++){

//         for(let iColumn = 0; iColumn < CONFIG_CHESS.num_columns; iColumn++){
    
//             // Ingresar fichas y espacios en blanco a la cada etiqueta
//             CHESS_VIEW[iRow][iColumn].innerHTML = changeToFigures(CHESS[iRow][iColumn]);
    
//             CHESS_VIEW[iRow][iColumn].addEventListener('click', () => {
//                 return movePiece(iRow, iColumn, CHESS_VIEW[iRow][iColumn], CHESS);
//             })
//         }
//     }
// }

function orderPiecesScreen(){
    
    for(let iRow = 0; iRow < CONFIG_CHESS.num_rows; iRow++){

        for(let iColumn = 0; iColumn < CONFIG_CHESS.num_columns; iColumn++){
    
            // let color = colorPiece(CHESS[iRow][iColumn])
            // if(color == 'white'){
            //     let changeColor = changeToFigures(CHESS[iRow][iColumn].replace('W', 'B'))
            //     CHESS_VIEW[iRow][iColumn].innerHTML = `${changeColor}<div>${changeToFigures(CHESS[iRow][iColumn])}</div>`;
            // }else{
                // CHESS_VIEW[iRow][iColumn].innerHTML = changeToFigures(CHESS[iRow][iColumn]);
            // }
            
            // Ingresar fichas y espacios en blanco a la cada etiqueta

            CHESS_VIEW[iRow][iColumn].innerHTML = changeToFigures(CHESS[iRow][iColumn]);
    
            CHESS_VIEW[iRow][iColumn].addEventListener('click', () => {
                return movePiece(iRow, iColumn, CHESS_VIEW[iRow][iColumn], CHESS);
            })
        }
    }
}


export { orderPiecesScreen, createLabelsPieces };