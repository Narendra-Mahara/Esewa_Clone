let stickyPhone = document.querySelector(".sticky-phone");

let stickyPhoneDetails = document.querySelector(".sticky-phone-details");

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
