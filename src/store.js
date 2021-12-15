/* eslint-disable max-classes-per-file */

class Entry {
  constructor(Name, Score) {
    this.user = Name;
    this.score = Score;
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

  isInList(obj) {
    let ans = false;
    for (let x = 0; x < this.Lists.length; x += 1) {
      if ((this.Lists[x].user === obj.user) && (this.Lists[x].score === obj.score)) { ans = true; }
    }
    return ans;
  }
}

export { List as default };