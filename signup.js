document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const message = document.getElementById('message');

  if (!username || !email || !password || !confirmPassword) {
    message.style.color = 'tomato';
    message.textContent = 'Vui lòng điền đầy đủ thông tin.';
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = 'tomato';
    message.textContent = 'Mật khẩu xác nhận không khớp.';
    return;
  }

  // Đăng ký thành công
  message.style.color = 'lightgreen';
  message.textContent = 'Đăng ký thành công! Đang chuyển...';

  // ⚠️ Lưu thông báo vào localStorage
  localStorage.setItem('signupSuccess', 'Đăng ký thành công! Mời bạn đăng nhập.');

  setTimeout(() => {
    window.location.href = '../html/login.html';
  }, 1500);
});

