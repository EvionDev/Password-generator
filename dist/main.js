const passwordInput = document.querySelector("#password-generated input"),
  generate_btn = document.querySelector("#generate-btn"),
  range_num = document.querySelector("#range-number"),
  range = document.querySelector("#range input");

const allcharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*[]{}():;',.<>/?|-_=+";

const generatepassword = () => {
  let password = "";

  for (let i = 0; i < range.value; i++) {
    let random = Math.floor(Math.random() * allcharacters.length);
    password += allcharacters[random];
  }
  passwordInput.value = password;
};

range.addEventListener("input", () => {
  range_num.innerText = range.value;
});
generate_btn.addEventListener("click", generatepassword);