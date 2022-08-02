const { Router } = require('express')
const {add, read, getall, edit, get, removect } = require('../controller/categories')


const router = Router()

router.get("/categorys", getall)
router.get("/categorys/:id", get)
router.post("/categorys", add)
router.get('/category/:id', read)
router.put('/category/:id/edit', edit)
router.delete('/category/:id', removect)


module.exports = router