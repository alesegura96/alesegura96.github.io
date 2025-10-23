// Add the new product-grid
const productData = {
    tshirt: [
        {
            name: "Chinijo",
            images: [
                "images/tshirt/chinijo1.jpg",
                "images/tshirt/chinijo2.jpg",
                "images/tshirt/chinijo3.jpg",
                "images/tshirt/chinijo4.jpg",
                "images/tshirt/chinijo5.jpg",
                "images/tshirt/chinijo6.jpg"
            ]
        },
        {
            name: "Mermaid",
            images: [
                "images/tshirt/sirena1.jpg",
                "images/tshirt/sirena2.jpg",
                "images/tshirt/sirena3.jpg",
                "images/tshirt/sirena4.jpg",
                "images/tshirt/sirena6.jpg",
                "images/tshirt/sirena7.jpg"                
            ]
        },
        {
            name: "Cafe Racer",
            images: [
                "images/tshirt/moto1.jpg",
                "images/tshirt/moto2.jpg",
                "images/tshirt/moto3.jpg",
                "images/tshirt/moto4.jpg"               
            ]
        },
        {
            name: "Marrakech",
            images: [
                "images/tshirt/marrakech1.jpg",
                "images/tshirt/marrakech2.jpg",
                "images/tshirt/marrakech3.jpg",
                "images/tshirt/marrakech4.jpg"               
            ]
        },
        {
            name: "Aperol",
            images: [
                "images/tshirt/apperol1.jpg",
                "images/tshirt/apperol2.jpg",
                "images/tshirt/apperol3.jpg"             
            ]
        },
        {
            name: "Nautilus",
            images: [
                "images/tshirt/nautical1.jpg",
                "images/tshirt/nautical2.jpg"           
            ]
        },
        {
            name: "Dachshund",
            images: [
                "images/tshirt/salchicha1.jpg",
                "images/tshirt/salchicha2.jpg"           
            ]
        },
        {
            name: "Famara",
            images: [
                "images/tshirt/surf1.jpg",
                "images/tshirt/surf2.jpg"           
            ]
        },
        {
            name: "Sushi Time",
            images: [
                "images/tshirt/japan1.jpg",
                "images/tshirt/japan2.jpg"           
            ]
        },
        {
            name: "Whale Shark",
            images: [
                "images/tshirt/shark1.jpg"          
            ]
        }
    ],
    polo: [
        {
            name: "White Polo",
            images: [
                "images/polo/polo1.jpg"
            ]
        }
    ],
    hoody: [
        {
            name: "Grey Hoodie",
            images: [
                "images/hoody/hoody1.jpg",
                "images/hoody/hoody2.jpg"]
        }
    ],
    swim: [
        {
            name: "Beach Shorts",
            images: [
                "images/swim/swim1.jpg",
                "images/swim/swim2.jpg"]
        }
    ]
};

const scrollMenuLinks = document.querySelectorAll(".scroll-menu a");
const productGrid = document.getElementById("product-grid");

scrollMenuLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const category = link.getAttribute("href").replace("#", "");
        const items = productData[category] || [];
        renderProducts(items);
    });
});

function renderProducts(items) {
    productGrid.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "product-item";

        const carousel = document.createElement("div");
        carousel.className = "product-carousel";

        item.images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = item.name;
            carousel.appendChild(img);
        });

        const caption = document.createElement("div");
        caption.className = "product-caption";
        caption.textContent = item.name;

        div.appendChild(carousel);
        div.appendChild(caption);
        productGrid.appendChild(div);
    });
}
