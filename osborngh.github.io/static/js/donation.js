document.addEventListener("DOMContentLoaded", function () {
  const donateBtn = document.getElementById("donate-btn");
  const modal = document.getElementById("donation-modal");
  const confirmBtn = document.getElementById("confirm-donation");
  const cancelBtn = document.getElementById("cancel-donation");
  const amountInput = document.getElementById("donation-amount");

  if (!donateBtn) {
    console.warn("Donate button not found");
    return;
  }

  donateBtn.addEventListener("click", () => {
    modal.style.display = "block";
    amountInput.focus();
  });

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  confirmBtn.addEventListener("click", () => {
    const amountGHS = Number(amountInput.value);

    if (!amountGHS || amountGHS <= 0) {
      alert("Please enter a valid amount in GHS.");
      return;
    }

    modal.style.display = "none";

    PaystackPop.setup({
      key: "pk_live_a059803d528dcb76928d556cd7207c52016d185a",
      email: "vinciishere@gmail.com",
      amount: amountGHS * 100,
      currency: "GHS",
      ref: "don_" + Math.floor(Math.random() * 1e9),
      callback: function () {
        alert("Thank you for your support!");
      }
    }).openIframe();
  });
});
