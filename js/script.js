/****** slide  *** *** */
var imgArr=["/images/productg1.JPG","/images/productg2.jpg","/images/productg3.JPG"];
var i=0; var x;
document.getElementsByClassName("cc")[0].src="/images/productg1.JPG";
function start(){
     x=setInterval(function(){
        
        i++;
       if(i>2)
        {
        i=0;
        }
        
         document.getElementsByClassName("cc")[0].src=imgArr[i];
           },2000);
    
}
start();


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
        console.log(dpers);
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
     <img src="`+dpers[i].image+`"/>
     <p>`+t+`</p>
     <p>`+dpers[i].price+`$</p>
     <button class="btn-buy" onclick='getPrice(${price},${id},dpers[i].title)' type="button">Add To Cart</button>
 </div>`
 }
 console.log(temp);
 document.getElementById("f").innerHTML = temp ;
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


function fixHeader(){

   document.getElementById("head").setAttribute("class","head header-main")
}


function displayMenu(){
    document.getElementById("myDropdown").classList.toggle("show");

}


/** end of all products */