let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let eMail = document.getElementById("eMail");
let passWord = document.getElementById("passWord");
let submitBtn = document.getElementById("submit");
let userRegister = document.getElementById("userRegister");

function userRegisted(firstName, lastName, eMail, passWord) {
  return `${firstName} ${lastName} ${eMail} ${passWord} is registered`;
}

submitBtn.addEventListener("click", function () {
  let userInfo = userRegisted(
    firstName.value,
    lastName.value,
    eMail.value,
    passWord.value
  );
  userRegister.textContent = userInfo;
});
