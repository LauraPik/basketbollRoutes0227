const express = require('express');

const router = express.Router();

const playersController = require('../controllers/basketballController');
const authControler = require('../controllers/authControler');


router
.route('/')
.get(authControler.protect, playersController.getAllPlayers)
.post(authControler.protect,  playersController.createPlayer)
router
.route('/:id')
.get(authControler.protect, playersController.getPlayer)

router
.route('/team/:teamName/members')
.get(authControler.protect, playersController.getTeamOfPlayers)

module.exports = router;