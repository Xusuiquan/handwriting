/**
 * 括号有效性问题
 */
const isValid = function(s) {
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else if (s[i] !== map[stack.pop()] ) {
            return false
        }
    }
    return stack.length === 0
}

const str = '()[]{}'
console.log(isValid(str))