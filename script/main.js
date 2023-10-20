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

// Обработчик для загрузки изображения
document.getElementById("imageInput").addEventListener("change", function () {
    const fileInput = this;
    const imageDisplay = document.getElementById("imageDisplay");

    // Очищаем предыдущее содержимое контейнера
    imageDisplay.innerHTML = '';

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const image = new Image();
        image.src = URL.createObjectURL(file);

        // Отображаем изображение в контейнере
        imageDisplay.appendChild(image);
    }
});

