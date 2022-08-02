import {Router} from 'express'
import { creat, get, List, remove, update } from '../controller/products'

const router = Router()

router.post("/products", creat)
router.get("/products", List)
router.get("/product/:id", get)
router.delete("/products/:id", remove)
router.put("/products/:id", update)
module.exports =  router