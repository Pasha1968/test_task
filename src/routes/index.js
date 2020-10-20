const {Router} = require('express')
const router = Router()


router.get('/', async function(req,res){
    res.send({
        msg:'heello',
    })
})

module.exports = router