var result = [], a = 3, total = 0

function f(a) {
    var i = 0
    for(; i < 3; i = i + 1) {
        result[i] = function() {
            total += a * i
            return total
        }
    }
}

f(1)
console.log(result[0]())
console.log(result[1]())
console.log(result[2]())