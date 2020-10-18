const {Router} = require('express')
const Catalog = require('../models/product')
const router = Router()


router.get('/', async function(req,res){
    res.send({
        msg:'heello',
    })
})

module.exports = router