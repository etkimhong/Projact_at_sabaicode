fetch('http://localhost:3000/product')
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data.product);
        document.getElementById("box").innerHTML = data.map(item => {
            return `
                <div class="pro-item">
                    <div class="image">
                        <img src="${item.img}" alt="">
                        <div class="dis">
                           <p>50%</p>
                        </div>
                    </div>
                    <div class="title">
                        <div class="left">
                            <p>HealthCare</p>
                            <h3>${item.title}</h3>
                            <h4>$${item.Dic} <s>$${item.price}</s> </h4>
                            <p>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star" style="color: gray;"></i>
                            </p>
                        </div>
                        <div class="right">
                             <i  class="fa-solid fa-shop"></i>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Add click event listeners to the newly created elements
        const cartCountElement = document.getElementById('cart-count');
        let cartCount = 0;

        const rightButtons = document.querySelectorAll('.right');
        rightButtons.forEach(button => {
            button.addEventListener('click', () => {
                const isGreen = button.style.backgroundColor === 'green';

            if (isGreen) {
                // If button is green, remove from cart
                button.style.backgroundColor = ''; // Reset to default color
                cartCount--;
            } else {
                // If button is not green, add to cart
                button.style.backgroundColor = 'green';
                cartCount++;
            }

            cartCountElement.textContent = cartCount;
            });
        });
    })
    .catch((error) => {
        console.log(error);
    });

    // function creatcart(rate){
    //     const star ="";
    //     if(star<rate){
    //         star +=    `<i class="fa-sharp fa-solid fa-star"></i>`
    //     }
    //     else{
    //          `<i class="fa-sharp fa-solid fa-star"></i>`
    //     }
    // }
