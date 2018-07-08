const customIterator = {
  // using generators
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield this.values[i];
    }
  },
  // manual way
  // [Symbol.iterator]() {
  //   let idx = this.start;
  //   return {
  //     next: () => {
  //       return idx <= this.end
  //         ? { value: this.values[idx++], done: false }
  //         : { value: undefined, done: true }
  //     }
  //   }
  // },
  values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  start: 2,
  end: 10
}

console.log([...customIterator]);


const customIterator = {
  *[Symbol.iterator]() {
    const { start, end, values } = this;
    for (let i=start; i<=end; i++) {
      yield values[i];
    }
  },
  start: 0,
  end: 1,
  values: [0,1,2,3,4,5,6,7,8,9,10]
}