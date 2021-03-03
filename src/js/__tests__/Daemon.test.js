import Daemon from '../Daemon';

test('Проверяем, что корректно создается объект', () => {
  const char = new Daemon('Ivan', 'Daemon');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
    currentAttack: 10,
    currentStoned: false,
    distance: 1,
  });
});

test('Геттер должен вернуть корректное значение', () => {
  const satana = new Daemon('Satana');
  satana.attack = 100;
  satana.distance = 2;
  satana.stoned = true;

  expect(satana.attack).toBe(85);
});

test('Геттер должен вернуть корректное значение, если stoned = false', () => {
  const satana = new Daemon('Satana');
  satana.attack = 100;
  satana.distance = 2;
  satana.stoned = false;

  expect(satana.attack).toBe(90);
});

test('Геттер должен вернуть 0, если атака стала отрицательной', () => {
  const satana = new Daemon('Satana');
  satana.attack = 1;
  satana.distance = 2;
  satana.stoned = true;

  expect(satana.attack).toBe(0);
});
