// config db
const db = require('../utilities/dbConfig');

// export functions
module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
        .where({ id })
}

function add(payload) {
    return db('projects')
        .insert(payload)
}

function update(id, payload) {
    return db('projects')
        .where({ id })
        .update(payload)
}

function remove(id) {
    return db('projects')
        .where('id', id)
        .del()
}