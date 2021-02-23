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

document.getElementById("productImage").src= Nike.shoeImage;
document.getElementById("price").innerHTML= "KES. " + Nike.shoePrice;
document.getElementById("productDesc").innerHTML= Nike.shoeDesc;


document.getElementById("productImage2").src= Addidas.shoeImage;
document.getElementById("price2").innerHTML= "KES. " + Addidas.shoePrice;
document.getElementById("productDesc2").innerHTML= Addidas.shoeDesc;



document.getElementById("productDiv").onclick= function(){
    window.location.href = "viewmore.html" + "?" + Nike.shoeId;
}

document.getElementById("productDiv2").onclick= function(){
    window.location.href = "viewmore.html" + "?" + Addidas.shoeId;
}