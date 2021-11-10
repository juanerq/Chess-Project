//--------> CAMBIAR LETRAS A FICHAS <--------//

function changeToFigures(array){
    switch (array) {
        case 'B-P': case 'W-P': if(array == 'B-P'){return'♟'} return '♙'
        case 'B-T': case 'W-T': if(array == 'B-T'){return'♜'} return '♖'
        case 'B-H': case 'W-H': if(array == 'B-H'){return'♞'} return '♘'
        case 'B-B': case 'W-B': if(array == 'B-B'){return'♝'} return '♗'
        case 'B-Q': case 'W-Q': if(array == 'B-Q'){return'♛'} return '♕'
        case 'B-K': case 'W-K': if(array == 'B-K'){return'♚'} return '♔'
        default: return ''
    }
}


//--------> IDENTIFICAR EL COLOR DE UNA PIEZA <--------//

function colorPiece(piece){
    let result;
    const BLACK = ['B-P', 'B-T', 'B-H', 'B-B', 'B-K', 'B-Q', '♟', '♜', '♞', '♝', '♛', '♚'];                     
    const WHITE = ['W-P', 'W-T', 'W-H', 'W-B', 'W-K', 'W-Q', '♙', '♖', '♘', '♗', '♕', '♔'];
    result = BLACK.find(element => element == piece);
    if(result) return 'black' 
    result = WHITE.find(element => element == piece);
    if(result) return 'white'
}

//--------> ORDENAS PIEZAS <--------//

function orderPieces(posPieces, colorPiece = 'white'){
    switch (posPieces) {
        case 9:          if(colorPiece == 'black') return 'B-P';  return 'W-P'; //Peón
        case 1: case 8:  if(colorPiece == 'black') return 'B-T';  return 'W-T'; //Torre
        case 2: case 7:  if(colorPiece == 'black') return 'B-H';  return 'W-H'; //Caballo
        case 3: case 6:  if(colorPiece == 'black') return 'B-B';  return 'W-B'; //Alfil
        case 4:          if(colorPiece == 'black') return 'B-Q';  return 'W-Q'; //Dama
        case 5:          if(colorPiece == 'black') return 'B-K';  return 'W-K'; //Rey
        default:
    }
}

//--------> IMPRIMIR TABLERO <--------//

function printChess(listLetter, chess, GAME_PROGRESS){
    console.log(`[${listLetter}]`);
    for(let index in chess){
        console.log(`[${chess[index]}] ${1 + parseInt(index)}`);
    }
    console.log(`[ Fichas comidas ]
White => ${GAME_PROGRESS.deadPiecesWhite} 
Black => ${GAME_PROGRESS.deadPiecesBlack}`);
}

//--------> VISUALIZAR ( COLOR ROJO ) CUANDO NO SE PUEDE SELECCIONA UN CAMPO <--------//

function errorColorRed(posError) {
    CHESS_VIEW[posError.row][posError.column].style.backgroundColor = 'red';
    
    setTimeout(() => {
        for(const element of HTML_TAGS.PIECES){
            if(element.style.backgroundColor == 'red'){
                return element.style.backgroundColor = '';;                
            }
        } 
    }, 300);
}

//--------> PINTAR CAMPOS VACIOS Y PIEZAS DEL OTRO EQUIPO QUE SE PUEDEN COMER <--------//

function paintOptions(piece, tag, turn){
    let color = colorPiece(piece);
    if(color != turn){
        tag.style.backgroundColor = 'orange';
    }
    if(tag.innerHTML.split(" ").join("").length == 0){
        tag.style.backgroundColor = 'yellow';
    }
}

export { changeToFigures, printChess, orderPieces, errorColorRed, colorPiece, paintOptions };

