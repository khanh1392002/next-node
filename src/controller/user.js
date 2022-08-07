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
export const creatuser = async  (req ,res) => {
    const user = await new User(req.body).save()
    res.json(user)
}
export const List = async (req ,res) => {
    const user = await User.find().exec()
    res.json(user)
}
export const get = async (req ,res) => {
    const user = await User.findOne({_id: req.params.id}).exec()
    res.json(user)
}
export const remove = async (req ,res) => {
    const user = await User.findByIdAndDelete({_id: req.params.id}).exec()
    res.json(user)
}
export const update = async (req ,res) => {
    const user = await User.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}).exec()
    res.json(user)
}