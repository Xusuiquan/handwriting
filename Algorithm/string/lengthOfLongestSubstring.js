/**
* 求字符串的不重复最长长度
* 整体思路：
* 用一个滑动窗口装没有重复的字符，枚举字符记录最大值即可
* 用map维护字符的索引，遇到相同的字符，把左边界移动过去即可
* 挪动的过程中记录最大长度
*/
const lengthOfLongestSubstring = function(s) {

    let map = new Map()
    let i = -1
    let res = 0 // 当前最长长度
    let n = s.length // 字符串的数量
    for (let j = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]))
        }
        res = Math.max(res, j - i)
        map.set(s[j], j)
    }
    return res
}

console.log(lengthOfLongestSubstring('absdjfhsogbfhsdg'))