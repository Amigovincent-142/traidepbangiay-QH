let currentCategory = 'all';
let currentPriceRange = 'all';

function filterProducts(category) {
  currentCategory = category;
  applyFilters();
}

function filterByPrice(priceRange) {
  currentPriceRange = priceRange;
  applyFilters();
}

function applyFilters() {
  const products = document.querySelectorAll('.product');
  const searchText = document.getElementById('searchBox').value.toLowerCase();

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    const productName = product.querySelector('.product-name').textContent.toLowerCase();
    const productPrice = parseInt(product.getAttribute('data-price'));

    let show = true;

    // Lọc theo danh mục
    if (currentCategory !== 'all' && productCategory !== currentCategory) {
      show = false;
    }

    // Lọc theo khoảng giá
    if (show) {
      if (currentPriceRange === 'under500' && productPrice >= 500000) {
        show = false;
      } else if (currentPriceRange === '500to1000' && (productPrice < 500000 || productPrice > 1000000)) {
        show = false;
      } else if (currentPriceRange === 'above1000' && productPrice <= 1000000) {
        show = false;
      }
    }

    // Lọc theo tìm kiếm
    if (show && searchText !== '' && !productName.includes(searchText)) {
      show = false;
    }

    product.style.display = show ? 'block' : 'none';
  });
}

function searchProducts() {
  applyFilters();
}
