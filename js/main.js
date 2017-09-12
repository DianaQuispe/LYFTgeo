$('#next').click(function () {
    var divNext = document.createElement('div');
    divNext.addClass('nextBtn');
    $('#nextDiv').append(divNext);
    alert('g');
})
$(document).ready(function () {
    $('#contactForm')
        .find('[name="phoneNumber"]')
        .intlTelInput({
            utilsScript: '/vendor/intl-tel-input/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['fr', 'us', 'gb']
        });

    $('#contactForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                phoneNumber: {
                    validators: {
                        callback: {
                            message: 'The phone number is not valid',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                }
            }
        })
        // Revalidate the number when changing the country
        .on('click', '.country-list', function () {
            $('#contactForm').formValidation('revalidateField', 'phoneNumber');
        });
});
