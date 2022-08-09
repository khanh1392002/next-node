import News from "../models/news"

export const creat = async  (req ,res) => {
    const news = await new News(req.body).save()
    res.json(news)
}
export const List = async (req ,res) => {
    const news = await News.find().exec()
    res.json(news)
}
export const get = async (req ,res) => {
    const news = await News.findOne({_id: req.params.id}).exec()
    res.json(news)
}
export const remove = async (req ,res) => {
    const news = await News.findByIdAndDelete({_id: req.params.id}).exec()
    res.json(news)
}
export const update = async (req ,res) => {
    const news = await News.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}).exec()
    res.json(news)
}
