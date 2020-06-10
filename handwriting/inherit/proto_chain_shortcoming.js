function Parent() {
    this.names = ['xsq', 'ivan']
}

function Child() {}

// 主要精髓所在
Child.prototype = new Parent()
Child.prototype.constructor = Child

let child1 = new Child()
child1.names.push('dog')
console.log(child1.names)

let child2 = new Child()
child2.names.push('puppy')
console.log(child2.names)

/**
 * 原型链继承的缺点
 * 1.每个实例对引用类型属性的修改都会被其他实例共享
 * 2.在创建实例的时候，无法向继承类传参，导致实例无法自定义属性
 */