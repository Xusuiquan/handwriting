/**
 * 斐波那契数列（递推法）
 */
function fibonacci(n) {
    let current = 0
    let next = 1
    let temp
    for(let i = 0; i < n; i++) {
        temp = current
        current = next
        next += temp
        // [current, next] = [next, current + next]
    }
    return current
}

