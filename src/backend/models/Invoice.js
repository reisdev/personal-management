import Sequelize, { DataTypes } from 'sequelize'

const schema = {
    value: DataTypes.FLOAT,
    date: DataTypes.DATE,
    description: DataTypes.STRING
}

export default schema