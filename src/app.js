let express = require('express');
let app = express();

app.listen(3000,function(){
    console.log('started on 3000')
})

app.get('/',function(req,res){
    res.end('test');
})