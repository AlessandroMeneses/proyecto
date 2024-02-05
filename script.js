const header = document.querySelector("header");
        const hamburgerBtn = document.querySelector("#hamburger-btn");
        const closeMenuBtn = document.querySelector("#close-menu-btn");
  
        hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
  
        closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());





function agregarComentario() {
        var nombre = document.getElementById("nombre").value;
        var comentario = document.getElementById("comentario").value;

        var nuevoComentario = document.createElement("div");
        nuevoComentario.className = "comentario";
        nuevoComentario.innerHTML = "<p class='nombre'>" + nombre + "</p><p>" + comentario + "</p><p class='fecha'>Fecha: " + obtenerFechaActual() + "</p>";

        var seccionComentarios = document.getElementById("comentarios");
        seccionComentarios.insertBefore(nuevoComentario, seccionComentarios.childNodes[2]);

        document.getElementById("nuevoComentarioForm").reset();
}
function obtenerFechaActual() {
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var anio = fecha.getFullYear();
        return anio + "-" + mes + "-" + dia;
}
