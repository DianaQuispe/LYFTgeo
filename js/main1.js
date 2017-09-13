$('#botonNum').click(function () {
    $('.numAl').append('<p><strong> </strong></p>');

    var telefono = $('#numero');
    var expresionRegular1 = /^([0-9]+){9}$/; //<--- con esto vamos a validar el numero
    var expresionRegular2 = /\s/; //<--- con esto vamos a validar que no tenga espacios en blanco
    if ($('#numero').val() == '') {
        $('.numAl').append('<p><strong> Campo es obligatorio  </strong></p>');
    } else if (expresionRegular2.test($('#numero').val())) {
        $('.numAl').append('<p><strong>Error existen espacios en blanco  </strong></p>');

    } else if (!expresionRegular1.test($('#numero').val())) {
        $('.numAl').append('<p><strong> Numero de telefono incorrecto  </strong></p>');
    } else {
        $('#next').attr("href", "index2.html");

        $('#myModal').on('shown.bs.modal', function () {});
        var aleatorio = Math.round(Math.random() * 999);
        $('.numAl').append('<p><strong> LAB-' + aleatorio + '  </strong></p>');

    }
});

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}

function valida_envia() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }

    //valido el interés
    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}
