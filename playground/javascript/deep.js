// 实现两个对象的深比较，要求考虑尽可能全面
function deepEq(sourceObj, targetObj) {
  const sourceKeys = Object.keys(sourceObj),
    targetKeys = Object.keys(targetObj);
  if (sourceKeys.length !== targetKeys.length) {
    return false;
  }
  for (let i = 0; i < sourceKeys.length; i++) {
    const curSObj = sourceObj[sourceKeys[i]],
      curTObj = targetObj[targetKeys[i]];

    if (typeof curSObj !== 'object' && typeof curTObj !== 'object') {
      return curSObj === curTObj;
    }
    return deepEq(curSObj, curTObj);
  }
}
// 实现对象深拷贝，要求考虑尽可能全面
function deepClone(obj) {
  const res = Array.isArray(obj) ? [] : {},
    keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const cur = keys[i],
      curObj = obj[cur];
    if (typeof curObj !== 'object') {
      res[cur] = curObj;
    } else if (Object.prototype.toString.call(curObj) === '[object Map]') {
      res[cur] = new Map();
    } else {
      res[cur] = deepClone(curObj);
    }
  }
  return res;
}

const deepClone1 = {
  a: 1,
  b: {
    c() { },
    d: {
      e: new Map([['a', '1']]),
      f: Symbol(0),
      g: {
        h: '1',
      },
    },
  },
};

const deepClone2 = {
  a: 1,
  b: {
    c() { },
    d: {
      e: new Map([['a', '2']]),
      f: Symbol(0),
      g: {
        h: '1',
      },
    },
  },
};

const deepEq1 = {
  a: 1,
  b: 2,
  c: {
    c: 3,
  },
};

const deepEq2 = {
  a: 1,
  b: 2,
  c: {
    c: 3,
  },
};

// const deepClone2 = deepClone(deepClone1);

// deepClone2.a = 2;

// console.log(deepClone1, deepClone2);

console.log(deepEq(deepClone1, deepClone2));
