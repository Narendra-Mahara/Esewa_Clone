// *********For the stickyPhone*********
let stickyPhone = document.querySelector(".sticky-phone");
let stickyPhoneDetails = document.querySelector(".sticky-phone-details");

// ***For the clear input field in the search bar***
let clearInput = document.querySelector(".cross-icon");
let searchField = document.querySelector(".search-items");

// *********For the stickyPhone*********
stickyPhone.addEventListener("mouseenter", (event) => {
  if (event.target === stickyPhone) {
    stickyPhoneDetails.classList.remove("hide");
  }
});

stickyPhone.addEventListener("mouseleave", (event) => {
  if (event.target === stickyPhone) {
    stickyPhoneDetails.classList.add("hide");
  }
});

stickyPhoneDetails.addEventListener("mouseenter", () => {
  stickyPhoneDetails.classList.remove("hide");
});

stickyPhoneDetails.addEventListener("mouseleave", () => {
  stickyPhoneDetails.classList.add("hide");
});

// ***For the clear input field in the search bar***

clearInput.addEventListener("click", () => {
  searchField.value = "";
});
