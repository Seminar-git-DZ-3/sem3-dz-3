let messageCount = 1;

function updateText() {
    const inputText = document.getElementById("textInput").value;

    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();

    const message = `${messageCount}. [${formattedTime}]: ${inputText}`;

    const textDisplay = document.getElementById("textDisplay");
    textDisplay.value += message + '\n';

    messageCount++;
    document.getElementById("textInput").value = "";
}
