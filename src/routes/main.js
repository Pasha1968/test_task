const {Router} = require('express')
const router = Router()

router.get('/',function(req,res){
    res.send({
        msg:'hello my dear friend'
    })
})

module.exports = router