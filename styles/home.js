const validPin = 1234;

// add money functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("btn clicked");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Please provide 11 digit account number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Please provide valid pin number");
      return;
    }
    const newAvailableBalance = availableBalance + addAmount;

    document.getElementById("available-balance").innerText =
      newAvailableBalance;

    document.getElementById("add-money-form").style.display = "none";
  });

// cash out functionality

document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("btn clicked");

    const agentNumber = document.getElementById("agent-number").value;
    const cashOutAmount = parseInt(
      document.getElementById("cash-out-amount").value
    );
    const pinNumber = parseInt(document.getElementById("cash-out-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (agentNumber.length !== 11) {
      alert("Please provide 11 digit agent phone number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Please provide valid pin number");
      return;
    }
    const newAvailableBalance = availableBalance - cashOutAmount;

    document.getElementById("available-balance").innerText =
      newAvailableBalance;

    document.getElementById("add-money-form").style.display = "none";
  });

// toggling features

document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
  });

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "block";
  });
