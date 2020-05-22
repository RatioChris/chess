/*
 * board
 */
export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
export const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1']
export const BOARD = RANKS.reduce((arr, rank) => {
  FILES.forEach(file => {
    const id = `${file}${rank}`
    arr.push({ id: id })
  })
  return arr
}, [])

/*
 * pieces
 */
const PIECES = [
  { id: 'wr1', name: 'rook', color: 'white' },
  { id: 'wk1', name: 'knight', color: 'white' },
  { id: 'wb1', name: 'bishop', color: 'white' },
  { id: 'wk', name: 'king', color: 'white' },
  { id: 'wq', name: 'queen', color: 'white' },
  { id: 'wb2', name: 'bishop', color: 'white' },
  { id: 'wk2', name: 'knight', color: 'white' },
  { id: 'wr2', name: 'rook', color: 'white' },
  { id: 'wp1', name: 'pawn', color: 'white' },
  { id: 'wp2', name: 'pawn', color: 'white' },
  { id: 'wp3', name: 'pawn', color: 'white' },
  { id: 'wp4', name: 'pawn', color: 'white' },
  { id: 'wp5', name: 'pawn', color: 'white' },
  { id: 'wp6', name: 'pawn', color: 'white' },
  { id: 'wp7', name: 'pawn', color: 'white' },
  { id: 'wp8', name: 'pawn', color: 'white' },
  { id: 'bp1', name: 'pawn', color: 'black' },
  { id: 'bp2', name: 'pawn', color: 'black' },
  { id: 'bp3', name: 'pawn', color: 'black' },
  { id: 'bp4', name: 'pawn', color: 'black' },
  { id: 'bp5', name: 'pawn', color: 'black' },
  { id: 'bp6', name: 'pawn', color: 'black' },
  { id: 'bp7', name: 'pawn', color: 'black' },
  { id: 'bp8', name: 'pawn', color: 'black' },
  { id: 'br1', name: 'rook', color: 'black' },
  { id: 'bk1', name: 'knight', color: 'black' },
  { id: 'bb1', name: 'bishop', color: 'black' },
  { id: 'bq', name: 'queen', color: 'black' },
  { id: 'bk', name: 'king', color: 'black' },
  { id: 'bb2', name: 'bishop', color: 'black' },
  { id: 'bk2', name: 'knight', color: 'black' },
  { id: 'br2', name: 'rook', color: 'black' }
]
const POSITIONS = [
  { id: 'wr1', position: 'a1' },
  { id: 'wk1', position: 'b1' },
  { id: 'wb1', position: 'c1' },
  { id: 'wk', position: 'd1' },
  { id: 'wq', position: 'e1' },
  { id: 'wb2', position: 'f1' },
  { id: 'wk2', position: 'g1' },
  { id: 'wr2', position: 'h1' },
  { id: 'wp1', position: 'a2' },
  { id: 'wp2', position: 'b2' },
  { id: 'wp3', position: 'c2' },
  { id: 'wp4', position: 'd2' },
  { id: 'wp5', position: 'e2' },
  { id: 'wp6', position: 'f2' },
  { id: 'wp7', position: 'g2' },
  { id: 'wp8', position: 'h2' },
  { id: 'bp1', position: 'a7' },
  { id: 'bp2', position: 'b7' },
  { id: 'bp3', position: 'c7' },
  { id: 'bp4', position: 'd7' },
  { id: 'bp5', position: 'e7' },
  { id: 'bp6', position: 'f7' },
  { id: 'bp7', position: 'g7' },
  { id: 'bp8', position: 'h7' },
  { id: 'br1', position: 'a8' },
  { id: 'bk1', position: 'b8' },
  { id: 'bb1', position: 'c8' },
  { id: 'bq', position: 'd8' },
  { id: 'bk', position: 'e8' },
  { id: 'bb2', position: 'f8' },
  { id: 'bk2', position: 'g8' },
  { id: 'br2', position: 'h8' }
]
export const INIT_STATE = POSITIONS.reduce((arr, position) => {
  const piece = PIECES.find(obj => obj.id === position.id)
  return [...arr, { ...position, ...piece }]
}, [])
