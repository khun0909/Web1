const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let n = userNumber.value;
  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요.";
    }
    n = Number(n);  // n = parseInt(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n > 10) {
      throw "10보다 작은 수를 입력하세요.";
    }    
  } catch (err) {
    alert(err);
  } finally {
    userNumber.value = "";
  }
});