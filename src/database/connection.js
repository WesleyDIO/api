const Sequilize = require('sequelize');
const sequelize = new Sequilize({
    dialect: 'sqlite',
    storage: './database/database.sqlite'
});

async function testeDatabase(){
    try {
        await sequelize.authenticate();
        console.log('Banco conectado com sucesso')
    } catch (error) {
        console.log('conexao falhou: ', error)
    }
}

testeDatabase().then()

module.exports = sequelize