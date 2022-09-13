const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

const products = [
    {
        id: 1, 
        title:"Air force", 
        price: 119, 
        colors: [
            {
                code:"black", 
                img:"./"
            },
            {
                code:"darkblue",
                img:"./"
            }
        ]
    },
    {
        id: 2, 
        title:"Air Jordan", 
        price: 149, 
        colors: [
            {
                code:"lightgray", 
                img:"./"
            },
            {
                code:"green",
                img:"./"
            }
        ]
    },
    {
        id: 3, 
        title:"Blazer", 
        price: 149, 
        colors: [
            {
                code:"lightgray", 
                img:"./"
            },
            {
                code:"green",
                img:"./"
            }
        ]
    },
    {
        id: 4, 
        title:"Crater", 
        price: 149, 
        colors: [
            {
                code:"black", 
                img:"./"
            },
            {
                code:"lightgray",
                img:"./"
            }
        ]
    },
    {
        id: 5, 
        title:"Hippie", 
        price: 149, 
        colors: [
            {
                code:"gray", 
                img:"./"
            },
            {
                code:"black",
                img:"./"
            }
        ]
    }
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        //changes the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change the chosen product
        chosenProduct = products[index]

        //change text of current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    });
});

