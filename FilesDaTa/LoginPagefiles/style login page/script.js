// login page

var signin = document.getElementsByClassName("signin")[0];
var cover_2 = document.getElementsByClassName("cover-2")[0];

signin.onclick = function () {
    cover_2.style = "z-index:1;"
    signin.style = "z-index:-1;"

}

// =========Sign in ============



function signin_1() {

    var input_email = document.getElementById("email").value
    var input_password = document.getElementById("password").value
    var button = document.getElementsByClassName("button")[0];


    if (input_password == 123456) {
        alert("password is good")

        var x = location.href = ('/firstpage.html');
    }
    else {
        alert("worng")
    }
}

