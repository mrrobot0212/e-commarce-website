function placeOrder(){

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const order = {
 name:document.getElementById("name").value,
 phone:document.getElementById("phone").value,
 address:document.getElementById("address").value,
 items:cart,
 date:new Date().toLocaleString()
};

fetch("http://localhost:3000/api/order",{   // ⭐ ABSOLUTE LINK
 method:"POST",
 headers:{ "Content-Type":"application/json" },
 body:JSON.stringify(order)
})
.then(res=>res.json())
.then(()=>{
 alert("Order placed SUCCESS 🎉");
 localStorage.removeItem("cart");
 window.location="index.html";
})
.catch(()=>{
 alert("Server not running! Run node server.js");
});
}