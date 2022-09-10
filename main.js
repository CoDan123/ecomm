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

menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    });
});

