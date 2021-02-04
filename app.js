var app = require('./config/server');
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'knex'
    }
});


app.get('/', function(req, res){
    if(req.query.id != null){
        knex('products').where({id: req.query.id}).select()
        .then(function(result){
        res.send(result);
    });    
    }else{
        knex('products').select()
        .then(function(result){
            res.send(result);
        });
    }
    
});

app.post('/', function(req, res){
    knex('products').insert({name:req.body.name, description:req.body.description})
    .then(function(result){
        res.send({succes:true, message:"inserido no banco de dados"});
    });
});

app.put('/', function(req, res){
    knex('products').where({id:req.query.id}).update({name:req.body.name, description:req.body.description})
    .then(function(result){
        res.send({success:true, message:"registro atualizado com sucesso."});
    });
    
});

app.delete('/', function(req, res){
    knex('products').where({id:req.query.id}).del()
    .then(function(result){
        res.send({success:true, message:'registro deletado com sucesso'});
    });
    
});

app.listen(3000, function(){
    console.log('Server on.');
});
