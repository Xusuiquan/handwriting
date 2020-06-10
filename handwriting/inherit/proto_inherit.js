/**
 * 原型式继承
 * Object.create()
 */
function createObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}

let person = {
    name: 'xsq',
    body: [ 'head', 'foot' ]
}

let person1 = createObj(person)
let person2 = createObj(person)

console.log(person1.body)
person1.body.push('tail')
console.log(person2.body)

/**
 * 缺点：
 * 1.和原型链继承一样，每个实例对引用类型属性的修改会被其他实例共享
 * 2.无法传递参数
 */