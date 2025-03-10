// Register
function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (!name || !email || !username || !password) {
      alert("Please fill in all fields");
      return;
    }
  
    const user = { name, email, username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered successfully!");
    window.location.href = "signin.html";
  }
  

  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (!storedUser) {
      alert("No user registered");
      return;
    }
  
    if (storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "profile.html";
    } else {
      alert("Invalid credentials");
    }
  }
  

  window.onload = function () {
    if (window.location.pathname.includes("profile.html")) {
      const loggedIn = localStorage.getItem("loggedIn");
      if (loggedIn !== "true") {
        alert("You must login first");
        window.location.href = "signin.html";
        return;
      }
  
      const user = JSON.parse(localStorage.getItem("user"));
      document.getElementById("prof-name").innerText = user?.name || "";
      document.getElementById("prof-email").innerText = user?.email || "";
      document.getElementById("prof-username").innerText = user?.username || "";
    }
  };
  