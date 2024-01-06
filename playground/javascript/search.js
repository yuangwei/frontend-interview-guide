// 判断一个对象中是否包含某个Key
function hasKey(obj, key) {
  const queue = [obj];
  while (queue.length) {
    const cur = queue.shift();
    if (typeof cur !== 'object') {
      continue;
    }
    const keys = Object.keys(cur);
    for (let i = 0; i < keys.length; i++) {
      const curKey = keys[i];
      if (curKey === key) {
        return true;
      }
      queue.push(cur[curKey]);
    }
  }
  return false;
}

const objtest = {
  name: 'test',
  age: 18,
  element: {
    test: 1,
    test2: {
      test4: 3,
    },
  },
};

console.log('hasKey', hasKey(objtest, 'test3'));
