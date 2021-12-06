
function ClassA (arg) {
    this.arg = arg
}
ClassA.prototype.x = 20

function ClassB (x) {
    this.x = x
}
ClassB.prototype = new ClassA(30)

var a = new ClassA('xxxxx'),
    b = new ClassB(40);

console.log(a instanceof Object)
console.log(a instanceof ClassA)
console.log(b instanceof Object)
console.log(b instanceof ClassA)

a.x = 30
console.log(a.x)
delete a.x
console.log(a.x)
console.log(b.x)
delete b.x
console.log(b.x)





