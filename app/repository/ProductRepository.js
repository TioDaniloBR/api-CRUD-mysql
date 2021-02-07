const knex = require('../../config/database')

class ProductRepository {
    async all() {
       return await knex('products').select('*')
    }
    
    async one({ id }) {
       return await knex('products').where({ id }).select('*')
    }
    
    async save({ data }) {
        return await knex('products').insert({ ...data })
    }
    
    async update({ id, data }) {
        return await knex('products').where({ id }).update({ ...data })
    }
    
    async delete({ id }) {
        return await knex('products').where({ id }).del()
    }
}

module.exports = new ProductRepository()