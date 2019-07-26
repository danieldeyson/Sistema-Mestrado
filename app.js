const express = require ("express");
const app = express();
const handlebars= require ("express-handlebars");
const bodyParser = require ("body-parser");
const plano = require("./models/Planos")

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas

app.get('/planodeaula', function(req, res){
    res.render('planodeaula');

});

app.get('/cad-inserirplano', function(req, res){
    res.render('cad-inserirplano');

});

app.post('/add-plano',function(req, res){
    plano.create({
        ComponentesCurriculares: req.body.ComponentesCurriculares,
        ModelidadeDeEnsino: req.body.ModelidadeDeEnsino
    }).then(function(){
        res.redirect('/planodeaula')
    }).catch(function(erro){
        res.send("erro" + erro)
    })
    //res.send("ComponentesCurriculares: " + req.body.ComponentesCurriculares +"<br>ModelidadeDeEnsino: " + req.body.ModelidadeDeEnsino + "<br>")
})


app.listen(8080)