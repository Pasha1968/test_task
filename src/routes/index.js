const {Router} = require('express')
const Catalog = require('../models/product')
const router = Router()

router.get('/', async function(req,res){
    const products = await Catalog.find({})
    res.send({
        products
    })
})
router.get('/create', async function(req,res){
    res.send({
        msg:'heello',
    })
})
router.post('/create', async function(req,res){
    const product = new Catalog({
        name: req.body.name
    })
    console.log(req.body)
    console.log('---')
    console.log(req.body.name)
    await product.save()
    res.send()
})

module.exports = router