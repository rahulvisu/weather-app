const path=require('path')

const geocode=require('./geocode.js');
const forecast=require('./forecast.js');
const express=require('express');
const ejs=require('ejs')

const app=express();

app.use(express.static('../public'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'));




app.get('/',(req,res)=>{
    res.render('weather.ejs');
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"give the address"
        })
    }
    const address=req.query.address;
    
    
    geocode(address,(error,{latitude,longitude}={})=>{
        if(error){
            return res.send(error);
        }
        forecast(latitude,longitude,(data,error)=>{
            if(error){
                return res.send(error);
            }
              res.send(data);
        })
        
    })
})


app.get('/help',(req,res)=>{
    res.render('help');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

// app.get('*',(req,res)=>{
//     res.send("error");
// })



 



app.listen(3000,()=>{
    console.log("started on 3000");
})