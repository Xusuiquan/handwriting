/**
 * 实现 new
 * 1.创建一个对象，使得创建的对象的__proto__ === Fn.prototype
 * 2.调用 Fn 的构造函数，传入的 this 是创建的对象
 * 3.如果 Fn 的构造函数返回了一个对象，则返回这个对象，如果是普通类型的值，返回新建的对象
 */
function myNew(fn, options) {
    var obj = {}
    obj.__proto__ = fn.prototype

    var result = fn.call(obj, options)
    return result instanceof Object ? result : obj
}

function Person(options) {
    this.name = options.name
}

let p = new Person({ name: 'xsq' })
let p2 = myNew(Person, { name: 'xsq' })