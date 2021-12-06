/**
 * 借用构造函数法
 */
function Parent(name) {
    this.name = name
}

function Child(name) {
    Parent.call(this, name)
}

let child1 = new Child('xsq')
console.log(child1.name)

let child2 = new Child('ivan')
console.log(child2.name)

/**
 * 优点：
 * 1.解决每个实例对引用类型属性的修改会被其他实例共享的问题
 * 2.子类可以向父类传参
 */

 /**
  * 缺点：
  * 1.只能继承父对象的实例属性和方法，不能继承父对象原型属性和方法
  * 2.每次子类构造实例都要执行一次父类函数
  */