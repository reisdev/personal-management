import Sequelize from 'sequelize'

const db = new Sequelize('agape', 'root', '', {
    dialect: 'sqlite',
    storage: '../database.sqlite'
})

import userSchema from './user'

const User = db.define('User', userSchema)

db.sync().then(function() {
    User.create({
        name: 'Matheus',
        password: '123',
        age: 18,
        dweleer: true
    })
    User.findAll().then((value) => console.log(value))
    User.destroy({
        where: {
            password: '123'
        }
    })
})

export default {
    User
}