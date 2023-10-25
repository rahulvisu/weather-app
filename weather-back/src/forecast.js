const request=require('postman-request');


const forecast=(lat,long,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=f7f26ff2ffdbacadbe8a43490d7c9589&query=${encodeURIComponent(lat.toString())},${encodeURIComponent(long.toString())}`;
    request({url:url,json:true},(error,response,body)=>{
        if(error){
            callback(undefined,"network");
        }else if(body.error)
            {
            callback(undefined,"url problem");
        }else{
            console.log(body);
            callback({
                
                temperature:"the temperature  currently is "+body.current.temperature+" degree celcius",
                time:"current local time: "+body.location.localtime+" hours",
                rainChance:"the probability of rain today is "+body.current.precip.toString()+"%"
            },undefined);
        }
    })
}

module.exports=forecast;
 