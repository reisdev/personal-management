import Sequelize, { DataTypes } from 'sequelize'

const schema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    value: DataTypes.FLOAT,
    dueDate: DataTypes.DATE,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    status: { 
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

export default schema