const router=require('express').Router()
const shortUrl=require('./models/shortUrl')
router.get('/',async(req,res)=>{
    const shortUrls=await shortUrl.find()
    res.render('index',{shortUrls: shortUrls})

})
router.post('/shortUrls',async(req,res)=>{
try{
    await shortUrl.create({full: req.body.fullUrl})
    res.redirect('/')
}
catch(err){
   console.log({error:err})
}
}
)
router.delete('/deleteAll', async (req, res) => {
    try {
      await shortUrl.deleteMany({});
      res.sendStatus(200); // Send a successful response
    } catch (error) {
      console.error(error);
      res.sendStatus(500); // Send an error response
    }
  });
router.get('/:shortUrl',async(req,res)=>{
      const ShortUrl= await shortUrl.findOne({ short:req.params.shortUrl})
     if(!ShortUrl){
        return res.sendStatus(404)
     }
     ShortUrl.clicks++
     ShortUrl.save().then(()=>{
        console.log("success")
     }).catch((err)=>{
        console.log({error:err})
     })
     res.redirect(ShortUrl.full)
    }
)
module.exports=router;