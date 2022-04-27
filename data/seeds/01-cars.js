// STRETCH
exports.seed = function (knex, Promise) {
  return knex("cars").insert([
    {
      vin: "WAUFFBFL6CA653708",
      model: "A3",
      make: "Audi",
      mileage: 94,
      title: "Tagpad",
      transmission: "Bytecard",
    },
    {
      vin: "WVGAV7AX5CW820856",
      model: "Sunfire",
      make: "Pontiac",
      mileage: 63,
      title: "Tazzy",
      transmission: "Redhold",
    },
    {
      vin: "WBA3B5C58EP736403",
      model: "Fusion",
      make: "Ford",
      mileage: 21,
      title: "Roodel",
      transmission: "Tampflex",
    },
  ]);
};
