/**
 * ES6继承
 */
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return this.x + ' ' + this.y
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y) // 调用父类的构造函数constructor(x, y)
        this.color = color
    }

    toString() {
        return this.color + ' ' + super.toString()
    }
}

let colorPoint = new ColorPoint(1, 2, 'green')
console.log(colorPoint.toString())


/**
 * 注意
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错
 */

 /**
  * ES5和ES6实现继承的区别
  * ES5是先创造子类的实例对象this，然后再将父类的属性和方法添加到this，利用call改变上下文
  * ES6是先创造父类的实例对象this，必须先调用super，再用子类的构造函数修改this
  */