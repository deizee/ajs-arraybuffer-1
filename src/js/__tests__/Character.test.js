import Character from '../Character';

test('Проверяем, что если имя персонажа меньше 2 символов, то выпадет ошибка', () => {
  expect(() => new Character('I', 'Bowman')).toThrow();
});

test('Проверяем, что если имя персонажа больше 10 символов, то выпадет ошибка', () => {
  expect(() => new Character('Ivaaaaaaaaaaan', 'Bowman')).toThrow();
});

test('Проверяем, что если неверно указан тип персонажа, то выпадет ошибка', () => {
  expect(() => new Character('Ivan', 'Warrior')).toThrow();
});

test('Проверяем, что если имя не является строкой, то выпадет ошибка', () => {
  expect(() => new Character(123, 'Bowman')).toThrow();
});

test('Проверяем, что корректно создается объект', () => {
  const char = new Character('Ivan', 'Bowman');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});
