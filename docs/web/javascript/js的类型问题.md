
## 判断是否是数组

### 可以使用`instanceof`

```
let arr = [1, 2, 3, 4, 5];

console.log(arr instanceof Array); // true
```



### 以前常用一个方法：`Object.prototype.toString.call`

```
const someObj = [1, 2]
Object.prototype.toString.call(someObj) // [object Array]
```

但是这样会出现一种情况：

![判断是否是数组](/assets/20250721150559.png)


## Array.isArray(arr) 最保险的

