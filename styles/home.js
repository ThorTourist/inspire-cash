const validPin = 1234;
const transactionData = [];

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
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

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

// send money functionality

document
  .getElementById("send-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // console.log("btn clicked");

    const userAccountNumber = document.getElementById(
      "user-account-number"
    ).value;

    const sendMoneyAmount = parseInt(
      document.getElementById("send-money-amount").value
    );
    const pinNumber = parseInt(document.getElementById("send-money-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (userAccountNumber.length !== 11) {
      alert("Please provide 11 digit agent phone number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Please provide valid pin number");
      return;
    }
    const newAvailableBalance = availableBalance - sendMoneyAmount;

    document.getElementById("available-balance").innerText =
      newAvailableBalance;

    document.getElementById("send-money-form").style.display = "none";

    const data = {
      name: "Send Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

// pay bills functionality

document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("btn clicked");

  const biller = document.getElementById("billers").value;
  const billerAccountNumber = document.getElementById(
    "biller-account-number"
  ).value;
  const payBillAmount = parseInt(
    document.getElementById("pay-bill-amount").value
  );
  const pinNumber = parseInt(document.getElementById("pay-bill-pin").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (billerAccountNumber.length < 11) {
    alert("Please provide 11 digit account number");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  const newAvailableBalance = availableBalance - payBillAmount;

  document.getElementById("available-balance").innerText = newAvailableBalance;

  document.getElementById("pay-bill-form").style.display = "none";

  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerHTML = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="rounded-xl bg-white flex justify-between items-center p-3">
          <div class="flex items-center">
            <div class="rounded-full p-3 bg-[#f4f5f7]">
              <img src="assets/wallet1.png" class="mx-auto" alt="" />
            </div>
            <div class="ml-2">
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `;
      transactionContainer.appendChild(div); // ✅ append to container
    }
  });
// toggling features

// add money
document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("send-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
  });

// cash out
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("send-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "block";
  });
// send money
document
  .getElementById("send-money-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("send-money-form").style.display = "block";
  });

// get bonus
document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("send-money-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "block";
  });
// pay bills
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("send-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "block";
  });
// Transactions History
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("send-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("transaction-form").style.display = "block";
  });
// log out functionality

document.getElementById("log-out-btn").addEventListener("click", function (e) {
  e.preventDefault();

  window.location.href = "./index.html";
});
