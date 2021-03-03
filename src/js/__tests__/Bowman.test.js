import Bowman from '../Bowman';

test('Проверяем, что корректно создается объект', () => {
  const char = new Bowman('Ivan', 'Bowman');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
