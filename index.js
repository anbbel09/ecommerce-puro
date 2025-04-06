const plusCount = document.getElementById('plus');
const minusCount = document.getElementById('minus');
const Count = document.getElementById('setCount');
const cart = document.getElementById('cart');
const cartCanvas = document.getElementById('cartCanvas');
const btnCart = document.getElementById('btnCart');
const Arr = [];
const ObjCart = 0;
const TextEmpty = document.getElementById('TextEmpty');
let cartProductInfo = document.getElementById('cartProductInfo');
let nameProduct = document.getElementById('nameProduct');
let priceProduct = document.getElementById('priceProduct');


// cart.addEventListener('click', () => {
//     if (cartCanvas.style.visibility === 'hidden') {
//         cartCanvas.style.visibility = 'visible';
//     } else {
//         cartCanvas.style.visibility = 'hidden';
//     }
// });

// plusCount.addEventListener('click', () => {
//     let setCount = parseInt(Count.textContent);
//     setCount++; 
//     Count.textContent = setCount;
//     Arr.push(setCount); // Agregás al array
// });

// minusCount.addEventListener('click', () => {
//     let setCount = parseInt(Count.textContent); 
//         setCount--; 
//         Count.textContent = setCount;
//         Arr.pop(); 
//         if(Arr.length == 0){
//             cartProductInfo.innerHTML = ``;
//         }
// });

// btnCart.addEventListener('click', () => {
//     if( Arr.length > 0){

//         TextEmpty.style.display = 'none';
        
//        let ObjCart = {
//             name: nameProduct.textContent,
//             count: Arr,
//             price: parseInt(priceProduct.textContent),
//             total: parseFloat(Count.textContent) * parseInt(priceProduct.textContent)
//         };
//         console.log(ObjCart);
//         cartProductInfo.innerHTML = `<figure class="w-1/4 my-2"><img class="rounded-lg" src="/images/image-product-1.jpg"></figure>
//         <div>
//             <h2 class="mt-2">${ObjCart.name}</h2>
//             <div>
//             <p class="text-gray-400 font-medium ">$${ObjCart.price} x ${parseInt(Count.textContent)} <b class="text-black"> $${ObjCart.total}</p>
//             </div>
//         </div>`;
//     } else{
//         TextEmpty.style.display = 'block';
        
        
//     }


// });

cart.addEventListener('click', () => {
    cartCanvas.style.visibility = (cartCanvas.style.visibility === 'hidden' || cartCanvas.style.visibility === '') 
        ? 'visible' 
        : 'hidden';
});

function updateCartUI() {
    if (Arr.length > 0) {
        TextEmpty.style.display = 'none';

        let ObjCart = {
            name: nameProduct.textContent,
            count: Arr,
            price: parseInt(priceProduct.textContent),
            total: parseInt(Count.textContent) * parseInt(priceProduct.textContent)
        };

        cartProductInfo.innerHTML = `
            <figure class="w-1/4 my-2">
                <img class="rounded-lg" src="/images/image-product-1.jpg">
            </figure>
            <div>
                <h2 class="mt-2">${ObjCart.name}</h2>
                <div>
                    <p class="text-gray-400 font-medium">
                        $${ObjCart.price} x ${ObjCart.count.length} 
                        <b class="text-black"> $${ObjCart.total}</b>
                    </p>
                </div>
            </div>`;
            
    } else {
        TextEmpty.style.display = 'block';
        cartProductInfo.innerHTML = ``;
    }
}

plusCount.addEventListener('click', () => {
    let setCount = parseInt(Count.textContent);
    setCount++; 
    Count.textContent = setCount;
    Arr.push(setCount);
    updateCartUI();
});

minusCount.addEventListener('click', () => {
    let setCount = parseInt(Count.textContent);
    if (setCount > 0) {
        setCount--; 
        Count.textContent = setCount;
        Arr.pop();
    }
    updateCartUI();
});

btnCart.addEventListener('click', () => {
    updateCartUI();
    cartCanvas.style.visibility = 'visible';
});

