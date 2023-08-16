function showWelcomeMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const welcomeMsg = document.getElementById("welcomeMsg");
      welcomeMsg.textContent = "Welcome to our website!";
      resolve();
    }, 3000);
  });
}

function displayUserImage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userImageUrl =
        "https://avatars.githubusercontent.com/u/87208298?v=4";

      const userImage = document.getElementById("userImage");
      userImage.src = userImageUrl;

      resolve();
    }, 1000);
  });
}

function showThanksMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const thanksMsg = document.getElementById("thanksMsg");
      thanksMsg.textContent = "Thank you for visiting our website!";
      resolve();
    }, 3000);
  });
}

function redirectToAnotherPage() {
  setTimeout(() => {
    window.location.href = "about.html"; //
  }, 2000);
}

showWelcomeMessage()
  .then(displayUserImage)
  .then(showThanksMessage)
  .then(redirectToAnotherPage)
  .catch((error) => {
    console.error("Error occurred:", error);
  });
