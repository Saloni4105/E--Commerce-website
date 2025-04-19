const BASE_URL="http://localhost:8080"

async function loadProducts()
{
    try{
        const response= await fetch(`${BASE_URL}/products`);
        const products= await response.json();
        console.log(products)

        let trendingList= document.getElementById("trending-products");
        let clothingList= document.getElementById("clothing-products");
        let electronicsList= document.getElementById("electronics-products");

        trendingList.innerHTML="";
        clothingList.innerHTML="";
        electronicsList.innerHTML="";

        products.forEach(products => {
            let productCard= `
                    <div class="col-lg-4 col-md-6">
                        <div class="card h=100">
                            <img src= "${products.imageurl}" class="card-img-top" alt="${products.name}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${products.name}</h5>
                                <p class="card-text">${products.description}</p>
                                <p class="price"><strong>₹${products.price}</strong></p>
                                <button class="btn btn-primary mt-auto"
                                onclick="addToCart(${products.id},'${products.name}',${products.price},'${products.imageurl}')">
                                Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
            `;

            if(products.category==="Clothing")
            {
                clothingList.innerHTML +=productCard;
            }
            else if(products.category==="Electronics")
            {
                electronicsList.innerHTML +=productCard;
            }
            else
            {
                trendingList.innerHTML +=productCard;
            }
        });
    }
    catch(error)
    {
        console.log("Error fteching Products:",error);
    }
   
}