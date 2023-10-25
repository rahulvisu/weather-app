const request=require('postman-request');
const weather=require("./weather.js");
const geocode=require('./geocode.js')
// const url="http://api.weatherstack.com/current?access_key=f7f26ff2ffdbacadbe8a43490d7c9589&query=37.8267,-122.4233";
// request({url:url,json:true},(error,response,body)=>{
//     if(error){
//         console.log("network issue");
//     }else if(body.error){
    
//         console.log("cant find the location")
//     }else{
//     console.log(`the humidity level is ${body.current.humidity}`);
//     }
// })
const location=process.argv[2];
if(!location){
    console.log("no address");
}else{

geocode(location,(data,error)=>{
    weather(data.latitude,data.longitude,(data,error)=>{
          console.log(data);
          console.log(error);
    })
    
})
}













