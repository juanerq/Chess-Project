import { movePiece } from './validate-move.js'
import { changeToFigures } from './other-functions.js';

//--------> ORDENAR PIEZAS EN PANTALLA <--------//
function createLabelsPieces(){

    HTML_TAGS.CONTAINER_CHESS.style.border = '4px solid #06adf7';
    const fragment = document.createDocumentFragment();

    for(let indexRow = 0; indexRow < CONFIG_CHESS.num_rows; indexRow++){

        const row = document.createElement('div');
        row.className = 'row';
        CHESS_VIEW[indexRow] = [];

        for(let indexColumn = 0; indexColumn < CONFIG_CHESS.num_columns; indexColumn++){

            const column = document.createElement('div');
            column.className = 'column';
            // Estilos para ajustar el tamaño de las piezas y cuadros
            column.style.width = `${CONFIG_CHESS.size_square}px`;
            column.style.height = `${CONFIG_CHESS.size_square}px`;
            column.style.fontSize = `${CONFIG_CHESS.size_piece}px`;
            column.style.lineHeight = `${CONFIG_CHESS.size_square}px`;

            CHESS_VIEW[indexRow][indexColumn] = column;
            row.appendChild(column);

        }
        fragment.appendChild(row);
    }
    HTML_TAGS.CONTAINER_PIECES.appendChild(fragment);
} 


function orderPiecesScreen(){
    
    for(let indexRow = 0; indexRow < CONFIG_CHESS.num_rows; indexRow++){

        for(let indexColumn = 0; indexColumn < CONFIG_CHESS.num_columns; indexColumn++){
    
            // Ingresar fichas y espacios en blanco a la cada etiqueta
            CHESS_VIEW[indexRow][indexColumn].innerHTML = changeToFigures(CHESS[indexRow][indexColumn]);
    
            CHESS_VIEW[indexRow][indexColumn].addEventListener('click', () => {
                return movePiece(indexRow, indexColumn, CHESS_VIEW[indexRow][indexColumn], CHESS);
            })
        }
    }
}

export { orderPiecesScreen, createLabelsPieces };