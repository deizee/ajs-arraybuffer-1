import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name) {
    super(name, 'Daemon');

    this.attack = 10;
    this.defence = 40;
  }
}
