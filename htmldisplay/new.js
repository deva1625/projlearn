async function data() {
    

    const response =await fetch("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=6a86468ac81fa36a5565acaaa9f651b5")
    const data= await response.json()

    //console.log(data)

    const {list}=data

   // console.log(list)

   const temparray=new Array()

//    for(let i=0;i<40;i=i+8){

//     const {temp,temp_min,temp_max}=list[i].main

//     // console.log(temp,temp_min,temp_max)

//     temparray.push(temp)
//    }
   
    //displaying the array items side by side

   

    //displaying arrayitems as a unordered list items
    // let list1=document.getElementById("list")

    // const cnt=0;
    // temparray.forEach((item,cnt)=>{
    //     cnt+=1;
    //     list1.innerHTML+=`<li> Temperature ${cnt}:${item}</li>`
    // })

     //displaying arrayitems as a unordered list items
    //document.getElementById("maps").innerHTML=temparray.map(item=>`<li>${item}</li>`).join("")


    //displaying in tabular form

    const tab=document.getElementById("weathertable");

    let tabledata=`
    <tr>
    <th>Temperature</th>
    <th>Max Temp</th>
    <th>Min Temp</th>
    </tr>
    `;

    for(let i=0;i<40;i=i+8){

        const{temp,temp_max,temp_min}=list[i].main

        tabledata+=
        `
        <tr>
        <td>${temp}</td>
        <td>${temp_max}</td>
        <td>${temp_min}</td>
        </tr>`;
        
    }
    tab.innerHTML=tabledata;

   
}
data()