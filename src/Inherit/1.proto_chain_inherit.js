/**
 * 一、原型链继承
 */
function Parent() {
    this.name = 'baba'
}

Parent.prototype.getName = function() {
    console.log(this.name)
}

function Child() {}

// 主要精髓所在
Child.prototype = new Parent()
Child.prototype.constructor = Child

let child = new Child()
child.getName()


