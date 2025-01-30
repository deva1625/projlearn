async function data() {
    

    const response =await fetch("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=6a86468ac81fa36a5565acaaa9f651b5")
    const data= await response.json()

    //console.log(data)

    const {list}=data

    //console.log(list)

   const temparray=new Array()
   const datearray=new Array()

   for(let i=0;i<40;i=i+8){

    const {temp,temp_min,temp_max}=list[i].main

    const {dt_txt}=list[i]

    // console.log(temp,temp_min,temp_max)

    datearray.push(dt_txt)
    temparray.push(temp)
   }
   console.log(datearray)
   console.log(temparray)

}


data()