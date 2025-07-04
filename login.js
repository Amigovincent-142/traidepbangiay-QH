// Khi load trang, kiểm tra có thông báo từ đăng ký không
window.addEventListener('load', () => {
  const message = localStorage.getItem('signupSuccess');
  if (message) {
    const msgEl = document.getElementById('message');
    msgEl.style.color = 'lightgreen';
    msgEl.textContent = message;
    // Xóa sau khi hiển thị
    localStorage.removeItem('signupSuccess');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (username === 'vinh71' && password === '123456') {
    message.style.color = 'lightgreen';
    message.textContent = 'Đăng nhập thành công! Đang chuyển trang...';
    setTimeout(() => {
      window.location.href = '../html/trangchudn.html';
    }, 1500);
  } else {
    message.style.color = 'tomato';
    message.textContent = 'Sai tên đăng nhập hoặc mật khẩu.';
  }
});
