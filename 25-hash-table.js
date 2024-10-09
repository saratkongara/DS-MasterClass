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

    let keyExists = false;

    for (let pairArray of this.keyMap[index]) {
      if (pairArray[0] === key) {
        pairArray[1] = value;
        keyExists = true;
      }
    }

    if (!keyExists) {
      this.keyMap[index].push([key, value]);
    }
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

  keys() {
    let keysArray = [];

    for (let element of this.keyMap) {
      if (element) {
        for (let pairArray of element) {
          keysArray.push(pairArray[0]);
        }
      }
    }

    return keysArray;
  }

  values() {
    let valuesSet = new Set();

    for (let element of this.keyMap) {
      if (element) {
        for (let pairArray of element) {
          valuesSet.add(pairArray[1]);
        }
      }
    }

    return Array.from(valuesSet.values());
  }
}

let ht = new HashTable();
ht.set("pink", "#007699");
ht.set("blue", "#870012");
ht.set("blue", "#45FA32");

let hexCode = ht.get("pink");
console.log(hexCode);

let keys = ht.keys();
console.log(keys);

let values = ht.values();
console.log(values);
