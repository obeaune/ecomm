/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Payments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            value: {
                allowNull: false,
                // eslint-disable-next-line new-cap
                type: Sequelize.DECIMAL(10, 2)
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            number_card: {
                allowNull: false,
                type: Sequelize.STRING
            },
            expiration_date: {
                allowNull: false,
                type: Sequelize.STRING
            },
            cvv: {
                allowNull: false,
                type: Sequelize.STRING
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Payments');
    }
};
