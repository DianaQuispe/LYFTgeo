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
if (!isNaN()) {
    alert('d');
}
$('#name');
$('#email');
if ($('#someSwitchOptionSuccess').is(':checked')) {
    alert('f');
} else {
    alert('fd')
};
