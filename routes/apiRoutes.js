const controllers = require("../controllers");
const router = require("express").Router();

router.route("/path")
    .get(controllers.admin.method);

module.exports = router;