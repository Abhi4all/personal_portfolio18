function sendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        messagw : document.getElementById("message").value
    }

    emailjs.send("service_66dh5i2","template_kxb9l6q", params).then(function (res){
        alert("success" + res.status);
    })
}