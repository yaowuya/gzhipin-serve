const mongoose = require('mongoose')
/*2. 定义出对应特定集合的Model并向外暴露*/
// 2.1. 字义Schema(描述文档结构)
const userSchema = new mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型: dashen/laoban
    header: {type: String}, // 头像名称
    post: {type: String}, // 职位
    info: {type: String}, // 个人或职位简介
    company: {type: String}, // 公司名称
    salary: {type: String} // 月薪
})
// 2.2. 定义Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('User', userSchema, "Users") // 集合为: users
// 2.3. 向外暴露Model
module.exports = UserModel
