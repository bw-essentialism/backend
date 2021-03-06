// db config
const db = require('../utilities/dbConfig');


module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    addUserValue,
    removeValues
};

function find() {
    return db('values')
}

function findById(id) {
    return db('values')
        .where({ id })
        .first()
}

function add(payload) {
    return db('values')
        .insert(payload)
}

function update(id, payload) {
    return db('values')
        .where({ id })
        .update(payload)
}

function remove(id) {
    return db('values')
        .where('id', id)
        .del()
}

function addUserValue(userId, valueId) {
    return db('user-values')
        .insert({ user_id: userId, value_id: valueId })
}

function removeValues(id, valueId) {
    return db('user-values')
        .where({ user_id: id, value_id: valueId })
        .del()
}