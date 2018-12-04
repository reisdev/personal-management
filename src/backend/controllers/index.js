import User from './User' 
import Invoice from './Invoice'

export default {
    install: function (Vue,options) {
        Vue.prototype.$backend = { 
            User : User,
            Invoice : Invoice
        }
    }
}