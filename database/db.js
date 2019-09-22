module.exports = app => {
    /*1. 连接数据库*/
    // 1.1. 引入mongoose
    const mongoose = require("mongoose");
    // 1.2. 连接指定数据库(URL只有数据库是变化的)
    mongoose.connect("mongodb://127.0.0.1:27017/gzhipin", {
        useNewUrlParser: true
    });
    // 1.3. 获取连接对象
    const conn = mongoose.connection
    // 1.4. 绑定连接完成的监听(用来提示连接成功)
    conn.on('connected', () => {
        console.log('db connect success!')
    })
    require("require-all")(__dirname + "/../models");
}
