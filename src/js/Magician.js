import MathChar from './MathChar';

export default class Magician extends MathChar {
  constructor(name) {
    super(name, 'Magician');

    this.attack = 10;
    this.defence = 40;
  }
}
