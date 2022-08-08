const {Router} = require ('express')
const { signup, signin,creatuser,List,get,remove,update} = require('../controller/user')


const router = Router()

router.post("/signin", signin)
router.post("/signup", signup)
router.post("/user", creatuser)
router.get("/user", List)
router.get("/user/:id", get)
router.delete("/users/:id", remove)
router.put("/user/:id", update)
module.exports = router