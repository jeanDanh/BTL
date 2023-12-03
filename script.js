function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform AJAX request to server-side script (PHP) for validation
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        if (response === "success") {
          // Redirect to another page on successful login
          window.location.href = "index_copy.html";
        } else {
          alert("Invalid username or password. Please try again.");
        }
      }
    };
  
    // Replace 'validate.php' with the name of your server-side script
    xhr.open("POST", "validate.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("username=" + username + "&password=" + password);
  }

  function validateForm() {
    var a = document.forms["myForm"]["fname"].value;
    var b = document.forms["myForm"]["fpass"].value;
    if ((a == "" || a == null) || ( b == "" || b == null)) {
        alert("Bạn chưa điền tên tài khoản hoặc mật khẩu");
    }
}