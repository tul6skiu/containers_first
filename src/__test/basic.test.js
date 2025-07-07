import Team from '../basic';
import Character from '../character';

describe('Team', () => {
  let team;
  let hero1;
  let hero2;

  beforeEach(() => {
    team = new Team();
    hero1 = new Character('Воин', 100);
    hero2 = new Character('Маг', 80);
  });

  test('add() успешно добавляет персонажа', () => {
    team.add(hero1);
    expect(team.members.has(hero1)).toBe(true);
  });

  test('add() выбрасывает ошибку при добавлении не-Character', () => {
    expect(() => {
      team.add({ name: 'Не персонаж' });
    }).toThrow('Можно добавлять только объекты класса Character');
  });

  test('add() выбрасывает ошибку при добавлении дубликата', () => {
    team.add(hero1);
    expect(() => {
      team.add(hero1);
    }).toThrow('Такой персонаж уже в команде');
  });

  test('addAll() добавляет несколько персонажей', () => {
    team.addAll(hero1, hero2);
    expect(team.members.has(hero1)).toBe(true);
    expect(team.members.has(hero2)).toBe(true);
  });

  test('toArray() возвращает массив персонажей', () => {
    team.addAll(hero1, hero2);
    const arr = team.toArray();
    expect(Array.isArray(arr)).toBe(true);
    expect(arr).toContain(hero1);
    expect(arr).toContain(hero2);
  });
});
