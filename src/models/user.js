import Sequelize, {
    DataTypes
} from 'sequelize'

import {
    sha256
} from 'js-sha256'

const schema = {
    name: {
        type: DataTypes.STRING,

    },
    password: DataTypes.STRING,
    age: DataTypes.STRING,
    dweller: DataTypes.BOOLEAN
}

const functions = {
    authenticate(user, password) {
        const encodedPass = sha256(password)
        const query = this.find({
            user: user,
            password: encodedPass
        }, (result) => console.log(result))
    },
    register(username, password, age, dweller) {

    }
}

export default schema