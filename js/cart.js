let cart= JSON.parse(localStorage.getItem("cart")) || [];
function loadCart()
{
    let cart= JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems= document.getElementById("cart-items");
    let totalAmount=0;
    cartItems.innerHTML="";

    cart.forEach((item,index) => {
        let itemTotal= item.price * item.quantity;
        totalAmount+=itemTotal;

        cartItems.innerHTML +=`

        <tr>
            <td><img src="${item.imageurl}" width="50"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index},-1)">-</button>
                ${item.quantity}
                <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index},1)">+</button>
            </td>

            <td>₹ ${itemTotal}</td>
            <td><button class="btn btn-danger btn-sm" onclick="changeQuantity(${index})">X</button>
            </td>
        </tr>
        `;
    });
    document.getElementById("total-amount").innerText=totalAmount;
}

function addToCart(id,name,price,imageurl)
{
    console.log("Adding product to cart:",id,name,price,imageurl);

    price= parseFloat(price);
    let itemIndexCart= cart.findIndex((item) => item.id===id)
    if(itemIndex!==-1)
    {
        cart([itemIndex].quantity+=1);
    }
    else{
        cart.push({
            id:id,
            name:name,
            price:price,
            imageurl: imageurl,
            quantity:1
        });  
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
}

function updateCartCounter()
{
    document.querySelector(".cart-badge").innerText=cart.length;
}

document.addEventListener("DOMContentLoaded",loadCart);