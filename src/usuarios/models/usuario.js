const { DataTypes, Model } = require('sequelize')

const connection = require('../../database/connection')

class Usuario extends Model {}

Usuario.init({
    id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
{
    sequelize: connection,
    modelName: 'users'
})

Usuario.sync()
.then(() => console.log('usuario sincronizado'))
.catch((e) => console.log('Usuario nao sincronizado: ', e))

module.exports = Usuario;
