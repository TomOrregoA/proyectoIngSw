//Función de jquery y validate que permite validar el contenido del formulario previamente a ser enviado
$(document).ready(function () {
    $("#formulario").validate({
        rules: {
            cNombres: {
                required: true
            },
            cApellidos: {
                required: true
            },
            cCorreo: {
                required: true,
                email: true
            },
            cMensaje: {
                required: true,
                minlength: 15
            }
        },
        messages: {
            cNombres: {
                required: "Debe ingresar un nombre"
            },
            cApellidos: {
                required: "Debe ingresar su(s) apellido(s)"
            },
            cCorreo: {
                required: "Debe ingresar su correo electrónico",
                email: "Su email debe tener el formato: abc@ejemplo.com"
            },
            cMensaje: {
                required: "Debe ingresar un mensaje",
                minlength: "Su mensaje debe tener un mínimo de 15 caracteres"
            }
        }
    });
});

// Validación formulario de registro
$(document).ready(function () {
    $("#formularioReg").validate({
        rules: {
            rUsuario: {
                required: true,
                minlength: 8
            },
            rPassword: {
                required: true,
                minlength: 8
            },
            rPassword2: {
                required: true,
                equalTo: "#rPassword"
            },
            rNombres: {
                required: true
            },
            rApellidos: {
                required: true
            },
            rCorreo: {
                required: true,
                email: true
            }
        },
        messages: {
            rUsuario: {
                required: "Debe ingresar un nombre de Usuario.",
                minlength: "El nombre de usuario debe tener 8 carácteres como mínimo."
            },
            rPassword: {
                required: "Debe ingresar una contraseña.",
                minlength: "La contraseña debe tener un mínimo de 10 caractéres."
            },
            rPassword2: {
                required: "Debe ingresar una contraseña.",
                equalTo: "Ámbas contraseñas deben coincidir."
            },
            rNombres: {
                required: "Debe ingresar su(s) nombre(s)."
            },
            rApellidos: {
                required: "Debe ingresar su(s) apellido(s)."
            },
            rCorreo: {
                required: "Debe ingresar su correo electrónico.",
                email: "El correo electrónico ingresado debe ser válido."
            }
        }
    });
});

// Validación formulario de Ingreso
$(document).ready(function () {
    $("#formularioLog").validate({
        rules: {
            lUsuario: {
                required: true
            },
            lPassword: {
                required: true
            }
        },
        messages: {
            lUsuario: {
                required: "Debe ingresar su nombre de Usuario."
            },
            lPassword: {
                required: "Debe ingresar su contraseña."
            }
        }
    });
});








