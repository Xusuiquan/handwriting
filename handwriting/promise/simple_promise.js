function myPromise(constructor) {
    
    this.status = 'pending' // 初始化状态值
    this.value = undefined // 初始化resolved时的值
    this.reason = undefined // 初始化rejected时的值

    function resolve(value) {
        if (this.status === 'pending') {
            this.value = value
            this.status = 'resolved'
        }
    }

    function reject(reason) {
        if (this.status === 'pending') {
            this.reason = reason
            this.status = 'rejected'
        }
    }

    // 捕获构造异常
    try {
        constructor(resolve, reject)
    } catch (e) {
        reject(e)
    }

}

myPromise.prototype.then  = function(onFullfilled, onRejected) {
    switch(this.status) {
        case 'resolved':
            onFullfilled(this.value)
            break
        case 'rejected':
            onRejected(this.reason)
        default:
    }
}

let p = new myPromise(function(resolve, reject) {
    resolve(222)
}).then(function(res) {
    console.log(res)
})

