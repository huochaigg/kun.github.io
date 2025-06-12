## WeakMap的特点

* WeakMap的key必须是对象，不能用原始值作为 key
* WeakMap的键是弱引用的，当这个键没有被其他强引用，就会被垃圾回收器（GC）回收
* 不可枚举
* 不可获取size

## 基本使用

```
const wm = new WeakMap();

const obj = { id: 123 };

wm.set(obj, 'some data');

wm.get(obj); // 'some data'

wm.has(obj); // true

wm.delete(obj); // 删除 key 对应的 entry
```

## WeakMap的设计

* 防止内存泄漏
* 给对象绑定临时数据
* 适用设置私有属性
* 为对象绑定额外属性，但又不污染对象本身

绑定私有属性的例子：

```
const wm = new WeakMap();

function trackUser(userObj) {
  wm.set(userObj, { loginAt: Date.now() });
}

function getLoginTime(userObj) {
  return wm.get(userObj)?.loginAt;
}

let user = { name: 'Alice' };
trackUser(user);

console.log(getLoginTime(user)); // 输出时间戳

user = null; // user 不再使用，wm 中自动被 GC 清除
```

缓存计算结果：

```
const expensiveCache = new WeakMap();

function compute(obj) {
  if (!expensiveCache.has(obj)) {
    const result = heavyComputation(obj);
    expensiveCache.set(obj, result);
  }
  return expensiveCache.get(obj);
}

function heavyComputation(obj) {
  return obj.value ** 10;
}

const obj = { value: 2 };
console.log(compute(obj)); // 1024
```