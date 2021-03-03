import Magician from '../Magician';

test('Проверяем, что корректно создается объект', () => {
  const char = new Magician('Ivan', 'Magician');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
