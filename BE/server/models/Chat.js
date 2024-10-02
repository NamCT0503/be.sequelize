const { Model, DataTypes } = require("sequelize");

class Chat extends Model{}

Chat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        empolyee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Employee',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'Chat',
        timestamps: true,
        paranoid: true
    }
);

export default Chat;