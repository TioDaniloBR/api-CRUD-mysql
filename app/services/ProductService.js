const productRepository = require('../repository/ProductRepository')

class ProductService {
    async all() {
        return await productRepository.all()
    }
    
    async one({ id }) {
        return await productRepository.one({ id })  
    }
    
    async save({ data }) {
        return await productRepository.save({ data })
        
    }
    
    async update({ id, data }) {
        return await productRepository.update({ id, data })
    }
    
    async delete({ id }) {
        return await productRepository.delete({ id })
    }
}

module.exports = new ProductService()