import Sequelize from 'sequelize'
import userSchema from './user'

const db = new Sequelize('agape', 'root', '', {
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

const User = db.define("user", userSchema)
const update = false

db.sync({force: update})

export {
    User
}