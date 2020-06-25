/**
 * 组合式继承（原型链继承和借用构造函数合并）
 */
function Parent(name) {
    this.name = name
    this.body = ['head', 'foot']
}

function Child(name, age) {
    Parent.call(this, name) // 借用构造函数
    this.age = age
}

// 原型链继承
Child.prototype = new Parent()
Child.prototype.constructor = Child

let child1 = new Child('xsq', '25')
child1.body.push('eyes')
console.log(child1.name, child1.age)
console.log(child1.body)

let child2 = new Child('ivan', '18')
child2.body.push('tail')
console.log(child2.name, child2.age)
console.log(child2.body)

/**
 * 优点
 * 1.解决每个实例对引用类型属性的修改会被其他实例共享的问题
 * 2.子类可以向父类传参
 * 3.可以复用原型上的方法
 */

/**
 * 缺点
 * 需要执行两次父类构造函数
 * 第一次是Child.prototype = new Parent()
 * 第二次是Parent.call(this, name)
 */