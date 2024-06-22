const express = require('express');
const {authMiddleware} = require('../middlewares/middlewares')
const {Account} = require('../schemas/db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get('/profile',authMiddleware,async (req,res)=>{
    const userId = req.userId;
    const user = await Account.findOne({
        userId : req.userId
    });
    
    res.status(201).json({user});
});



module.exports = router;