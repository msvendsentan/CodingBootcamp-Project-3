const controllers = require("../controllers");
const router = require("express").Router();

router.route("/restaurants")
    .get(controllers.restaurant.getAll)
    .post(controllers.restaurant.create)

router.route("/restaurants/:id")
    .get(controllers.restaurant.getOne)
    .delete(controllers.restaurant.delete)

module.exports = router;