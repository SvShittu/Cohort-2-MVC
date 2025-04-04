const express = require("express")
const { handleExample } = require("../controllers/testCtrl")

const router = express.Router()


router.get("/example",handleExample)


module.exports = router