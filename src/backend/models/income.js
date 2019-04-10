import Sequelize, { DataTypes } from "sequelize"

const schema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    value: DataTypes.FLOAT,
    received: DataTypes.BOOLEAN
}

export default schema