/**
 * 借用构造函数法
 */
function Parent() {
    this.names = ['xsq', 'ivan']
}

function Child() {
    Parent.call(this)
}

let child1 = new Child()
child1.names.push('dog')
console.log(child1.names)

let child2 = new Child()
child2.names.push('puppy')
console.log(child2.names)
