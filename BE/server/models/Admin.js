const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database")

class Admin extends Model{}

Admin.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Admin',
        timestamps: true,
        paranoid: true
    }
)

export default Admin;