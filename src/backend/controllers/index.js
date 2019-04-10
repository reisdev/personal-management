import User from './user' 
import Invoice from './invoice'
import Income from "./income"

export default {
    install: function (Vue,options) {
        Vue.prototype.$backend = { 
            User,Invoice,Income
        }
    }
}