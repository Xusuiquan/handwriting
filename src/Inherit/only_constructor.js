/**
 * 一、仅继承父构造函数的原型对象
 */
function Parent() {
    this.name = 'baba'
}

Parent.prototype.getName = function() {
    console.log(this.name)
}

function Child() {}

// 主要精髓所在
Child.prototype = Parent.prototype

let child = new Child()
child.getName()

/**
 * 优点：
 * 1.构建继承关系时，不需要新建对象实例
 * 2.公用同一原型，访问对象时不需要遍历原型链
 */

 /**
  * 缺点：
  * 子对象修改引用类型会影响父对象
  */