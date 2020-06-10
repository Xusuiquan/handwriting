/**
 * apply
 */
Function.prototype.apply2 = function(context = window, args) {
    context.fn = this
    let result;
    // 判断是否有第二个参数
    if(Array.isArray(args)) {
        result = context.fn(...args)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

let foo = { value: 1 }

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

bar.apply2(foo, ['xsq', '18']) // xsq 18 1