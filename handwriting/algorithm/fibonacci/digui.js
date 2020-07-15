/**
 * 斐波那契数列（递归法）
 * 缓存功能map
 */
function fibonacci(n, map = {}) {
    if (n == 1 || n == 2) return 1  
    if (map[n]) return map[n]
    let data = fibonacci(n - 1, map) + fibonacci(n - 2, map)
    map[n] = data
    return data
}

