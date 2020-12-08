const express = require('express')
const utils = require("../utils/utilFunctions")

const router = express.Router()

router.get("/", (req,res,next) => {
    let { size, text } = req.query
    
    if (size == "lower") {
        res.send(utils.formatStringLower(text))
    } else if (size == "upper") {
        res.send(utils.formatStringUpper(text))
    } else {
        res.send(text)
    }
})

module.exports = router