/**
 * 一个函数的调用频率限制在一定阀值内，例如1s
 */

function throttle(fn, wait) {
    let prev = new Date()
    return function () {
        const args = arguments
        const now = new Date()
        if (now - prev > wait) {
            fn.apply(this, args)
            prev = new Date()
        }
    }
}

// 结合实例，滚动节流

// 通过第三个参数来切换模式
const throttle = function (fn, delay, isDebounce) {
    let timer
    let lastCall = 0
    return function (...args) {
        // 防抖
        if (isDebounce) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn(...args)
            }, delay)
        } else {
            // 节流
            const now = new Date().getTime()
            if(now - lastCall < delay) return
            lastCall = now
            fn(...args)
        }
    }
}
