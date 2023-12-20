
const inputs = document.querySelectorAll(".input");

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if (username.trim() === "" || password.trim() === "") {
    alert("Please enter both username and password.");
    return;
  }

  if (username === "musik" && password === "klasik") {
    // Redirect to music.html
    window.location.href = "music.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

function focusFunx() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});
