let products = [
 {id:1,name:"Women Sandal",price:1200,img:"https://picsum.photos/400?1"},
 {id:2,name:"Ladies Bag",price:1500,img:"https://picsum.photos/400?2"},
 {id:3,name:"Men T-Shirt",price:800,img:"https://picsum.photos/400?3"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const div = document.getElementById("products");

products.forEach(p=>{
div.innerHTML += `
<div class="bg-white rounded-2xl shadow hover:shadow-2xl transition hover:-translate-y-2">
<img src="${p.img}" class="h-48 w-full object-cover rounded-t-2xl">
<div class="p-4">
<h2 class="text-xl font-semibold">${p.name}</h2>
<p class="text-purple-600 font-bold text-lg">${p.price} BDT</p>
<button onclick="addToCart(${p.id})"
class="w-full mt-3 bg-purple-600 text-white py-3 rounded-xl text-lg active:scale-95">
Add to Cart 🛒</button>
</div></div>`;
});

function addToCart(id){
 const product = products.find(p=>p.id==id);
 cart.push(product);
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("Added to Cart");
}