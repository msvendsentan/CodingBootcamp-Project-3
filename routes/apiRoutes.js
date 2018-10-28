const controllers = require("../controllers");
const router = require("express").Router();
const passport = require('../passport')

router.route("/restaurants")
    .get(controllers.restaurant.getAll)
    .post(controllers.restaurant.create)

router.route("/restaurants/:id")
    .get(controllers.restaurant.getOne)
    .delete(controllers.restaurant.delete)

router.route("/menu")
    .post(controllers.menu.getMenu)
    .delete(controllers.menu.deleteMenuItem)

router.route("/menu/add")
    .post(controllers.menu.addMenuItem)

router.route("/tables")
    .post(controllers.table.getTables)
    .delete(controllers.table.deleteTable)

router.route("/tables/add")
    .post(controllers.table.addTable)

router.route("/tables/refresh")
    .get(controllers.table.refreshTablePsws)

router.route("/guest")
    .post(controllers.guest.create)
    .delete(controllers.guest.delete)

router.route("/queries")
    .post(controllers.query.create)
    .delete(controllers.query.delete)

router.route("/queries/restaurant")
    .post(controllers.query.getAllByRestaurant)

router.route("/signup")
    .post(controllers.auth.create)

router.post("/login", passport.authenticate('local'),
    // { successRedirect: '/', failureRedirect: '/auth' }
    (req, res) => {
        console.log('logged in', req.user);
        console.log(req.user.username);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/find', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

module.exports = router;