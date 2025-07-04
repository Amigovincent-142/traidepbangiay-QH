// JavaScript Document
function updatePrice() {
  const sizeSelect = document.getElementById("size");
  const selectedPrice = sizeSelect.value;
  document.getElementById("price").innerText =
    "Giá: " + Number(selectedPrice).toLocaleString("vi-VN") + " VNĐ";
}

function changeColor() {
  const color = document.getElementById("color").value;
  const img = document.getElementById("mainImage");

  if (color === "white") {
    img.src = "https://via.placeholder.com/300/000000/FFFFFF?text=Black+Shirt";
  } else if (color === "white") {
    img.src = "https://via.placeholder.com/300/FFFFFF/000000?text=White+Shirt";
  } else if (color === "red") {
    img.src = "https://via.placeholder.com/300/FF0000/FFFFFF?text=Red+Shirt";
  }
}

function addToCart() {
  const sizeSelect = document.getElementById("size");
  const color = document.getElementById("color").value;
  const msg = document.getElementById("message");

  const selectedText = sizeSelect.options[sizeSelect.selectedIndex].text;

  msg.innerText = `✔ Đã thêm sản phẩm Size ${selectedText}, Màu ${color} vào giỏ hàng!`;
  msg.style.opacity = 1;

  setTimeout(() => {
    msg.style.opacity = 0;
  }, 3000);
}