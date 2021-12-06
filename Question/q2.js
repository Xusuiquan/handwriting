function Foo() {
    getName = function() { alert(1) }
    return this
}
Foo.getName = function() { alert(2) }
Foo.prototype.getName = function() { alert(3) }
getName = function() { alert(4) }
function getName() { alert(5) }

// 输入一下结果
Foo.getName()
getName()
Foo().getName()
getName()
Foo.getName()
new Foo().getName()