// hash maps

class HashMaps {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hashedKey(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    let count = total % this.size;
    return count;
  }

  setHash(key, value) {
    const hashedKey = this.hashedKey(key);
    // this.table[hashedKey] = value;
    let bucket = this.table[hashedKey];
    if (bucket) {
      let alreadyValue = bucket?.find((item) => item[0] === key);
      if (alreadyValue) {
        alreadyValue[1] = value;
      } else {
        bucket.push([key, value]);
      }
    } else {
      this.table[hashedKey] = [[key, value]];
    }
  }

  getHash(key) {
    const hashedKey = this.hashedKey(key);
    // return this.table[hashedKey];
    let bucket = this.table[hashedKey];
    if(bucket){
      let findItem = bucket?.find(item => item[0]===key);
      if(findItem){
        return findItem[1];
      }
      return null
    }
    return null;
  }

  display() {
    if (this.size) {
      for (let i = 0; i < this.table.length; i++) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const person = new HashMaps(20);
person.setHash("name", "nitesh");
person.setHash("age", "20");
person.setHash("gae", "10");
person.setHash("mane", "jha");
person.setHash("anme", "kumar");
person.display();
console.log(person.getHash("gae"));
