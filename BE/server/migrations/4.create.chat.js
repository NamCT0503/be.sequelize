const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Chats', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true
            },
            empolyee_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'id'
                }
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Chats');
    }
}