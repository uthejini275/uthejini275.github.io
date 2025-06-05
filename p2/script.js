const showLogin = () => {
  let str = `
    <div class='App-Container'>
      <h1>Login Form</h1>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPass" placeholder="Password"></p>
      <p><button onclick="login()">Log In</button></p>
      <p><button onclick="showRegister()">Create Account</button></p>
    </div>
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
  `;
  root.innerHTML = str;
};

const login = () => {
  root.innerHTML = `<h1>Welcome!</h1>`;
};

const register = () => {
  root.innerHTML = `<h1>Account Created!</h1>`;
};
