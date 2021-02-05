module.exports = function(application){
    
    application.get('/products', function(req, res){
        application.app.controllers.products.all(application, req, res);
    });

    application.get('/products/:id', function(req, res){
        application.app.controllers.products.one(application, req, res);
    });

    application.post('/products', function(req, res){
        application.app.controllers.products.save(application, req, res);
    });

    application.put('/products/:id', function(req, res){
        application.app.controllers.products.update(application, req, res);
    });

    application.delete('/products/:id', function(req, res){
        application.app.controllers.products.delete(application, req, res);
    });
}