import {Router} from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

const routes = Router()


routes.post('/posts' , multer(multerConfig).single('file'), (req , res)=> {

  console.log(req.file)

  return res.json('deu certo o upload' , req.file)

})


export default routes