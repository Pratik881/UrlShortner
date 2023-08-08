const express=require('express')
const app=express()
const routes=require('./routes')
app.use(express.urlencoded({extended:true}))
const ShortUrl=require('./models/shortUrl')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/urlShortner',{
  useNewUrlParser: true,useUnifiedTopology:true
}).then(()=>{
  console.log('connected to db')
})
.catch((error)=>{z
  console.log('error connecting to the database',error)
})
const path=require('path')
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')
const PORT= process.env.PORT || 3000;
app.use('/',routes)
app.listen(PORT,()=>{
   console.log( `App listening on port ${PORT}`)
})