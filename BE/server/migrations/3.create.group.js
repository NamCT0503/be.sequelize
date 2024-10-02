const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Groups', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'id'
                }
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Groups');
    }
}