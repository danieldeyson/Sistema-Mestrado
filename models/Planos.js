const db = require('./db')

const Planos = db.sequilize.define('planodeaulas',{
    ComponentesCurriculares: {
        type: db.Sequelize.STRING
    },
    ModelidadeDeEnsino: {
        type: db.Sequelize.STRING
    }
})

//Plano.sync({force: true})

module.exports = Planos
