/**
 * call
 */
Function.prototype.call2 = function (context = window, ...args) {
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}

let foo = { value: 1 }

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

bar.call2(foo, 'xsq', '18') // xsq 18 1



