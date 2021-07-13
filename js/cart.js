
    var list=localStorage.getItem("item_ids")
    var j=JSON.parse(list);
    var content;
    for(var i=1;i<j.length;i++){
       content +=`
            <ul>
                <li> 
                    <p>Titel : ${j[i].title} <p>
                    <p> price : ${j[i].price} </p>    
                        
                </li>
            </ul>
        `;         
    }
    document.getElementById("orders").innerHTML=content;


 

    //console.log(JSON.parse(list));

