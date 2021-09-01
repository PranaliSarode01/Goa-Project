const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Rooms = require('../models/Rooms')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const { check, validationResult } = require('express-validator')



//Add rooms admin side
router.post('/add_room',
    check('room_name', 'please enter name').not().isEmpty(),
    check('about_room', 'please enter valid email').not().isEmpty(),
    check('members', 'please enter name').not().isEmpty(),
    auth, async (req, res) => {
        const valError = validationResult(req)
        if (!valError.isEmpty()) {
            res.status(400).json({ error: valError.array() })
        } else {
            try {


                let room = new Rooms({
                    room_name: req.body.room_name,
                    about_room: req.body.about_room,
                    members: req.body.members
                })



                room = await room.save()

                res.json(room)
            } catch (error) {
                console.error(error.message)
                res.status(500).send("Server Error - POST")
            }
        }



    })

//get rooms admin side
router.get('/getRoom', auth, async (req, res) => {
    try {
        const room = await Rooms.find()
        res.json(room)

    } catch (error) {
        console.log({ error })
        res.status(500).json({ msg: error })
    }
})



router.delete('/delete_room/:id',
    auth,
    async (req, res) => {

        try {
            let room = await Rooms.findById(req.params.id)
            try {
                room = await Rooms.findByIdAndRemove(req.params.id)
                res.json(room)
            } catch (error) {
                console.error(error.message)
                res.status(500).send("Server Error - DELETE")
            }
        } catch (error) {
            res.status(400).json({ error: "This room does not exist." })
        }

    })

router.put('/add_bookings/:id', auth, async (req, res) => {
    try {
        console.log(req.body[0])
        const room = await Rooms.findOneAndUpdate({ _id: req.params.id }, { $set: { check_in: req.body[0].selectedCheckinDate, check_out: req.body[0].selectedCheckoutDate } }, { new: true })
        //   let master = await Master.findOneAndUpdate({ "user": req.user.id }, { $push: { Location1: { TOP: Location1 } } }, { new: true })
        console.log(room)
        res.json(room)
    } catch (error) {
        console.log({ error })
        res.status(500).json({ msg: error })
    }
})

module.exports = router
