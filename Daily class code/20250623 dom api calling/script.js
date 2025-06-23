const productContainer = document.querySelector("#product-container");

const allProductsApi = `https://dummyjson.com/products`;

// GET
// To get some data from the database
// POST
// To store any data to database
// PUT
// to update any data in database
// DELETE
// To delete or remove any data from database

/**
 * @methods
 * 1. Two methods are widely used to get data from api
 * -    a. fetch( used in js)
 * -    b. axios( used in react, angular and others)
 *
 */

/**
 * @description process to call any api
 * 1. create a self explanatory function name
 * 2. use try catch block
 * 3. make it asynchronous call (.then, async/await/ Promise)
 * 4. store response in a variable
 * 5. in case of error store error message for reference
 */
const fetchProductsUsingThen = () => {
  try {
    fetch(allProductsApi)
      .then((res) => res.json())
      .then((data) => {
        console.log("data---", data);

        data.products.forEach((product) => {
          //   const productTitle = document.createElement("h1");
          //   productTitle.innerText = product?.title;
          //   productContainer.append(productTitle);

          let singleProduct = document.createElement("div");
          singleProduct.classList.add("product-card");
          singleProduct.innerHTML = ` 
            <img
              class="product-img"
              src=${product?.thumbnail}
              alt="Headphones"
            />
            <div class="product-title">${product?.title}</div>
            <div class="product-description">${product?.description}</div>
            <div class="product-rating">Rating: ${product?.rating}</div>

            <div class="product-price">$${product?.price}</div>
            <button class="add-cart-btn">Add to Cart</button>
          `;
          productContainer.append(singleProduct);
        });
      });
  } catch (err) {
    console.log("Error found--", err);
  }
};
// fetchProductsUsingThen();

const fetchProductsUsingAsyncAwait = async () => {
  try {
    let response = await fetch(allProductsApi);
    response = await response.json();
    console.log("response--", response);

    let productMainTitle = document.createElement("h1");
    productMainTitle.classList.add("product-container-title");
    productMainTitle.innerText = `Total Products: ${response?.total}`;
    productContainer.append(productMainTitle);

    const productSection = document.createElement("div");
    productSection.classList.add("product-section");

    const productsFromApi = response?.products;
    productsFromApi?.forEach((product) => {
      let singleProduct = document.createElement("section");
      singleProduct.classList.add("single-product");
      singleProduct.innerHTML = `
            <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            
                <!-- Product Images -->
                <div style="flex: 1; min-width: 260px;">
                    <img
                        src=${product?.thumbnail}
                        alt=${product?.thumbnail}
                        style="width: 100%; max-width: 320px; border-radius: 8px; background: #f0f0f0;"
                    />
                    
                </div>
                <!-- Product Details -->
                <div style="flex: 2; min-width: 280px;">
                    <h2 style="margin-top:0;">${product?.title}</h2>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                        <span style="color: #f5b50a; font-size: 1.2rem;">
                             ${
                               (Math.round(product?.rating) == 1 && `★☆☆☆☆`) ||
                               (Math.round(product?.rating) == 2 && `★★☆☆☆`) ||
                               (Math.round(product?.rating) == 3 && `★★★☆☆`) ||
                               (Math.round(product?.rating) == 4 && `★★★★☆`) ||
                               (Math.round(product?.rating) == 5 && `★★★★★`) ||
                               (Math.round(product?.rating) < 1 && `☆☆☆☆☆`)
                             }
                        </span>
                        <span style="color: #888; font-size: 0.95rem;">${
                          product?.rating
                        } (${product?.reviews.length} reviews)</span>
                    </div>
                    <div style="margin-bottom: 1rem; color: #444;">
                        <strong>Discount:</strong>
                        <span style="color: green; font-weight: 500;">${
                          product?.discountPercentage
                        }%</span>
                        <span style="margin-left: 1.5rem;"><strong>Stock:</strong> ${
                          product?.stock
                        } units</span>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <span style="font-size: 1.5rem; color: #2d6cdf; font-weight: bold;">$${
                          product?.price
                        }</span>
                        <span style="margin-left: 1.5rem; color: #888;">Warranty: ${product?.warrantyInformation.replaceAll(
                          "warranty",
                          ""
                        )}</span>
                    </div>
                    <p style="font-size: 1rem; color: #555; margin-bottom: 1.5rem;">${
                      product?.description
                    }</p>
                    <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                        <button class="add-cart-btn" style="padding: 0.7rem 1.5rem;">Add to Cart</button>
                        <button class="add-cart-btn" style="background: #28a745; padding: 0.7rem 1.5rem;">Buy Now</button>
                    </div>
                    
                </div>
            </div>
`;

      productSection.append(singleProduct);
    });

    productContainer.append(productSection);
  } catch (err) {
    console.error("error in fetching products", err);
  }
};
fetchProductsUsingAsyncAwait();
