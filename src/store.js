/* eslint-disable max-classes-per-file */

class Entry {
  constructor(name, score) {
    this.Name = name;
    this.Score = score;
  }
}

class List {
  constructor() {
    this.Lists = [];
  }

  addToEnd(name, score) {
    const newEntry = new Entry(name, score);
    this.Lists.push(newEntry);
  }

  removeAt(index) {
    this.Lists.splice(index, 1);
  }
}

export { List as default };