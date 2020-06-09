// 完善版
Function.prototype.bind2 = function(content) {
    if(typeof this != "function") {
        throw Error("not a function")
    }

    // 若没问参数类型则从这开始写
    let fn = this
    let args = [...argument].slice(1)

    let resFn = function() {
        return fn.apply(
            this instanceof resFn ? this : content, 
            args.concat(...arguments)
            )
    }

    function tmp() {}
    tmp.prototype = this.prototype
    resFn.prototype = new tmp()

    console.log(resFn)
    return resFn
}

let foo = {
    value: 1
}

let bar = function() {
    console.log('bar')
}

// foo.bind2()
bar.bind2()


