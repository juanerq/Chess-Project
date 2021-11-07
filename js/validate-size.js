import { createGameChess } from '../main.js';

function validateSizeChess(size){
   
    HTML_TAGS.message_column.innerHTML = '';
    HTML_TAGS.message_row.innerHTML = '';


    if(HTML_TAGS.column_input.value < 8 || HTML_TAGS.column_input.value % 2 != 0 ){
        HTML_TAGS.message_column.innerHTML = 'El numero minimo de columnas es 8 y debe ser par.';
    }
    if(HTML_TAGS.row_input.value < 4 || HTML_TAGS.row_input.value %2 != 0){
        HTML_TAGS.message_row.innerHTML = 'El numero minimo de filas es 4 y debe ser par.';
    }
    
    if(HTML_TAGS.message_column.innerHTML == '' && HTML_TAGS.message_row.innerHTML == ''){

        CONFIG_CHESS.num_columns = parseInt(HTML_TAGS.column_input.value);
        CONFIG_CHESS.num_rows = parseInt(HTML_TAGS.row_input.value);

        calculateSize(CONFIG_CHESS);

        HTML_TAGS.row_input.value = "0";
        HTML_TAGS.column_input.value = "0";

        return createGameChess();

    }
}

function calculateSize(CONFIG_CHESS){
        // Calcular tamaño del tablero dependiendo de la resolución de pantalla, 
        // cantidad de filas y columnas
        if(CONFIG_CHESS.num_rows >= CONFIG_CHESS.num_columns){
            CONFIG_CHESS.size_square = (screen.height - (screen.height * 0.25)) / CONFIG_CHESS.num_rows;
        }else{
            CONFIG_CHESS.size_square = (screen.width - (screen.width * 0.40)) / CONFIG_CHESS.num_columns;
        }
        CONFIG_CHESS.size_piece = CONFIG_CHESS.size_square - (CONFIG_CHESS.size_square * 0.25);
}



export { validateSizeChess, calculateSize };