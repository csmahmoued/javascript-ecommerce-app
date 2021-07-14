/****** slide  *** *** */
let imgArr=["/images/productg1.JPG","/images/productg2.jpg","/images/productg3.JPG"];
let gslides=document.querySelector(".slide");

    setInterval(()=>{
        let RandomNumber=Math.floor(Math.random() * imgArr.length);
        gslides.style.backgroundImage='url("'+imgArr[RandomNumber]+'")';
       
    },2000);



/*******  end slide */

/***** get all prouds  */
// console.log("https://fakestoreapi.com/products");
var dpers;
var data=new XMLHttpRequest();
 data.open("GET","https://fakestoreapi.com/products")
 data.onreadystatechange=function()
 {
     if(data.status== 200 && data.readyState== 4)
     {
        dpers=JSON.parse(data.response);
        display();
     }
 }
 data.send(); 
 function display(){
    var temp="";
 for(var i=0;i<dpers.length;i++ )
 {
     var p=String(dpers[i].description);
     var price=dpers[i].price;
     var id=dpers[i].id;
     var t=dpers[i].title;
     temp +=` <div class="item">
     <img class="img-box" src="`+dpers[i].image+`" onclick='getImgDesc(dpers[i].description)'/>
     <p>`+t+`</p>
     <span class="price-span">`+dpers[i].price+`$</span>
     <span class="btn-buy" onclick='getPrice(${price},${id},dpers[i].title)'>add to cart</span>
 </div>`
 }
 document.querySelector(".f").innerHTML = temp ;
}
var c;
var i;
var item_ids =[];
p={
    id:'',
    title:'',
    price:''
}
if(localStorage.getItem("item-count")==null){
    c=0;
}else{
    c=localStorage.getItem("item-count")
}
if(localStorage.getItem("item_ids")==null){
    item_ids.push(p);
    i=0;
}else{
    var list=localStorage.getItem("item_ids")
    var j=JSON.parse(list);
    for(var i=0;i<j.length;i++){
       item_ids.push(j[i]);
    }

}

function getPrice(price,id,title){
    c++;
    p={ id:id,
        'title':title,
        'price':price
    };
    item_ids.push(p);
    
 
    localStorage.setItem("item_ids",JSON.stringify(item_ids)); 
    localStorage.setItem("item-count",c);
    document.getElementById("cart-item-counter").innerHTML=c;

}
document.getElementById("cart-item-counter").innerHTML=localStorage.getItem("item-count");

///**** Start Fixed Header *****  */

window.addEventListener('scroll',(e)=>{
  let h=document.querySelector(".header-main");

  h.classList.toggle("head",window.scrollY > 0);
});

/*****  End Fixed Header */




/** end of all products */



/*****  */
let imgDesciption;
function getImgDesc(desc){
    imgDesciption=desc;
}   
document.body.addEventListener('click',(e)=>{
    if(e.target.className=="img-box"){
        let overlay=document.createElement("div");
        overlay.className="body-overlay";
        document.body.appendChild(overlay);


        let popupBox=document.createElement("div");
        let ImgDedc=document.createElement("p");

            ImgDedc.innerHTML=imgDesciption;

        popupBox.className="popup-box";
        let imgPop=document.createElement("img");
            imgPop.className="resize-imgpop"
            ImgDedc.className="img-desc";

        imgPop.src=e.target.src;
        popupBox.appendChild(imgPop);
        popupBox.appendChild(ImgDedc);

        document.body.appendChild(popupBox);

         let spanNode=document.createElement("span");
         spanNode.className="span-box";
         let txtBtn=document.createTextNode("X");
 
         spanNode.appendChild(txtBtn);
 
         popupBox.appendChild(spanNode);

         
        
    }
})


document.body.addEventListener('click',(e)=>{
    if(e.target.classList=="span-box"){
        document.querySelector(".popup-box").remove();
        document.querySelector(".body-overlay").remove();
    }
});

