/**
 * 跳跃问题
 */
let nums = [2, 3, 1, 1, 4]
// let nums = [3, 2, 1, 0, 4]
const canJump = function(nums) {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false
        max = Math.max(max, i + nums[i])
        if (max >= nums.length - 1) {
            return true
        }
    }
}
console.log(canJump(nums))