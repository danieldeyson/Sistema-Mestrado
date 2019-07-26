const sequelize = require ("sequelize")


const Sequelize = new sequelize('sist', 'sisteone', 'demolay',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports ={
    sequelize: sequelize,
    sequelize: sequelize
}