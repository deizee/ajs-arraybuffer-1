import Daemon from '../Daemon';

test('Проверяем, что корректно создается объект', () => {
  const char = new Daemon('Ivan', 'Daemon');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
