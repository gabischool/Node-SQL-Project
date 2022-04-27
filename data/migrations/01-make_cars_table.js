exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.
    createTable('cars', (tb) => {
    tb.integer('id').primary().notNull()
    tb.string('vin').notNull().unique();
    tb.string('make').notNull()
    tb.string('model').notNull()
    tb.integer("mileage").notNull();
    tb.string("title").notNull();
    tb.string("transmission")
  })
  
  .createTable("sales", tbl => {
    tbl.increments("id").notNullable();
    tbl.integer("car_id").notNull();
    tbl.integer("customer_id")
      .unsigned()
      .notNullable()
      .reference("id")
      .inTable("cars")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.integer("sales_price").notNull();
    tbl.date("sale_date").notNull();
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTable('cars')
  .dropTable('sales')
};
