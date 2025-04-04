const expresss = require("express")
const { loginFxn, getAllCountries } = require("../controllers/authCtrl")

const router = expresss.Router()

router.post("/login", loginFxn)
router.get("/countries", getAllCountries)

//validation middleware can be added

module.exports = router