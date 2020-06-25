function Parent() {
    this.name = 'ivan'
    this.play = [1, 2, 3]
}

function Child() {
    Parent.call(this)
    this.type = 'xsq'
}
Child.prototype = new Parent()


