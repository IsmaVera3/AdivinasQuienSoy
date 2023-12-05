var CategoriaSelecta = "futbolistas";
var valorPixelacion = 10;
var points = 0;

var categorias = {
    futbolistas: ["Farre", "Ronaldo", "Neymar", "Mbappé"],
    musicos: ["Drake", "Ed Sheeran", "Shakira", "o"],
    hinchada: ["River", "Ed Sheeran", "Shakira", "ooo"]
};

function CargarImg() {
    var categoriaSelec = document.getElementById('category');
    CategoriaSelecta = categoriaSelec.value;

    var imagen;

    if (CategoriaSelecta === "futbolistas") {
        imagen = "https://media.tycsports.com/files/2021/05/19/284008/guillermo-farre-belgrano_862x485.jpg?v=1";
    } else if (CategoriaSelecta === "musicos") {
        imagen = "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/03/Drake.jpg?fit=1200%2C675&ssl=1";
    } else if (CategoriaSelecta === "hinchada") {
        imagen = "https://img.lagaceta.com.ar/fotos/notas/2019/10/12/a-la-b-equipo-river-futsal-perdio-categoria-como-ocurrio-2011-como-primer-equipo-821224-123100.jpg";
    }

    displayImage(imagen);
}

function displayImage(imagen) {
    var imgPixelada = document.getElementById('image');
    imgPixelada.src = imagen;
    adjustPixelation();
}

function adjustPixelation() {
    var pixelationInput = document.getElementById('pixelation');
    valorPixelacion = pixelationInput.value;

    var imgPixelada = document.getElementById('image');
    imgPixelada.classList.remove('pixelated');
    imgPixelada.style.filter = `blur(${valorPixelacion}px)`;
    points = 100 - ((10 - valorPixelacion) * 10);

}

function pixelateImage() {
    var imgPixelada = document.getElementById('image');
    imgPixelada.classList.add('pixelated');
}

function Chequeo() {
    var resUsuario = document.getElementById('guess').value.toLowerCase();
    var resCorrecta = categorias[CategoriaSelecta][0].toLowerCase();
    var resultElement = document.getElementById('result');

    if (resUsuario === resCorrecta) {
        Swal.fire("Bien Hecho!", "Has completado una imagen", "Siguiente Imagen");
        cargarPuntos(points);
        var imgPixelada = document.getElementById('image');
        imgPixelada.style.filter = 'blur(0)';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Incorrecto. Inténtalo de nuevo.';
    }
}

function cargarPuntos(points) {
    var puntosActualizados = document.getElementById('points-value');
    puntosActualizados.textContent = points;
}

CargarImg();
