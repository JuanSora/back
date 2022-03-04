const express =require ('express')
const app= express()
const port= process.env.PORT || 8001

app.get('/lists',(req,res,next)=>{
    res.json('hello World')
})


app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})