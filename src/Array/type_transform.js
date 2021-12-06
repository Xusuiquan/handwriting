function sum(a, b) {
    // Array.prototype.slice.call(arguments)
    var args = Array.prototype.slice.call(arguments)
    
    // Array.from()
    var args = Array.from(arguments)

    // ES6展开运算符
    var args = [...arguments]
    
    // Array.prototype.concat.apply([], arguments)
    var args = Array.prototype.concat.apply([], arguments)
    
    console.log(args)
}

sum(1, 3)