$('#next').click(function () {
    var divNext = document.createElement('div');
    divNext.addClass('nextBtn');
    $('#nextDiv').append(divNext);
    alert('g');
})
$(document).ready(function () {
    // Define new validator
    formValidation.Validator.intPhoneNumber = {
        html5Attributes: {
            message: 'message',
            autoplaceholder: 'autoPlaceholder',
            preferredcountries: 'preferredCountries',
            utilsscript: 'utilsScript'
        },

        init: function (validator, $field, options) {
            // Determine the preferred countries
            var autoPlaceholder = options.autoPlaceholder === true || options.autoPlaceholder === 'true',
                preferredCountries = options.preferredCountries || 'us';
            if ('string' === typeof preferredCountries) {
                preferredCountries = preferredCountries.split(',');
            }

            // Attach the intlTelInput on field
            $field.intlTelInput({
                utilsScript: options.utilsScript || '',
                autoPlaceholder: autoPlaceholder,
                preferredCountries: preferredCountries
            });

            // Revalidate the field when changing the country
            var $form = validator.getForm(),
                fieldName = $field.attr('data-fv-field');
            $form.on('click.country.intphonenumber', '.country-list', function () {
                $form.formValidation('revalidateField', fieldName);
            });
        },

        destroy: function (validator, $field, options) {
            $field.intlTelInput('destroy');

            validator.getForm().off('click.country.intphonenumber');
        },

        validate: function (validator, $field, options) {
            return $field.val() === '' || $field.intlTelInput('isValidNumber');
        }
    };

    $('#contactForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            phoneNumber: {
                validators: {
                    intPhoneNumber: {
                        utilsScript: '/vendor/intl-tel-input/lib/libphonenumber/build/utils.js',
                        autoPlaceholder: true,
                        preferredCountries: 'fr,us,gb',
                        message: 'The phone number is not valid'
                    }
                }
            }
        }
    });
});
