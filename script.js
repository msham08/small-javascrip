




var dis =[
    { show:true,  img:"https://images.unsplash.com/photo-1639346865167-47a6c8cdc5f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    { show:true,  img:"https://images.unsplash.com/photo-1601814961209-dbe5eff7e3de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1347&q=80"},
    { show:true,  img:"https://images.unsplash.com/photo-1602102618389-8431a5ffd9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"},
    { show:true,  img:"https://images.unsplash.com/photo-1548416891-ec94e947aafc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    { show:true,  img:"https://images.unsplash.com/photo-1628822603421-a1f2c0821999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
]

var clutter="";
for(var i=0; i<5; i++){
    clutter+= `<div id="lk">
   
    <img src="${dis[i].img}" alt="">
    <i data-cls="close" data-ind=${i} class="ri-close-circle-fill"></i>

</div>`
}
document.querySelector("#down").innerHTML = clutter; 



document.querySelector("#down").addEventListener("click", function(dets){
    if(dets.target.dataset.cls === "close"){
        // console.log(dis);
        dis[dets.target.dataset.ind].show = false;
        // console.log(dis[dets.target.dataset.ind].show);
        // console.log(dets.target.dataset.ind);
        var clutter="";
        for(var i=0; i<5; i++){
            if(dis[i].show === true){
                console.log("for");
                clutter+= `<div id="lk">
                <img src="${dis[i].img}" alt="">
                <i data-cls="close" data-ind="${i}" class="ri-close-circle-fill"></i>
            </div>`
            }
        }
        document.querySelector("#down").innerHTML = clutter; 
    }
})


// var tl = gsap.timeline();
// tl

// .from('#lo ',{
//     ease: Expo.easeInOut,
//     duration:4,
    
//     //   y:,
//     //  x:20,
//      width:-1000

// },'-=2')

const numb = document.querySelector('#jk');
var lo = document.querySelector('#lo');
var counter =0;
setInterval(()=>{
    if(counter ==100){
        clearInterval();
    }
    else{
        counter+=1;
        numb.textContent= counter + "%";
        lo.style.width = counter +"%";
    }
},20);

// var btn =document.querySelector('#dg i ')
// var cd =document.getElementById('h5');

// btn.addEventListener('click',function() {
//      cd.innerHTML ="friend";
    
// })
// cd.addEventListener('click',function() {
//      btn.style.textContent ="friend";
    
// })


var arr=[
    {name:"brad traversy", likes:0},
    {name:"rohit ray", likes:0 },
    {name:"amit", likes:0},
    {name:"shivani", likes:0},
    {name:"mahendra", likes:0},
]

function show() {
   var acc="";
    arr.forEach(function(elem,index){
        acc+=`<div  class="name">
        <h5>${elem.name} </h5><br>
       <i id="${index}" class="ri-thumb-up-line"> </i>
        <h6>${elem.likes} Like</h6>
        </div>`
    });
    document.querySelector("#like").innerHTML=acc;
}
show();

document.querySelector('#like').addEventListener('click', function(dets) {
    arr[dets.target.id].likes++;
    var acc="";
    arr.forEach(function(elem,index){
        if(elem.name.startsWith(document.querySelector('#search').value)){
            acc+=`<div  class="name">
            <h5>${elem.name} </h5><br>
           <i id="${index}" class="ri-thumb-up-line"> </i>
            <h6>${elem.likes} Like</h6>
            </div>`
        }
    });
    document.querySelector("#like").innerHTML=acc;
});


// 

// 
document.querySelector('#search').addEventListener('input', function() {
    var acc="";
    arr.forEach(function(elem,index){
        if(elem.name.startsWith(document.querySelector('#search').value)){
            acc+=`<div  class="name">
            <h5>${elem.name} </h5><br>
           <i id="${index}" class="ri-thumb-up-line"> </i>
            <h6>${elem.likes} Like</h6>
            </div>`
        }
    });
    document.querySelector("#like").innerHTML=acc;
})



    

    


document.querySelector("#likeup").addEventListener("click",function () {
    document.querySelector("#likevalue").textContent++;
})
document.querySelector("#j").addEventListener("click",function () {
 if(document.querySelector("#likevalue").textContent>0){

        document.querySelector("#likevalue").textContent--;
     }
})



var flag = false
document.querySelector("#stranger").addEventListener('click', function () {
    if(flag===true){
        document.querySelector("#strval").textContent = "Freinds"
        document.querySelector("#strval").style.color = "green"
        flag=false
    }
    else{
        document.querySelector("#strval").textContent = "Stranger"
        document.querySelector("#strval").style.color = "red"
        flag=true
    }
})