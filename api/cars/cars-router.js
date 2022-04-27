// DO YOUR MAGIC
const exoress = require("express");

const dbCars = require("./cars-model");

const router = exoress.Router();

// Get all cars
router.get("/", (req, res) => {
  dbCars
    .getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get cars" });
    });
});

// Get car by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  dbCars
    .getById(id)
    .then((car) => {
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get car" });
    });
});

// Create car
router.post("/", (req, res) => {
  const car = req.body;

  dbCars
    .create(car)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create car" });
    });
});

// Update car
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const car = req.body;

  dbCars
    .update(id, car)
    .then((car) => {
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update car" });
    });
});

// Delete car
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  dbCars
    .remove(id)
    .then((car) => {
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: "Car not  found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete car" });
    });
});

module.exports = router;
