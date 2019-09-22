module.exports = app => {
    const router = require('express').Router()

    //第二种获取model方法
    const mongoose = require("mongoose")
    const UserModel = mongoose.model("User")

    const md5 = require("blueimp-md5")// md5加密的函数

    function testSave() {
        const userModel = new UserModel({username: 'Bob', password: md5('234'), type: 'laoban'})
        userModel.save(function (error, user) {
            console.log('save()', error, user)
        })
    }

    // testSave()
    app.use('/test', router)
}
