const { Model, DataTypes } = require("sequelize");

class Group extends Model{}

Group.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Employee',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Group',
        timestamps: true,
        paranoid: true
    }
);

export default Group;