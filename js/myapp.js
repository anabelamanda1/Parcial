const $usuario = $("#usuario");
const $password = $("#password");

const usuarios = {
    "UsuarioP": {
        pass: "Usuario001",
        pagina: "DashboardU.html"
    },
    "Conductor": {
        pass: "Conductor001",
        pagina: "DashboardC.html"
    }
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    const usuario = usuarios[valueUsuario];
    
    if (usuario) {
        if (valuePassword == usuario.pass) {
            localStorage.setItem("sesion", true);
            location.href = usuario.pagina;
        } else {
            mostrarError("Contraseña incorrecta");
        }
    } else {
        mostrarError("Usuario incorrecto");
    }
});

function mostrarError(mensaje) {
    Swal.fire({
        title: "ERROR",
        text: mensaje,
        icon: "error"
    });
}
