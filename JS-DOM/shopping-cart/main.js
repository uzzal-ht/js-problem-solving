const productRow = document.querySelector(".product-inner")
const cartItemsList = document.querySelector(".cart-items-wrapper")


const productEndPoint = "http://localhost:3000/products"
const cartEndPoint = "http://localhost:3000/cart"

const fetchProducts = async (productEndPoint) => {
    const {data} = await axios.get(productEndPoint);

    renderProduct(data)
    showCart(data)
}
fetchProducts(productEndPoint)


// product items render function
function renderProduct(products) {
    products.forEach(item => {
        const html = `
            <div class="col-lg-3">
                <div class="product-item">
                    <div class="thumb">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="info">
                        <div class="info-inner">
                            <h5 class="title">${item.title}</h5>
                            <h6 class="price">$${item.price}</h6>
                        </div>
                        <button type="button" class="btn btn-secondary action-btn" data-id="${item.productId}" >Add to Cart</button>
                    </div>
                </div>
            </div>
        `
        productRow.insertAdjacentHTML("beforeend", html)
    })
}


let cartData = []

// cart items render function
function renderCartData() {
    cartData.find(item => {
        const cartItem = `
            <li class="cart-item">
                <div class="cart-thumb">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-info">
                    <h6 class="title">${item.title}</h6>
                    <p>Qty: <span>1</span></p>
                    <h6 class="price">$${item.price}</h6>
                </div>
            </li>
        `
        cartItemsList.innerHTML += cartItem
    })
}


// add to cart click handler function
function showCart(products) {
    productRow.addEventListener("click", function(e) {
        const target = e.target
        if(target.classList.contains("action-btn")) {
            const proId = target.dataset.id
    
            products.find(item => {
                if(item.productId == proId) {
                    postCartData(item)
                }
            })
        }
    })
}


// add to cart click handler function
async function postCartData(item) {
    const {data} = await axios.post(cartEndPoint, item)
    renderCartData(data)
}


// cart items fetch
async function fetchCartData() {
    const {data} = await axios.get(cartEndPoint)
    cartData.push(...data)
    renderCartData(data)
}
fetchCartData()