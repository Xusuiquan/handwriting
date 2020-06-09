// 完善版
Function.prototype.apply2 = function(content = window) {
    content.fn = this
    let result;
    // 判断是否有第二个参数
    if(arguments[1]) {
        result = content.fn(...arguments[1])
    } else {
        result = content.fn()
    }
    delete content.fn
    return result
}

let foo = {
    value: 1
}

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

bar.apply2(foo, ['black', '18']) // black 18 1