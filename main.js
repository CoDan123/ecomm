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
                code:"black", 
                img:"./"
            },
            {
                code:"darkblue",
                img:"./"
            }
        ]
    }
];

let chosenProduct = products[0];

menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        //changes the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change the chosen product
        chosenProduct = products.[index]
    });
});

