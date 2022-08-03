import User from "../models/user";


export const signin = async (req,res) =>{
    try {
        const {email , password} = req.body
        const user = await User.findOne({email}).exec()
        if(!user){
            res.status(401).json({
                message: "Tài khoản không tồn tại"
            })
        }
        if(user.password != password){
            res.status(401).json({
                message: "Mat khau khong dung"
            })
        }
        res.json({
            user: {
                _id: user._id,
                name:user.name,
                email:user.email,
            }
        })
        
    } catch (error) {
        
    }
}

export const signup = async (req, res) =>{
    const {name, email , password} = req.body;
    try {
        const Check = await User.findOne({email}).exec()
        if(Check){
            res.json({
                message: "Email tồn tại"
            })
        }else{
            const user = await new User({name, email, password}).save()
            res.json({
                user: {
                    _id: user._id,
                    name:user.name,
                    email:user.email,
                }
            })
        }
    } catch (error) {
        
    }
}
