import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);

    this.distance = 1;
    this.currentStoned = false;
  }

  get stoned() {
    return this.currentStoned;
  }

  set stoned(value) {
    this.currentStoned = value;
  }

  get attack() {
    if (this.stoned) {
      const curAttack =
        this.currentAttack - (this.distance - 1) * 10 - Math.log2(this.distance) * 5;
      if (curAttack < 0) {
        return 0;
      }
      return Math.round(curAttack);
    }

    return this.currentAttack - (this.distance - 1) * 10;
  }

  set attack(value) {
    this.currentAttack = value;
  }
}
