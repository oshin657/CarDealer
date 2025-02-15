$(document).ready(function () {
    $("#intro-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn"
    });
  });



  let index = 0;
  const items = document.querySelectorAll(".category-card"); 
  const row = document.querySelector(".categories-row");
  
  function moveSlide(direction) {
    const totalItems = items.length;
    const screenWidth = window.innerWidth;
    let visibleItems = 3; // Default: Show 3 items per row
  
    if (screenWidth <= 991) visibleItems = 2; // Tablets
    if (screenWidth <= 414) visibleItems = 1; // iPhone 8 Plus
  
    const itemWidth = items[0].offsetWidth + 20;
    const maxIndex = totalItems - visibleItems; 
  
    index += direction;
  
    if (index < 0) {
      index = 0; 
    } else if (index > maxIndex) {
      index = maxIndex; 
    }
  
    row.style.transform = `translateX(-${index * itemWidth}px)`;
  }
    

  function validateForm() {
    alert("Your message has been sent successfully! ✅");
    return true;
  }
  
  
  document.querySelectorAll(".app-buttons a").forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Redirecting to the app store...");
    });
  });


  let cart = [];

function addToCart(productName) {
  // Show alert with product name
  const confirmAdd = confirm(`Do you want to add "${productName}" to your cart?`);

  if (confirmAdd) {
    // Add product to cart
    cart.push(productName);
    alert(`"${productName}" has been added to your cart!`);

    // Update the cart display
    updateCartDisplay();
  }
}

