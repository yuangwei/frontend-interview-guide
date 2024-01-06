// 判断一个对象是否包含循环引用
// 通过迭代的方式
function isCycleReference(obj) {
  const cache = new Set(),
    queue = [obj];
  while (queue.length) {
    const cur = queue.shift();
    if (cache.has(cur)) {
      return true;
    }
    if (typeof cur === 'object') {
      cache.add(cur);
    }
    Object.keys(cur).forEach((e) => {
      queue.push(cur[e]);
    });
  }
  return false;
}

// 通过递归的方式
function isCycle(obj, cache = new Set()) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  if (cache.has(obj)) {
    return true;
  }
  cache.add(obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && isCycle(obj[key], cache)) {
      return true;
    }
  }
  return false;
}

// 消除一个对象的循环引用, 使用clone的方式
function cancelCycleReference(obj, cache = new Set()) {
  const res = Array.isArray(obj) ? [] : {},
    keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const cur = keys[i],
      curObj = obj[cur];
    if (typeof curObj !== 'object') {
      res[cur] = curObj;
    } else if (cache.has(res[cur])) {
      res[cur] = null;
    } else {
      cache.add(res[cur]);
      res[cur] = cancelCycleReference(curObj, cache);
    }
  }
  return res;
}

// 在原对象上消除
function cancelCycle(obj, cache = new Set()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (cache.has(obj)) {
    return null;
  }
  cache.add(obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = cancelCycle(obj[key], cache);
    }
  }
  return obj;
}

const cycle1 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: 2,
  },
};

cycle1.c.d = cycle1.c;

console.log('cycle', cancelCycle(cycle1));
