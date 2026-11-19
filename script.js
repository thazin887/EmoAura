
const emotionSelect = document.querySelector("#emotion");
const continueBtn = document.querySelector("#continueBtn");
const message = document.querySelector("#message");

// When the user selects an emotion
emotionSelect.addEventListener("change", function () {
    if (emotionSelect.value !== "") {
        continueBtn.disabled = false;
    } else {
        continueBtn.disabled = true;
    }

    message.textContent = "";
});

// When the user clicks Continue
continueBtn.addEventListener("click", function () {
    const emotion = emotionSelect.value;

    if (emotion !== "") {
        message.textContent =
            `✨ You are feeling ${emotion} today.`;
    }
});
