const expresss = require("express")
const { loginFxn } = require("../controllers/authCtrl")

const router = expresss.Router()

router.post("/login", loginFxn)

//validation middleware can be added

module.exports = router