console.log("hallo");


const form=document.querySelector('#weatherForm');
const input=document.querySelector('#weather');
const msg1=document.querySelector('#rainChance');
const msg2=document.querySelector('#temp');
const msg3=document.querySelector('#time');
   
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const location=input.value;
     msg1.textContent="loading weather for you...."
    fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response)=>{
        response.json().then((data)=>{
            if(data.error){
             msg1.textContent=data.error;
            }else{
            msg1.textContent=data.rainChance;
            msg2.textContent=data.temperature;
            msg3.textContent=data.time;
            }
    
            }
        )
    })

    

    
})