import Sequelize, {
    DataTypes
} from 'sequelize'

const schema = {
    name: {
        type: DataTypes.STRING,

    },
    password: DataTypes.STRING,
    birthday: DataTypes.DATE
}

export default schema