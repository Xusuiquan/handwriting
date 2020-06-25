// 手动实现
const shallowClone = (target) => {
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if(target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop] // 不用递归
            }
        }
        return cloneTarget
    } else {
        return target
    }
}

// Object.assgin
let obj = { name: 'ivan', age: 19 }
const obj2 = Object.assign({}, obj, {name: 'sss'})
console.log(obj2)

// concat浅拷贝数组
let arr = [1, 3, 5]
let newArr = arr.concat()
newArr[1] = 100
console.log(arr)

// slice浅拷贝
let arr = [1, 3, 5]
let newArr = arr.slice()
newArr[1] = 100
console.log(arr)

// ...展开运算符
let arr = [1, 3, 5]
let newArr = [...arr] // 跟arr.slice()是一样的效果






