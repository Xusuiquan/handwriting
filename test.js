var id = 0

async function xxx() {
    for (var i = 0; i < 20; i++) {
        var arr = []
        for (var j = 0; j < 10; j++) {
            arr.push(request())
        }
        await Promise.all(arr).then(() => {
            console.log(`------第${i + 1}轮已结束--------`)
        })
    }
}

function request() {
    return new Promise((resolve, reject) => {
        id++
        console.log(id)
        resolve(id)
    })
}

xxx()