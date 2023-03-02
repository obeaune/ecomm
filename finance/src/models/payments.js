const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Payments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
        */
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }

    Payments.init({
        value: {
            // eslint-disable-next-line new-cap
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [4, 35] }
        },
        number_card: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isCreditCard: true }
        },
        expiration_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { is: /([\d]{4}-(0[1-9]|10|11|12)$)/ }
        },
        cvv: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [3], isNumeric: true }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'CREATED',
            validate: { isIn: [['CREATED', 'CONFIRMED', 'CANCELED']] }
        }
    }, {
        sequelize,
        modelName: 'Payments'
    });

    return Payments;
};
