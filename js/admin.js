function signUp() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem('user_info',json);
    alert("dang ki thanh cong")
}

function login() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user1 = localStorage.getItem('user_info');
    var data = JSON.parse(user1);
    if(user1 == null) {
        alert('vui long nhap thong tin')
    }
    else if (email===data.email && password===data.password) {
        alert("Đăng nhập thành công")
        window.location.href="listmusicadmin.html"
    }
    else {
        alert("dang nhap that bai")
    }
}
