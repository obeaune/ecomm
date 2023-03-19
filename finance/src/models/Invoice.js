// const {
//     Model
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//     class Invoice extends Model {
//         static associate(models) {
//             // Invoice.belongsTo(models.Payment, {
//             //     foreignKey: 'paymentId'
//             // });
//         }
//     }

//     Invoice.init({
//         description: {
//             type: DataTypes.JSON,
//             allowNull: false
//         }
//     }, {
//         sequelize,
//         modelName: 'Invoices',
//     });
//     return Invoice;
// };