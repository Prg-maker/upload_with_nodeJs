import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

module.exports={
  dest: path.resolve(__dirname , 'temp' ,  'uploads' ),

  storage: multer.diskStorage({
    destination:()=> {
      cb(null , path.resolve(__dirname , 'temp' ,  'uploads'  ))
    },

    /*filename: (req , file , cb )=> {
       
    }*/
  }),
  
  
  limits:{
    fileSize: 2 * 1024 * 1024,

  },

  

}