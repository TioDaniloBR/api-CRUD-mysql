module.exports.one = function(application, req, res){
    var knex = application.app.repository.database;
    knex('products').where({id: req.params.id}).select()
        .then(function(result){
            res.send(result);
        });
    
}

module.exports.all = function(application, req, res){
    var knex = application.app.repository.database;
    knex('products').select()
        .then(function(result){
            res.send(result);
        });
}

module.exports.save = function(application, req, res){
    var knex = application.app.repository.database;
    knex('products').insert({name:req.body.name, description:req.body.description})
        .then(function(result){
            res.send({succes:true, message:"inserido no banco de dados"});
        });
}

module.exports.update = function(application, req, res){
    var knex = application.app.repository.database;
    knex('products').where({id:req.params.id}).update({name:req.body.name, description:req.body.description})
    .then(function(result){
        res.send({success:true, message:"registro atualizado com sucesso."});
    });
}

module.exports.delete = function(application, req, res){
    var knex = application.app.repository.database;
    knex('products').where({id:req.params.id}).del()
    .then(function(result){
        res.send({success:true, message:'registro deletado com sucesso'});
    });
}