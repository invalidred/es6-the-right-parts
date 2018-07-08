const upper = function upper(strings, ...values) {
  return strings.reduce((acc, string, index) => {
    return index === 0
      ? string
      : `${acc}${values[index - 1].toUpperCase()}${string}`;
  }, '');
}

const name = 'kyle';
const twitter = 'getify';
const classname = 'es6 workshop';

console.log(
  upper`Hello ${name} (@${twitter}), welcome to the ${classname}`,
  '\n',
  'Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP'
)