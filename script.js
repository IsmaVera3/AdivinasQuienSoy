var currentCategory = "futbolistas"; // Categoría predeterminada
var pixelationValue = 10; // Valor predeterminado para la intensidad de pixelación
var points = 0; // Inicializa los puntos a 0


var categories = {
    futbolistas: ["Messi", "Ronaldo", "Neymar", "Mbappé"],
    musicos: ["Drake", "Ed Sheeran", "Shakira", "tuma"]
    // Agrega más categorías según sea necesario
};

function loadImage() {
    var categorySelect = document.getElementById('category');
    currentCategory = categorySelect.value;

    var imageUrl;

    if (currentCategory === "futbolistas") {
        // URL de la imagen de futbolista desde el enlace proporcionado
        imageUrl = "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/wq4l6w3ftzn6gequts2v";
    } else if (currentCategory === "musicos") {
        imageUrl = "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/03/Drake.jpg?fit=1200%2C675&ssl=1";
    }
    else{
         // Carga la imagen aleatoria según la categoría
         var randomIndex = Math.floor(Math.random() * categories[currentCategory].length);
         var randomPerson = categories[currentCategory][randomIndex];
         imageUrl = `images/${currentCategory}/${randomPerson}.jpg`;
    }
 // Ajusta la ruta según tu estructura de carpetas
    

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
    
    // Espera un breve momento para permitir que la imagen se cargue antes de aplicar el filtro
    setTimeout(function() {
        imageElement.style.filter = `blur(${pixelationValue}px)`;
    }, 100);

    

    points = 100 - ((10 - pixelationValue) * 10); // Cada decremento de 1 en la intensidad reduce 10 puntos
    
    var currentPointsElement = document.getElementById('currentPoints');

    if (points < 0) {
        currentPointsElement.textContent = '0';
    } else {
        currentPointsElement.textContent = points.toString();
    }
    
}

function pixelateImage() {
    var imageElement = document.getElementById('image');
    imageElement.classList.add('pixelated');
}

function checkGuess() {
    var userInput = document.getElementById('guess').value.toLowerCase();
    var correctAnswer = categories[currentCategory][0].toLowerCase(); // Se asume que la primera persona es la respuesta correcta

    var resultElement = document.getElementById('result');

    if (userInput === correctAnswer) {
        resultElement.style.color = 'green';
        resultElement.textContent = '¡Correcto! ¡Has adivinado!';
        points = points; // Incrementa los puntos al adivinar correctamente
        updatePoints();
        pixelateImage(); // Pixela la imagen después de una suposición correcta
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Incorrecto. Inténtalo de nuevo.';
    }
}

function updatePoints() {
    var pointsElement = document.getElementById('points-value');
    pointsElement.textContent = points;
}

/*
var currentCategory = "futbolistas"; // Categoría predeterminada
var categories = {
    futbolistas: ["Messi", "Ronaldo", "Neymar", "Mbappé"],
    musicos: ["Drake", "Ed Sheeran", "Shakira", "Drakess"]
    // Agrega más categorías según sea necesario
};

function loadImage() {
    var categorySelect = document.getElementById('category');
    currentCategory = categorySelect.value;

    var imageUrl;

    if (currentCategory === "futbolistas") {
        // URL de la imagen de futbolista desde el enlace proporcionado
        imageUrl = "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/wq4l6w3ftzn6gequts2v";
    } else if (currentCategory === "musicos") {
        imageUrl = "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/03/Drake.jpg?fit=1200%2C675&ssl=1";
    }
    else{
         // Carga la imagen aleatoria según la categoría
         var randomIndex = Math.floor(Math.random() * categories[currentCategory].length);
         var randomPerson = categories[currentCategory][randomIndex];
         imageUrl = `images/${currentCategory}/${randomPerson}.jpg`;
    }
 // Ajusta la ruta según tu estructura de carpetas
    

    displayImage(imageUrl);
}

function displayImage(imageUrl) {
    var imageElement = document.getElementById('image');
    imageElement.src = imageUrl;
}

function pixelateImage() {
    var imageElement = document.getElementById('image');
    imageElement.classList.add('pixelated');
}

function checkGuess() {
    var userInput = document.getElementById('guess').value.toLowerCase();
    var correctAnswer = categories[currentCategory][0].toLowerCase(); // Se asume que la primera persona es la respuesta correcta

    var resultElement = document.getElementById('result');

    if (userInput === correctAnswer) {
        resultElement.style.color = 'green';
        resultElement.textContent = '¡Correcto! ¡Has adivinado!';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Incorrecto. Inténtalo de nuevo.';
    }
}

function pixelateImage() {
    var imageElement = document.getElementById('image');
    imageElement.classList.add('pixelated');
}
*/