//import db from '../../db/db';
const db = require("../../data/db-config")
module.exports  = {
  getAll,
  getById,
  create
}
const getAll = () => {
  // DO YOUR MAGIC
  let row = db("cars")
  return row
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars")
        .where({ id})
        .first()
}

const create = (car) => {
  // DO YOUR MAGIC
  const [id] = await db(`cars`).insert(car)
  return getById(id)
}

const update = (id, car) => {
  // DO YOUR MAGIC
  return db("cars")
        .where({ id })
        .update(car,"*")
}

const remove = (id) => {
  // DO YOUR MAGIC
  return db("cars")
        .where({ id })
        .del()
}