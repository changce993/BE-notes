const { Router } = require("express")
const router = Router()
const controller = require("../controllers/index.controller")

router.get("/", controller.home)
router.get("/about", controller.about)

module.exports = router