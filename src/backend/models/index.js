import Sequelize from 'sequelize'
import userSchema from './user'
import invoiceSchema from './invoice'
import incomeSchema from "./income"

const db = new Sequelize('agape', 'root', '', {
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

const User = db.define("users", userSchema)
const Invoice = db.define("invoices",invoiceSchema)
const Income = db.define("incomes",incomeSchema)

// To rebuild the tables, set to true
const rebuild = false

db.sync({force: rebuild})

export {
    User,
    Invoice,
    Income
}