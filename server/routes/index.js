const express = require('express')
const router = express.Router()

const userSignUp = require('../controller/userSignUp')
const userSignin = require('../controller/userSiginIn')
const userProfile = require('../controller/userProfile')
const planEvent = require('../controller/planEvent')
const getEvents = require('../controller/getEvents')

const verifyToken = require('../middlewares/verifyToken')



//router
router.post("/sign-up",userSignUp)
router.post("/sign-in",userSignin)
router.post("/plan-event", planEvent)
router.get("/get-events", getEvents)
router.post("/user-details",verifyToken,userProfile)




module.exports = router