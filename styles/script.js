console.log("Added");

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumber = 12345678910;
  const pin = 1234;

  const mobileNumberConverted = parseInt(
    document.getElementById("mobile-number").value
  );

  const pinNumberConverted = parseInt(
    document.getElementById("pin-number").value
  );

  if (mobileNumberConverted === mobileNumber && pinNumberConverted === pin) {
    // console.log("All value Matched");
    window.location.href = "./home.html";
  } else {
    alert("Invalid ID or Password");
  }
});
