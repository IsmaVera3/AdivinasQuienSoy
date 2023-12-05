var currentCategory = "futbolistas";
var pixelationValue = 10;
var points = 0;


var categories = {
    futbolistas: ["Farre", "Ronaldo", "Neymar", "Mbappé"],
    musicos: ["Drake", "Ed Sheeran", "Shakira", "o"],
    hinchada: ["River", "Ed Sheeran", "Shakira", "ooo"]
};

function loadImage() {
    var categorySelect = document.getElementById('category');
    currentCategory = categorySelect.value;

    var imageUrl;

    if (currentCategory === "futbolistas") {
        imageUrl = "https://th.bing.com/th/id/OIP.QUyzB7WbuDg9KZY2RANbigHaFN?w=227&h=180&c=7&r=0&o=5&pid=1.7";
    } else if (currentCategory === "musicos") {
        imageUrl = "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/03/Drake.jpg?fit=1200%2C675&ssl=1";
    } else if (currentCategory === "hinchada") {
        imageUrl = "https://img.lagaceta.com.ar/fotos/notas/2019/10/12/a-la-b-equipo-river-futsal-perdio-categoria-como-ocurrio-2011-como-primer-equipo-821224-123100.jpg";
    }

    displayImage(imageUrl);
}

function displayImage(imageUrl) {
    var imageElement = document.getElementById('image');
    imageElement.src = imageUrl;
    adjustPixelation();
}

function adjustPixelation() {
    var pixelationInput = document.getElementById('pixelation');
    pixelationValue = pixelationInput.value;

    var imageElement = document.getElementById('image');
    imageElement.classList.remove('pixelated');

    setTimeout(function () {
        imageElement.style.filter = `blur(${pixelationValue}px)`;
    }, 100);

    points = 100 - ((10 - pixelationValue) * 10);

}

function pixelateImage() {
    var imageElement = document.getElementById('image');
    imageElement.classList.add('pixelated');
}

function checkGuess() {
    var userInput = document.getElementById('guess').value.toLowerCase();
    var correctAnswer = categories[currentCategory][0].toLowerCase();

    var resultElement = document.getElementById('result');

    if (userInput === correctAnswer) {
        Swal.fire("Bien Hecho!", "Has completado una imagen", "ok");
        points = points;
        updatePoints();
        var imageElement = document.getElementById('image');
        imageElement.style.filter = 'blur(0)';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Incorrecto. Inténtalo de nuevo.';
    }
}

function updatePoints() {
    var pointsElement = document.getElementById('points-value');
    pointsElement.textContent = points;
}

loadImage();
