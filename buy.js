

// document.addEventListener("DOMContentLoaded", () => {
//     const product = JSON.parse(localStorage.getItem("selectedProduct"));

//     if (product) {
//         document.getElementById("productName").textContent = product.name;
//         //document.getElementById("productPrice").textContent = Price: ₹${product.price};
//         document.getElementById("productPrice").textContent = `Price: ₹${product.price}`;

//         document.getElementById("productDescription").textContent = product.description;
//         document.getElementById("productImage").src = product.image;
//     } else {
//         document.body.innerHTML = "<p>Product not found.</p>";
//     }
// });

// function proceedToPayment() {
//     alert("Redirecting to payment gateway...");
//     // Redirect to payment gateway (implement the logic accordingly)
// }


// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll(".buy-now").forEach(button => {
//         button.addEventListener("click", () => {
//             const product = {
//                 name: button.dataset.name,
//                 price: button.dataset.price,
//                 description: button.dataset.description,
//                 image: button.dataset.image
//             };
//             console.log("Product saved to localStorage", product); // Debug log
//             localStorage.setItem("selectedProduct", JSON.stringify(product));
//             window.location.href = "buy-now.html";
//         });
//     });
// });
