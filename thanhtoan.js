// JavaScript Document
const product = document.getElementById('product');
const quantity = document.getElementById('quantity');
const priceDisplay = document.getElementById('priceDisplay');
const totalDisplay = document.getElementById('totalDisplay');
const form = document.getElementById('paymentForm');
const confirmation = document.getElementById('confirmation');

// Cập nhật đơn giá khi chọn sản phẩm
function updatePrice() {
  const price = parseInt(product.value);
  priceDisplay.textContent = `Đơn giá: ${price.toLocaleString()}đ`;
  updateTotal();
}

// Tính toán tổng tiền
function updateTotal() {
  const price = parseInt(product.value);
  const qty = parseInt(quantity.value);
  const total = price * qty;
  totalDisplay.textContent = `Tổng cộng: ${total.toLocaleString()}đ`;
}

// Xử lý form khi submit
form.onsubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const price = parseInt(product.value);
  const qty = parseInt(quantity.value);

  if (!name || !email || !price) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  const total = price * qty;
  confirmation.innerHTML = `
    <h3>Cảm ơn bạn, ${name}!</h3>
    <p>Chúng tôi đã nhận được đơn hàng của bạn với tổng số tiền <strong>${total.toLocaleString()}đ</strong>.</p>
    <p>Thông tin xác nhận sẽ được gửi đến <strong>${email}</strong>.</p>
  `;
  confirmation.classList.remove('hidden');
};