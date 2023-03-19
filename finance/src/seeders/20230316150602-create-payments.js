/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Payments', [
            {
                value: 534.99,
                name: 'Ada Lovelace',
                number_card: '5417408214038037',
                expiration_date: '2027-02',
                cvv: '858',
                status: 'CONFIRMED',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                value: 399.99,
                name: 'Chester Rolfes',
                number_card: '5181487684017436',
                expiration_date: '2027-03',
                cvv: '762',
                status: 'CONFIRMED',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                value: 78.49,
                name: 'Alyssa Pagnotto',
                number_card: '5486485675163930',
                expiration_date: '2027-03',
                cvv: '496',
                status: 'CREATED',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                value: 402.49,
                name: 'Vitoria Kristiansen',
                number_card: '5502099257620983',
                expiration_date: '2027-03',
                cvv: '301',
                status: 'CREATED',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                value: 20.99,
                name: 'Johanna Huijts',
                number_card: '5314545473247744',
                expiration_date: '2027-04',
                cvv: '724',
                status: 'CREATED',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Payments', null, {});
    }
};
