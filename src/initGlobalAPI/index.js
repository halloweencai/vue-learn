import {mergeOptions} from '../util/index'
export function initGlobalAPI(Vue) {
    // 整合了所有的全局相关的内容
    Vue.options = {}

    Vue.mixin = function (mixin) {
        // this为Vue，如何实现两个对象的合并
        this.options = mergeOptions(this.options,mixin)
    }

    // 生命周期的合并策略  [beforeCreate,beforeCreate]
    Vue.mixin({
        a: 1,
        beforeCreate() {
            console.log('mix 1')
        }
    })
    Vue.mixin({
        b: 2,
        beforeCreate() {
            console.log('mix 2')
        }
    })
    console.log(Vue.options)
}