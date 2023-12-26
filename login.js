function valid(){
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var password = document.getElementById("password").value;
    if (firstname == "Abhijeet" && lastname == "Maurya" && password == "Abhi1234")
    {
      window.location.href = "home.html";
      alert("login successfully...");
    }
    else{
        alert("you have enter incoorect detail");
    }
}