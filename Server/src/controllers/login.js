const users = require('../utils/users')
const login = (req, res)=>{
    const  {email, password} = req.query
    const coincide = users.find(u => u.email == email && u.password == password)
    if(coincide){
       return res.status(200).json({access: true})
    }else{
       return res.status(200).json({access: false})
    }
}
module.exports = {login}