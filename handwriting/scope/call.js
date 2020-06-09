// // 简单版
// var foo = {
//     value: 1,
//     bar: function() {
//         console.log(this.value)
//     }
// }

// foo.bar() // 1

// 完善版
Function.prototype.call2 = function (content = window) {
    content.fn = this
    let args = [...arguments].slice(1)
    let result = content.fn(...args)
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

bar.call2(foo, 'black', '18') // black 18 1



