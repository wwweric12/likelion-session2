const formEl = document.querySelector("#loginForm");
const idEl = document.querySelector("#idInput");
const passwordEl = document.querySelector("#passwordInput");

const checkLogin = (id, password) => {
  const userList = localStorage.getItem("userList");

  if (!userList) return false;

  const convertToJson = JSON.parse(userList);

  const coincedUser = convertToJson.find(
    (user) => user.id === id && user.password === password
  );
  return coincedUser ? true : false;
};

const isLogined = () => {
  return localStorage.getItem("login") ? true : false;
};

const init = () => {
  if (isLogined()) {
    alert("이미 로그인 되어있습니다.");
    location.href = "./index.html";
    return;
  }

  //로그인이 안되있을때 로직
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const isSuccess = checkLogin(idEl.value, passwordEl.value);

    if (isSuccess) {
      alert("로그인 성공!");
      localStorage.setItem("login", JSON.stringify(idEl.value)); //id 의 value는 string이다 이미
      location.href = "./index.html";
    } else {
      alert("실패");
      idEl.value = "";
      passwordEl.value = "";
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
