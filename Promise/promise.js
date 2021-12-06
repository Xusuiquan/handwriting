class HD {
    static PENGING = 'pending'
    static FUFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    constructor(executor) {
        this.status = HD.PENGING
        this.value = null
        this.callbacks = []
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }ß

    resolve(value) {
        if (this.status === HD.PENGING) {
            this.status = HD.FUFILLED
            this.value = value
            this.callbacks.map(callback => {
                callback.onFUlfilled(value)
            })
        }
    }

    reject(reason) {
        if (this.status === HD.PENGING) {
            this.status = HD.REJECTED
            this.value = value
            this.callbacks.map(callback => {
                callback.onRejected(reason)
            })
        }
    }

    then(onFUlfilled, onRejected) {
        // 回调函数参数可以为空
        if (typeof onFUlfilled !== 'function') {
            onFUlfilled = () => {}
        }

        if (typeof onRejected !== 'function') {
            onRejected = () => {}
        }

        if (this.status === HD.PENGING) {
            this.callbacks.push({
                onFUlfilled,
                onRejected
            })
        }

        // 处理成功值                       
        if (this.status === HD.FUFILLED) {
            setTimeout(() => {
                try {
                    onFUlfilled(this.value)
                } catch (error) {
                    onRejected(error)
                }
            })
        }
        if (this.status === HD.REJECTED) {
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (error) {
                    onRejected(error)
                }
            })
        }
        
    }
    
}



