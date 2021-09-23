import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const product = document.querySelector('.card.product');
  const price = document.querySelector('.price');
  product.setAttribute('data-price', price.textContent)

});
