const HTML_TAGS = {
    canvas: document.getElementById('canvas'),
    ctx: canvas.getContext('2d'),
    
    submit_size: document.getElementById('submit_size'),
    
    row_input: document.getElementById('row'),
    column_input: document.getElementById('column'),
    message_column: document.getElementById('message_column'),
    message_row: document.getElementById('message_row'),

    CONTAINER_CHESS: document.querySelector('.container_chess'),
    CONTAINER_PIECES: document.getElementById('container_pieces'),
    PIECES: document.getElementsByClassName('column'),

    deadPiecesWhite: document.getElementById('dead_pieces_white'),
    deadPiecesBlack: document.getElementById('dead_pieces_black'),

    formModal: document.getElementById('formModal'), 
    selecPieces: document.querySelectorAll('.selecPieces')
}

const CHESS = [];
const CHESS_VIEW = [];

const LETTER = [" A ", " B "," C "," D "," E "," F "," G "," H "," I "," J "," K "," L "," M "," N "," O "," P "," Q "," R "," S "," T "," V "," W "," X "," Y "," Z "];
const listLetter = [];

const PIECES_BLACK = ['B-P', 'B-T', 'B-H', 'B-B', 'B-K', 'B-Q'];                     
const PIECES_WHITE = ['W-P', 'W-T', 'W-H', 'W-B', 'W-K', 'W-Q'];

const CONFIG_CHESS = {
    num_columns: 0,
    num_rows: 0,

    size_square: 0,
    size_piece: 0,

    color_square1: '#e1d0eb',
    color_square2: '#735594',
    colorSelectSquare: '#0da2ef',

    color_circlePiece: '#ff0000',
    color_circlePosition: '#06adf7'
}

const GAME_PROGRESS = {
    turn: 'white',
    deadPiecesWhite: [],
    deadPiecesBlack: []
}

const CHOSEN_PIECE = {
    row: null,
    column: null,
    piece: ''
};
const CHOSEN_POSITION = {
    row: null,
    column: null,
    position: ''
};

