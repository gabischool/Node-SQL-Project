//import db from '../../db/db';
const db = require("../../data/db-config")
module.exports  = {
  getAll,
  getById,
  create,
  update,
  remove
}
const getAll = () => {
  let row = db("cars")
  return row
}

const getById = (id) => {
  return db("cars")
        .where({ id})
        .first()
}

const create = async (car) => {
  const [id] = await db('cars').insert(car)
  return getById(id)
}

const update = (id, car) => {
  return db('cars')
        .where({ id })
        .update(car,"*")
}

const remove = (id) => {
  return db('cars')
        .where({ id })
        .del()
}