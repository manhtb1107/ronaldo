
document.getElementById('switchToRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
});


document.getElementById('switchToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});


document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('forgotPasswordForm').classList.remove('hidden');
});


document.getElementById('backToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('forgotPasswordForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password === confirmPassword) {
        alert('Đăng ký thành công!');
        document.getElementById('registerForm').reset();
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    } else {
        alert('Mật khẩu không khớp!');
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        alert('Đăng nhập thành công!');
        document.getElementById('loginForm').reset();
    } else {
        alert('Tên đăng nhập và mật khẩu không được bỏ trống!');
    }
});
