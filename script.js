function StrongPass(event) {
    event.preventDefault();
    var haslower = false;
    var hasupper = false;
    var hasnumber = false;
    var hasSpecial = false;
    var hasLength = false;

    if (document.getElementById("password").value.length >= 8) {
        hasLength = true;
    } 
    if (document.getElementById("password").value.match(/[a-z]/)) {
        haslower = true;
    }
    if (document.getElementById("password").value.match(/[A-Z]/)) {
        hasupper = true;
    }
    if (document.getElementById("password").value.match(/[0-9]/)) {
        hasnumber = true;
    }
    if (document.getElementById("password").value.match(/[!@#$%^&*()_+]/)) {
        hasSpecial = true;
    }
    if (haslower && hasupper && hasnumber && hasSpecial && hasLength) {
        document.getElementById("result").innerHTML = "Strong Password";
        document.getElementById("result").style.color = "lightgreen";
        var copyText = document.getElementById("password");
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
            .then(() => {
                alert("Password copied: " + copyText.value);
            })
            .catch((error) => {
                console.error("Failed to copy password: ", error);
            });
    } else {
        document.getElementById("result").innerHTML = "Weak Password";
        document.getElementById("result").style.color = "red"; 
    }
}
