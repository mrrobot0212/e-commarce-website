let cart = JSON.parse(localStorage.getItem("cart")) || [];
let div = document.getElementById("cartItems");

function showCart(){
div.innerHTML="";
cart.forEach((item,index)=>{
div.innerHTML += `
<div class="bg-white p-4 shadow rounded-xl flex justify-between">
<h2>${item.name} - ${item.price} BDT</h2>
<button onclick="removeItem(${index})" class="text-red-500">Remove</button>
</div>`;
});
}
showCart();

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
location.reload();
}