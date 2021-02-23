var Nike = {
    shoeImage:"images/nike1.jpg",
    shoePrice: 5000,
     shoeDesc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
   shoecolor: "black" ,
   shoeSize : "37",
   shoeId:"601"
}
var Addidas = {
    shoeImage:"images/addidas1.jpg",
    shoePrice: 7000,
     shoeDesc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
   shoecolor: "black" ,
   shoeSize : "37",
   shoeId:"602"
}

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);

document.getElementById("itemPrice").innerHTML = queryString;

if(queryString == Nike.shoeId){
   document.getElementById("itemsImage").src = Nike.shoeImage;
   document.getElementById("itemPrice").innerHTML = "Shoe Price: " + Nike.shoePrice;
   document.getElementById("itemDesc").innerHTML=Nike.shoeDesc;
   document.getElementById("itemColor").innerHTML= "Shoe Color: " + Nike.shoecolor;
   document.getElementById("itemSize").innerHTML=Nike.shoeSize;
   
}else if(queryString == Addidas.shoeId){
    document.getElementById("itemsImage").src = Addidas.shoeImage;
    document.getElementById("itemPrice").innerHTML =  "Shoe Price: " + Addidas.shoePrice;
    document.getElementById("itemDesc").innerHTML=Addidas.shoeDesc;
    document.getElementById("itemColor").innerHTML = "Shoe Color: " + Addidas.shoecolor;
    document.getElementById("itemSize").innerHTML=Addidas.shoeSize;
 
}

