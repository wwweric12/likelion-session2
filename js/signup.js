const formEl = document.querySelector("#signupForm");
const idEl = document.querySelector("#signupId");
const passwordEl = document.querySelector("#signupPassword");
console.log(formEl);
const isUserExist = (newUserId) => {
  const users = localStorage.getItem("userList");

  if (!users) return false;

  const convertedUsers = JSON.parse(users);
  const getExistUsers = convertedUsers.find((user) => user.id === newUserId);

  return getExistUsers ? true : false;
};

const registerUser = (userInfo) => {
  const currentUsers = JSON.parse(localStorage.getItem("userList"));
  console.log(userInfo);
  if (!currentUsers) {
    const newUserList = [];
    newUserList.push({
      id: userInfo.id,
      password: userInfo.password,
    });
    localStorage.setItem("userList", JSON.stringify(newUserList));
  } else {
    const updatedUsers = currentUsers.concat({
      id: userInfo.id,
      password: userInfo.password,
    });

    localStorage.setItem("useList", JSON.stringify(updatedUsers));
  }
};

const init = () => {
  //일급객체
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const idValue = idEl.value;
    const passwordValue = passwordEl.value;
    if (isUserExist(idValue)) {
      alert(`${idValue}가 이미 있습니다.`);
      idEl.value = "";
      passwordEl.value = "";
      return;
    }

    //회원가입이 가능하다면 이후 코드
    registerUser({ id: idValue, password: passwordValue });
    alert("회원가입 완료");
    location.href = "./signin.html";
  });
};

document.addEventListener("DOMContentLoaded", init);
