const showLogin = () => {
  let str = `
    <div class='App-Container'>
      <h1>Login Form</h1>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPass" placeholder="Password"></p>
      <p><button onclick="login()">Log In</button></p>
      <p><button onclick="showRegister()">Create Account</button></p>
    </div>
    <div id="message"></div>
  `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <div class='App-Container'>
      <h1>Register Form</h1>
      <p><input type="text" id="txtName" placeholder="Name"></p>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPass" placeholder="Password"></p>
      <p><button onclick="register()">Register</button></p>
    </div>
    <div id="message"></div>
  `;
  root.innerHTML = str;
};

const login = () => {
  document.getElementById("message").innerText = "Welcome!";
};

const register = () => {
  document.getElementById("message").innerText = "Account Created!";
};
