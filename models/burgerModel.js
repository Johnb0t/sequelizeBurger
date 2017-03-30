"use strict";

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        the_date: DataTypes.NOW
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        underscored: true,
        freezeTableName: true,
        tableName: "burgers"
    });

    return Burger;
};