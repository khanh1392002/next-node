const { Router } = require('express')
const {  List,  get, creat, update, remove } = require('../controller/news')


const router = Router()

router.get("/news", List)
router.get("/news/:id", get)
router.post("/news", creat)
router.put('/news/:id/edit', update)
router.delete('/news/:id', remove)


module.exports = router