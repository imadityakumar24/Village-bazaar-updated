// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll(".buy-now").forEach(button => {
//         button.addEventListener("click", () => {
//             const product = {
//                 name: button.dataset.name,
//                 price: button.dataset.price,
//                 description: button.dataset.description,
//                 image: button.dataset.image
//             };
//             localStorage.setItem("selectedProduct", JSON.stringify(product));
//             window.location.href = "buy-now.html";
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Page Loaded");
//     const product = JSON.parse(localStorage.getItem("selectedProduct"));
//     if (product) {
//         document.getElementById("productName").textContent = product.name;
//         document.getElementById("productPrice").textContent = `Price: ₹${product.price}`;
//         document.getElementById("productDescription").textContent = product.description;
//         document.getElementById("productImage").src = product.image;
//     } else {
//         document.body.innerHTML = "<p>Product not found.</p>";
//     }
// });

