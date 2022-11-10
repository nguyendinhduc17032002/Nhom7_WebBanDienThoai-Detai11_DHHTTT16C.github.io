$(document).ready(function() {
    
    // khi click vào đăng ký thì sẽ hiện form đăng ký ra
    $('.signup').click(function() {
        $('.signup-form-wrap').css("display", "block");
    })

    // khi click vào đăng nhập thì sẽ hiện form đăng nhập ra
    $('.login').click(function() {
        $('.login-form-wrap').css("display", "block");
    })

    // khi click nút X ở form đăng nhập hoặc đăng ký thì đóng form lại
    $('.close').click(function() {
        $('.signup-form-wrap').css("display", "none");
        $('.login-form-wrap').css("display", "none");
    })

    // khi click nút hủy thì đóng form lại
    $('.btn-cancel').click(function() {
        $('.signup-form-wrap').css("display", "none");
        $('.login-form-wrap').css("display", "none");
    })
    
    // cái này định làm khi click vào item ở phần lịch sử tìm kiếm
    // thì không bị mất input (bug)
    $('.search-history__item-link').click(function() {
        $('.search-box__input').focus();
        $('.search-box__input').css("width", "300px");
        $('.search-box__input').css("padding", "0 15px 0 12px;");
    })
    
    // chuyển sang đăng ký khi click vào "Chưa có tài khoản?"
    $('.switch-signup-form').click(function() {
        $('.login-form-wrap').css("display", "none");
        $('.signup-form-wrap').css("display", "block");
    })
    
    // chuyển sang đăng nhập khi click vào "Đã có tài khoản?"
    $('.switch-login-form').click(function() {
        $('.signup-form-wrap').css("display", "none");
        $('.login-form-wrap').css("display", "block");
    })
})

// kiểm tra xem người dùng nhập đúng định dạng tài khoản khi đăng ký không
// tài khoản chứa ít nhất 3 ký tự, bao gồm chữ hoa, chữ thường và số và không chứa dấu cách
function checkUser() {
    var userInput = document.getElementById('user-input').value;
    var userError = document.getElementById('user-error');
    if (userInput.trim() == "") {
        userError.innerHTML = "*Không được để trống tài khoản";
        return false;
    }
    if (!userInput.trim().match(/^[a-zA-z0-9]{6,}$/)) {
        userError.innerHTML = "*Tên tài khoản chứa ít nhất 6 ký tự,bao gồm chữ hoa, thường và số";
        return false;
    }
    userError.innerHTML = "";
    return true;
}

// kiểm tra xem người dùng nhập đúng định dạng mật khẩu khi đăng ký không
// tài khoản chứa ít nhất 6 ký tự, chứa ít nhất một chữ hoa, ít nhất một chữ thường, ít nhất một chữ số, cho phép ký tự và không chứa dấu cách
function checkPwd() {
    var pwdInput = document.getElementById('pwd-input').value;
    var pwdError = document.getElementById('pwd-error');
    if (pwdInput.trim() == "") {
        pwdError.innerHTML = "*Không được để trống mật khẩu";
        return false;
    }
    if (!pwdInput.trim().match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@#\$\/\+\=\(\)\<\>\?-_%\^&\*\.]{6,}$/)) {
        pwdError.innerHTML = "*Mật khẩu chứa ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường, chữ số";
        return false;
    }
    pwdError.innerHTML = "";
    return true;
}

// kiểm tra xem người dùng nhập lại mật khẩu có chính xác không
function checkRepwd() {
    var pwdInput = document.getElementById('pwd-input').value;
    var repwdInput = document.getElementById('repwd-input').value;
    var repwdError = document.getElementById('repwd-error');
    if (repwdInput.trim() != pwdInput.trim()) {
        repwdError.innerHTML = "*Mật khẩu không đúng";
        return false;
    }
    repwdError.innerHTML = "";
    return true;
}
//Kiểm tra định dang email
function checkEmail() {
    var emailInput = document.getElementById('email-input').value;
    var emailError = document.getElementById('email-error');
    if (emailInput.trim() == "") {
        emailError.innerHTML = "*Bạn nên nhập email của bạn vào để nhận được sự hỗ trợ từ chúng tôi";
        return false;
    }
    if (!emailInput.trim().match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@#\$\/\+\=\(\)\<\>\?-_%\^&\*\.]{255,}$/)) {
        emailError.innerHTML = "*Email phải theo định dạng XXXXXXX@email.com";
        return false;
    }
    emailError.innerHTML = "";
    return true;
}
// kiểm tra tất cả định dạng nhập vào form đăng ký
function validInfo() {
    if (checkUser() && checkPwd() && checkRepwd() && checkEmail()) {
        return true;
    }
    return false;
}

/*kiểm tra form ĐN*/
function kt() {
    var loi = "";
    //kiểm tra tên đăng nhập
    var tdn = document.getElementById('tdn');

    if(tdn.value="") {
    tdn.className="loi";
    loi += "Tên đăng nhập không được để trống"; 
        }
    else if(tdn.value.length!=8){
    tdn.className = "loi";
    loi += "Tên đăng nhập tối thiểu có 8 ký tự"
        }
    else tdn.className="txt";
}

