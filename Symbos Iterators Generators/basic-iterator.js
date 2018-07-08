function *gen() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}
const genInstance = gen();
console.log(genInstance.next());
console.log(genInstance.next());
for (let value of gen()) {
  console.log(value);
}
