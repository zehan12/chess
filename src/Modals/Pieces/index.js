import { COLOR, PIECE_NAME } from "../../constant";

export class Piece {
  
  constructor(color, cell, name) {
    this.color = color;
    this.cell = cell;
    this.name = name;
    this.id = Math.random();
    cell.setPiece(this);
    this.isFirstStep = true;
  }

  canMove(target) {
    if (target.piece?.color === this.color) {
      return false;
    }
    return this.checkPositions(this.name,target)
  }

  checkPositions(name, target) {

    switch(name){
      case PIECE_NAME.pawn:
        return this.pawnCanMove(target);
      case PIECE_NAME.rook:
        return this.rookCanMove(target);
      case PIECE_NAME.bishop:
        return this.bishopCanMove(target);
      case PIECE_NAME.knight:
        return this.knightCanMove(target);
        case PIECE_NAME.king:
          return this.kingCanMove(target);
          case PIECE_NAME.queen:
            return this.queenCanMove(target);

    }
  }

  pawnCanMove(target) {
    const direction = this.color === COLOR.black ? 1 : -1;
    const steps = this.isFirstStep ? 2 : 1

    // Move Forward
    if(this.color == 'white'){
      if( this.cell.y == target.y  && this.cell.x + (steps * direction) <= target.x
      && this.cell.x > target.x && target.isEmpty() && this.cell.isEmptyVerticallyFrom(target) ) {
        return true
      }

      //Diagonall
      if (
        target.x === this.cell.x + (1 * direction) &&
        (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) && target.isEnemy(this)
      ) {
        return true;
      }
    }

    if(this.color == 'black'){
      if(this.cell.y == target.y  && this.cell.x + (steps * direction) >= target.x && this.cell.x < target.x && target.isEmpty() && this.cell.isEmptyVerticallyFrom(target)) {
        return true
      }
      //diagonall
      console.log(target.isEnemy(this))
      if (
        target.x === this.cell.x + 1 &&
        (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) && target.isEnemy(this)
      ) {
        return true;
      }
    }


    return false
  }


  isPawnAttack(target) {
    const direction = this.color === COLOR.black ? 1 : -1;
    if (
      target.y === this.y + direction &&
      (target.x === this.x + 1 || target.x === this.x - 1)
    ) {
      return true;
    }
    return false;
  }
  
  rookCanMove(target) {
    if (target.id == this.cell.id) return false
    if (target.x == this.cell.x && this.cell.isEmptyHorizontallyFrom(target) ) {
      if(target.piece) {
        return target.isEnemy(this)
      }
      return true
    }
    if (target.y == this.cell.y && this.cell.isEmptyVerticallyFrom(target)  ) {
      if(target.piece) {
        return target.isEnemy(this)
      }
      return true
    }

  }

  bishopCanMove(target) {
    if (target.id == this.cell.id) return false
    if (this.cell.isEmptyDiagonallyFrom(target) ) {
      if(target.piece) {
        return target.isEnemy(this)
      }
      return true
    }
    return false

  }

  knightCanMove(target) {
      const dx = Math.abs(this.cell.x - target.x);
      const dy = Math.abs(this.cell.y - target.y);

      if(target.piece && !target.isEnemy(this)) return false 
  
      return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }

  queenCanMove(target) {
    if(target.piece && !target.isEnemy(this)) return false 

    if (this.cell.isEmptyVerticallyFrom(target)) {
      return true;
    }
    if (this.cell.isEmptyHorizontallyFrom(target)) {
      return true;
    }
    if (this.cell.isEmptyDiagonallyFrom(target)) {
      return true;
    }
    return false;
}

kingCanMove(target) {
  if (
    Math.abs(target.x - this.cell.x) > 1 ||
    Math.abs(target.y - this.cell.y) > 1
  ) {
    return false;
  }

  if(target.piece && !target.isEnemy(this)) return false 

  if (this.cell.isEmptyVerticallyFrom(target)) {
    return true;
  }

  if (this.cell.isEmptyHorizontallyFrom(target)) {
    return true;
  }

  if (this.cell.isEmptyDiagonallyFrom(target)) {
    return true;
  }
  if (!this.cell.board.isCellUnderAttack(target, this.color)) {
    return false;
  }

  return false;
}
}


export default Piece