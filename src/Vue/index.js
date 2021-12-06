// 观察者
const Observer = function(data) {
    // 循环修改为每个属性添加get set
    for (let key in data) {
        defineReactive(data, key)    
    }
}

const observe = function(data) {
    return new Observer(data)
}

const Vue = function(options) {
    const self = this
    // 将data赋值
    if (options && typeof options.data === 'function') {
        this._data = options.data.apply(this)
    }
    // 挂载函数
    this.mount = function() {
        new Watcher(self, self.render)
    }
    // 渲染函数
    this.render = function() {
        with(self) {
            // 模拟模版渲染，相当于get
            _data.text
            // _data.message 
        }
    }
    // 监听this._data
    observe(this._data)
}

const defineReactive = function(obj, key) {

    const dep = new Dep()
    // 获取当前值
    let val = obj[key]
    Object.defineProperty(obj, key, {
        // 设置当前描述属性为可被循环
        enumerable: true,
        // 设置当前描述属性可被修改
        configurable: true,
        get() {
            console.log('in get')
            // 调用依赖收集器中的addSub，用于收集当前与Watcher中的依赖关系
            dep.depend()
            return val
        },
        set(newVal) {
            if (newVal === val) {
                return;
            }
            val = newVal
            // 当值发生变更时，通知依赖收集器，更新每个需要更新的Watcher
            dep.notify()
        }
    })

}

// 监听器
const Watcher = function(vm, fn) {
    const self = this
    this.vm = vm
    // 将当前Dep.target指向自己
    Dep.target = this
    // 向Dep方法添加当前Watcher
    this.addDep = function(dep) {
        dep.addSub(self)
    }
    // 更新方法，用于触发vm._render
    this.update = function() {
        console.log('in watcher update')
        fn()
    }
    // 这里会首次调用vm._render，从而触发text的get
    // 从而将当前的Wathcer与Dep关联起来
    this.value = fn();
    // 这里清空了Dep.target，为了防止notify触发时，不停的绑定Watcher与Dep，
    // 避免造成代码死循环
    Dep.target = null;
}

// 依赖收集器
const Dep = function() {
    const self = this
    // 收集目标
    this.target = null
    // 存储收集器中需要通知的Watcher
    this.subs = []
    // 当有目标时，绑定Dep与Watcher的关系
    this.depend = function() {
        if (Dep.target) {
            Dep.target.addDep(self)
        }
    }
    // 为当前收集器添加Watcher
    this.addSub = function(watcher) {
        self.subs.push(watcher)
    }
    // 通知收集器中的所有Watcher，调用update方法
    this.notify = function() {
        for (let i = 0; i < self.subs.length; i++) {
            self.subs[i].update()
        }
    }

}



const vue = new Vue({
    data() {
        return {
            text: 'hello world',
            message: 'ivan'
        }
    }
})

vue.mount()
vue._data.text = '123'
// vue._data.message = '123'