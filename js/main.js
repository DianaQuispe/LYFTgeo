$(document).ready(function () {
    $('#contactForm')
        .find('[name="phoneNumber"]')
        .intlTelInput({
            utilsScript: '/vendor/intl-tel-input/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['fr', 'us', 'gb']
        });

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
            alert($('#contactForm'));
        });
    $('#contact_form').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                first_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your first name'
                        }
                    }
                },

                email: {
                    validators: {
                        notEmpty: {
                            message: 'Please supply your email address'
                        },
                        emailAddress: {
                            message: 'Please supply a valid email address'
                        }
                    }
                },

            }
        })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({
                opacity: "show"
            }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
});
$('#next').click(function () {
    var divNext = document.createElement('div');
    divNext.addClass('nextBtn');
    $('#nextDiv').append(divNext);
    alert('g');
})

$(document).ready(function () {

});
