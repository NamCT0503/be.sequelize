const { Model, DataTypes } = require("sequelize");

class Message extends Model{}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        chat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Chat',
                key: 'id'
            }
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        send_by: {
            type: DataTypes.ENUM('admin', 'employee'),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Message',
        timestamps: true,
        paranoid: true
    }
);

export default Message;