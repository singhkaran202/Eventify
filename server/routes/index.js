const express = require('express')
const router = express.Router()

const userSignUp = require('../controller/userSignUp')
const userSignin = require('../controller/userSiginIn')
const userProfile = require('../controller/userProfile')
const planEvent = require('../controller/planEvent')
const getUpcomingEvents = require('../controller/getUpcomingEvents')
const getPastEvents = require('../controller/getPastEvents')
const participantEmail = require('../controller/participantEmail')

const verifyToken = require('../middlewares/verifyToken')



//router
router.post("/sign-up",userSignUp)
router.post("/sign-in",userSignin)
router.post("/plan-event", planEvent)
router.get("/get-upcoming-events",verifyToken, getUpcomingEvents)
router.get("/get-past-events",verifyToken, getPastEvents)
router.post("/user-details",verifyToken,userProfile)
router.post("/sendemail", participantEmail)




module.exports = router