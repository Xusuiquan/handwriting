/**
 * 实现new关键字
 * 1.新生成一个对象
 * 2.新对象隐式原型链接到函数原型
 * 3.调用函数绑定this
 * 4.返回新对象
 */
function myNew(fn) {
    return function() {
        let obj = {
            __proto__: fn.prototype
        }
        fn.apply(obj, arguments)
        return obj
    }
}

function Person(name, age) {
    this.name = name
    this.age = age
}

let obj = myNew(Person)('xsq', '18')
console.log(obj)