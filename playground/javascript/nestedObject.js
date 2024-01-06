// 遍历嵌套的对象并将每一个value放入数组中
/**
 * function parseNestedObject(obj) {}
 *
 * const inputObject = {
 *    "level1": {
 *      "name": "tom",
 *      "level2": {
 *        "name": "jerry",
 *        "age": 18
 *      },
 *      "level3": {
 *        "name": "mike"
 *      }
 *    }
 * }
 *
 * const output = parseNestedObject(inputObject) // ["tom", "jerry", 18, "mike"]
 *
 */

function parseNestedObject(obj) {
  if (typeof obj !== 'object') {
    return [obj];
  }
  let arr = [];
  for (let o in obj) {
    if (obj.hasOwnProperty(o)) {
      arr = arr.concat(parseNestedObject(obj[o]));
    }
  }
  return arr;
}

const inputObject = {
  level1: {
    name: 'tom',
    level2: {
      name: 'jerry',
      age: 18,
    },
    level3: {
      name: 'mike',
    },
  },
};
const output = parseNestedObject(inputObject);

console.log(output);
