const express = require('express');
const router = express.Router();

app.get('/', (req,res)=>{
    res.send('post sweet post');
});


module.exports = router;