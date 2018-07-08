const numbers = {
  *[Symbol.iterator]({
    start=0,
    end=100,
    incrementBy=1
  } = {}) {
    for (let i = start; i <= end; i = i + incrementBy) {
      yield i;
    }
  }
};

for (let num of numbers[Symbol.iterator]({
  start: 2,
  end: 10,
  incrementBy: 2
})) {
  console.log(num);
}

for (let num of numbers[Symbol.iterator]({
  start: 6,
  end: 30,
  incrementBy: 4
})) {
  console.log(num)
}

