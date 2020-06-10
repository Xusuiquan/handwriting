/**
 * 寄生组合式继承
 * （主要是解决组合继承调用两次父类构造函数的问题）
 */
function inheritPrototype(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype) // 创建父类原型的一个副本
    Child.prototype.constructor = Child
}

function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function() {
    console.log(this.name)
}

function Child(color) {
    Parent.call(this, 'xsq')
    this.color = color
}

inheritPrototype(Parent, Child)

let child = new Child('green')
console.log(child.name)

/**
 * 优点：
 * 不必为了指定子类的原型而调用父类的构造函数
 */

 /**
  * 其实继承分两个关键步骤
  * 1.利用call改变上下文，继承父类的属性和方法
  * 2.继承父类的原型，把它赋值给子类，还要手动改变原型的constructor
  */

