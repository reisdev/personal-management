import Sequelize from 'sequelize'
import userSchema from './user'
import invoiceSchema from './Invoice'

const db = new Sequelize('agape', 'root', '', {
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

const User = db.define("users", userSchema)
const Invoice = db.define("expenses",invoiceSchema)

// To rebuild the tables, set to true
const rebuild = true

db.sync({force: rebuild})

export {
    User,
    Invoice
}