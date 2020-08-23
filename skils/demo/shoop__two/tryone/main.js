// ПЕременная с классом обьекта(кнопки)
let carts = document.querySelectorAll('.add-cart');
// создаем обьект
let products = [
    {
        name: 'Great Thist',
        tag: '1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Great Thist',
        tag: '2',
        price: 12,
        inCart: 0
    },
    {
        name: 'Great Thist',
        tag: '3',
        price: 100,
        inCart: 0
    },
    {
        name: 'Great Thist',
        tag: '4',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: '5',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: '6',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: '7',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: '8',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt9',
        price: 146,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt0',
        price: 15,
        inCart: 0
    }, 
    {
        name: 'Grey This',
        tag: 'greytshirt11',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt12',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt13',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt14',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt15',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt16',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey This',
        tag: 'greytshirt17',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Thisfsfs',
        tag: 'greytshirt18',
        price: 15,
        inCart: 0
    },
];
// цикл который перебирает все обьекты с этим классом
for (let i=0; i < carts.length;i++) {
  carts[i].addEventListener('click', () =>{
    cartNumber(products[i]);
    totalCost(products[i])
  })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumber(product) {
//    при нажатии на кноп добавляется локал ст
    let productNumbers = localStorage.getItem('cartNumbers');
    // масив был строчкой, теперь цифрами
    productNumbers = parseInt(productNumbers);
   if (productNumbers) {
    //    при нажатии увеличения на один в корзине и лок стор
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
   } else {
    localStorage.setItem('cartNumbers', 1);
    // доступ по классу карт и тег span
    document.querySelector('.cart span').textContent = 1;
   }
   setItems(product);
}
function setItems(product) {
let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);

if(cartItems !== null) {
  if(cartItems[product.tag] == undefined) {
      cartItems = {
          ...cartItems, 
          [product.tag]: product
      }
  }
cartItems[product.tag].inCart += 1; 
} else {
    product.inCart = 1;
    cartItems = {
     [product.tag]: product
    }
}
localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
// console.log('whats it', product.price);
// let cartCost = localStorage.getItem('totalCost');


console.log('whats it', cartCost);
console.log(typeof cartCost);

if (cartCost != null) {
    cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost + product.price);
} else {
    localStorage.setItem("totalCost", product.price);
}
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
//   связь с клвссом products__container
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');
  
  console.log(cartItems);
 if ( cartItems && productContainer ) {
    productContainer.innerHTML = '';
    
    Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
        <ion-icon class="ioncancel" name="close-circle-outline"></ion-icon>
        <img src="img/${item.tag}.png" alt="">
        <span class="namepr">${item.name}</span>
        <div class=""price>${item.price} грн</div>
        <div class="qwerty">
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div class="total">${item.inCart * item.price} грн</div>
        </div>
      
        `;
    });
    // cartCost = parseInt(cartCost);
    // inCart = parseInt(inCart);
  
    productContainer.innerHTML += `
    <div class="basketotal">
    <h4 class="baskettitle">Общая сумма</h4>
    <h4 class="totalcost">${cartCost} грн</h4>
    </div>
    `;
 }
}

onLoadCartNumbers();
displayCart();