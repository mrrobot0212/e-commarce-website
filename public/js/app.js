let cart = [];

const products = [
 {name:"Women Sandal", price:1200},
 {name:"Men T Shirt", price:800},
 {name:"Ladies Bag", price:1500}
];

const container = document.getElementById("products");

products.forEach(p=>{
    container.innerHTML += `
    <div class="bg-white p-4 shadow rounded">
        <h3 class="text-xl">${p.name}</h3>
        <p>${p.price} BDT</p>
        <button onclick='addToCart("${p.name}",${p.price})'
        class="bg-purple-600 text-white px-3 py-1 mt-2">Add</button>
    </div>`;
});

function addToCart(name,price){
    cart.push({name,price});
    alert("Added to cart");
}

function openCheckout(){
    document.getElementById("checkout").classList.remove("hidden");
}

function placeOrder(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    fetch("/order",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,phone,cart})
    })
    .then(res=>res.json())
    .then(()=>{
        alert("Order placed!");
        location.reload();
    });
}