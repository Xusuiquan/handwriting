/**
 * 下划线转换驼峰式
 */
function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter) {
        return letter.toUpperCase()
    })
}

let a = 'xu_sui_quan'
console.log(toHump(a))

/**
 * 驼峰式转换下划线
 */
function toLine(name) {
    return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}

let b = 'xuSuiQuan'
console.log(toLine(b))
