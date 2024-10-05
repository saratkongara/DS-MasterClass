class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const PRIME_MULTIPLE = 31;
    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_MULTIPLE + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let list = this.keyMap[index];

    if (!list) {
      return undefined;
    }

    for (let item of list) {
      if (item[0] === key) {
        return item[1];
      }
    }

    return undefined;
  }
}

let ht = new HashTable();
ht.set("pink", "#007699");
ht.set("blue", "#870012");
console.log(ht.keyMap);

let hexCode = ht.get("pink");
console.log(hexCode);
