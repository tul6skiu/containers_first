import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!(character instanceof Character)) {
      throw new Error('Можно добавлять только объекты класса Character');
    }
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже в команде');
    }
    this.members.add(character);
    return this;
  }

  addAll(...heroes) {
    heroes.forEach((hero) => {
      this.members.add(hero);
    });
  }

  toArray() {
    return [...this.members];
  }
}
