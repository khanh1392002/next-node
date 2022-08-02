import Products from '../models/products'

export const creat = async  (req ,res) => {
    const products = await new Products(req.body).save()
    res.json(products)
}
export const List = async (req ,res) => {
    const products = await Products.find().exec()
    res.json(products)
}
export const get = async (req ,res) => {
    const products = await Products.findOne({_id: req.params.id}).exec()
    res.json(products)
}
export const remove = async (req ,res) => {
    const products = await Products.findByIdAndDelete({_id: req.params.id}).exec()
    res.json(products)
}
export const update = async (req ,res) => {
    const products = await Products.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}).exec()
    res.json(products)
}
