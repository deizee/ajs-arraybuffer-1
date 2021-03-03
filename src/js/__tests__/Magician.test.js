import Magician from '../Magician';

test('Проверяем, что корректно создается объект', () => {
  const char = new Magician('Ivan', 'Magician');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
    currentAttack: 10,
    currentStoned: false,
    distance: 1,
  });
});

test('Геттер должен вернуть корректное значение', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = true;

  expect(merlin.attack).toBe(85);
});

test('Геттер должен вернуть корректное значение, если stoned = false', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = false;

  expect(merlin.attack).toBe(90);
});

test('Геттер должен вернуть 0, если атака стала отрицательной', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 1;
  merlin.distance = 2;
  merlin.stoned = true;

  expect(merlin.attack).toBe(0);
});
