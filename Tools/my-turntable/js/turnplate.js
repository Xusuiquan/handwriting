const turnplate = {
    restaraunts: [], // 大转盘奖品名称
    colors: [], // 大转盘奖品区块对应背景颜色
    outsideRadius: 160, // 大转盘外圆半径
    insideRadius: 48, // 大转盘内圆的半径
    textRadius: 135, // 大转盘奖品位置距离圆心的距离
    startAngle: 0, // 开始角度
    isRotate: false, // false: 停止, ture: 旋转
}

const rectWidth = 375
const rectHeight = 375

$(document).ready(function() {
    // 新增大转盘的奖品
    // turnplate.restaraunts = ['', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    turnplate.restaraunts = [
        '天海翼', '大桥未久', '波多野结衣', '吉泽明步', '泷泽萝拉', '宇都宫紫苑', '佐佐木明细', '苍井空', '三上悠亚', '桃谷绘里香']
    turnplate.colors = ['lightblue', 'lightpink', 'lightblue', 'lightpink', 'lightblue', 'lightpink', 'lightblue', 'lightpink', 'lightblue', 'lightpink']

    // 大转盘旋转停止
    const rotateTimeout = function() {
        $('#wheelcanvas').rotate({
            angel: 0,
            animateTo: 2160,
            duration: 5 * 1000,
            callback: function() {
                console.log('network timeout')
            }
        })
    }

    let rotateFn = function (item, txt) {
		let angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length * 2)); // 求中间的弧度
        if (angles < 270) {
            angles = 270 - angles
        } else {
            angles = 360 - angles + 270
        }
        $('#wheelcanvas').stopRotate()
        $('#wheelcanvas').rotate({
            angle: 0,
            animateTo: angles + 360 * 2,
            duration: 5 * 1000,
            callback: function() {
                alert(`今晚${txt}会陪你哦！`)
                turnplate.isRotate = !turnplate.isRotate
            }
        })

    }

    // 绑定点击抽奖事件
    $('.pointer').click(function() {
        if (turnplate.isRotate) return 
        turnplate.isRotate = !turnplate.isRotate
        // 获取随机数（奖品个数范围内）
        let num = getRandom(1, turnplate.restaraunts.length)
        rotateFn(num, turnplate.restaraunts[num - 1])
    })
})

// 获取随机数
function getRandom(n, m) {
    let random = Math.floor(Math.random() * (m - n + 1) + n )
    return random
}

// 页面所有元素加载完后渲染大转盘canvas
window.onload = function() {
    drawTurnplate()
}

// 绘画canvas
function drawTurnplate() {
    let canvas = document.getElementById('wheelcanvas')
    if (canvas.getContext) {
        // 根据奖品个数计算圆周角度
        let arc = Math.PI / (turnplate.restaraunts.length / 2)
        let ctx = canvas.getContext('2d')
        // 清空矩形的内容
        ctx.clearRect(0, 0, rectWidth, rectHeight)
        // strokeStyle属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = 'yellow'
        // font属性设置或返回画布上文本内容的当前自体属性
        ctx.font = '16px Microsoft YaHei'
        for (let i = 0; i < turnplate.restaraunts.length; i++) {
            let angle = turnplate.startAngle + i * arc
            ctx.fillStyle = turnplate.colors[i]
            ctx.beginPath()
            // arc(x, y, r, 起始角，结束角，绘制方向)
            ctx.arc(rectWidth / 2, rectHeight / 2, turnplate.outsideRadius, angle, angle + arc, false)
            ctx.arc(rectWidth / 2, rectHeight / 2, turnplate.insideRadius, angle + arc, angle, true)
            ctx.stroke()
            ctx.fill()
            // 锁画布（为了保存之前的画布状态）
            ctx.save()

            // ---- 开始绘画奖品 ----
            ctx.fillStyle = 'lightyellow'
            let text = turnplate.restaraunts[i]
            let line_height = 17
            
            // 重新映射画布上的位置
            ctx.translate(
                (rectWidth / 2) + Math.cos(angle + arc / 2) * turnplate.textRadius,
                (rectWidth / 2) + Math.sin(angle + arc / 2) * turnplate.textRadius,
            )
            // 旋转当前文本
            ctx.rotate(angle + arc / 2 + Math.PI / 2)

            if (text.length > 6) {
                text = text.substring(0, 6) + '||' + text.substring(6)
                let texts = text.split('||')
                for (let j = 0; j < texts.length; j++) {
                    ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height)
                }
            } else {
                // 在画布上绘制填色的文本。文本的默认颜色是黑色
                // measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
			    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            }

            ctx.restore()

            // ctx.drawImage(img, x, y) 渲染图片
            // ---- 结束绘画奖品 ----
        }
    }
}