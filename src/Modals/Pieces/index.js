import { COLOR, PIECE_NAME } from "../../constant";

export class Piece {
  
  constructor(color, cell, name) {
    this.color = color;
    this.cell = cell;
    this.cell.piece = this;
    this.name = name;
    this.id = Math.random();
    this.cell.setPiece(this);
    this.isFirstStep = true;
  }

  canMove(target) {
    if (target.figure?.color === this.color) {
      return false;
    }
    return this.checkPositions(this.name,target)
  }

  checkPositions(name, target) {

    switch(name){
      case PIECE_NAME.pawn:
        return this.pawnCanMove(target);
    }
  }

  pawnCanMove(target) {
    const direction = this.color === COLOR.black ? 1 : -1;
    const steps = this.isFirstStep ? 2 : 1

    // Move Forward
    if( this.cell.y == target.y  && this.cell.x + (steps * direction) <= target.x
      && this.cell.x > target.x && target.isEmpty() && this.cell.isEmptyVerticallyFrom(target) ) {
      return true
    }

    // Check Diagonal
    if (
      target.x === this.cell.x + (1 * direction) &&
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) && target.isEnemy(this)
    ) {
      return true;
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
  isPawnMove(target) {
    const direction = this.color === COLOR.black ? 1 : -1;
    if (
      (target.y === this.y + direction ||
        (isFirstStep && target.y === this.y + firstStepDirection)) &&
      target.x === this.x &&
      this.board.getCell(target.x, target.y).isEmpty()
    ) {
      if (
        isFirstStep &&
        !this.board.getCell(this.x, this.y + direction).isEmpty()
      ) {
        return false;
      }
      return true;
    }
    if (
      target.y === this.y + direction &&
      (target.x === this.x + 1 || target.x === this.x - 1) &&
      this.isEnemy(target)
    ) {
      return true;
    }
    return false;
  }
}


export default Piece