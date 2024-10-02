const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Messages', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            chat_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Chats',
                    key: 'id'
                }
            },
            message: {
                type: Sequelize.STRING,
                allowNull: false
            },
            send_by: {
                type: Sequelize.ENUM('admin', 'employee'),
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Messages');
    }
}