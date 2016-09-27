"use strict";

module.exports = function(sequelize, DataTypes) {
    var item = sequelize.define('item', {
        level: {
            type: DataTypes.ENUM,
            values: ['taxon', 'ind', 'pop'],
            allowNull: false,
            defaultValue: 'taxon'
        },
        name: {
            type: DataTypes.STRING,
            comment: "Name of the item"
        },
        size: {
            type: DataTypes.FLOAT,
            comment: "Population size. ONLY ALLOWED when level is set as `pop`."
                // Add reference table
        },
        units: {
            type: DataTypes.STRING,
            comment: "Units in which the population size was measured."
        }
        description: {
            type: DataTypes.TEXT('long'),
            comment: "Description of the item"
        },
        public: {
            type: DataTypes.BOOLEAN,
            comment: "Is this available publicly? "
        }
    }, {
        classMethods: {
            associate: function(models) {
                item.hasOne(models.taxon, {
                        onDelete: 'cascade'
                    }),
                item.hasOne(models.user, {
                        onDelete: 'cascade'
                    })
            },
        }
    })

return item

};