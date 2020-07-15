function side(arr) {
    arr[0] = arr[1] + arr[2]
}

function a(a, b, c = 3) {
    c = 10
    side(arguments)
    console.log(c)
    console.log(a + b + c)
}

a(1, 1, 1)