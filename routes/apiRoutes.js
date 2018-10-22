const controllers = require("../controllers");
const router = require("express").Router();

router.route("/restaurants")
    .get(controllers.restaurant.getAll)
    .post(controllers.restaurant.create)

router.route("/restaurants/:id")
    .get(controllers.restaurant.getOne)
    .delete(controllers.restaurant.delete)

router.route("/menu")
    .post(controllers.admin.getMenu)
    .delete(controllers.admin.deleteMenuItem)

router.route("/menu/add")
    .post(controllers.admin.addMenuItem)

router.route("/tables")
    .post(controllers.admin.getTables)
    .delete(controllers.admin.deleteTable)

router.route("/tables/add")
    .post(controllers.admin.addTable)

router.route("/tables/refresh")
    .get(controllers.admin.refreshTablePsws)

module.exports = router;