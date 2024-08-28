const express = require ('express');
const router = express.Router();
const port = 5000
const {getGoals, setGoal} = require("../controllers/goalController")

router.get('/', getGoals)

router.post('/', setGoal)

router.put('/',(req, res) => {
    res.json({
        message: "menambahkan method put"
    })
})

module.exports = router