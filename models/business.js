module.exports = function(sequelize, Datatypes) {
    var Business = sequelize.define("Business", {

        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            } // end of validate
        }, // end of name
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }, // end of password
        phonenumber: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        }, // end of phonenumber
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        picture: {
            type: Datatypes.TEXT,
            allowNull: false
            // validate: {
            //     isUrl: true
            // }
        } // end of picture
    }, {
        // timestamps: false,
        classMethods: {
            associate: function(models) {
                Business.hasMany(models.Event, {
                    onDelete: "cascade",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Business;
}
