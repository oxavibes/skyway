    ;
    (function ($) {
        "use strict";

        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        jQuery.validator.addMethod("phone", function (phone_number, element) {
            phone_number = phone_number.replace(/\s+/g, "");
            return this.optional(element) || phone_number.length > 9 &&
                phone_number.match(/^(?:(?:00|\+)58|0)(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/);
        }, "Por favor, ingresa un numero valido"); 

        // validate contactForm form
        $(function () {
            $('#contact-form').validate({
                //ignore: ".ignore",
                rules: {
                    name: {
                        required: true,
                    },
                    email: {
                        email: true,
                        required: true,
                    },
                    tel: {
                        required: true,
                        phone: true
                    },
                    subject: {
                        required: true,
                    },
                    message: {
                        required: true,
                        minlength: 10
                    },
                    /*hiddenRecaptcha: {
                        required: function () {
                            if (grecaptcha.getResponse() == '') {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }*/
                },
                messages: {
                    name: {
                        required: "Por favor, ingresa tu nombre",
                    },
                    email: {
                        email: "Por favor, ingresa un email válido",
                        required: "Por favor, ingresa tu email"
                    },
                    tel: {
                        required: "Por favor, ingresa tu numero de telefono",
                    },
                    subject: {
                        required: "Por favor, ingresa el asunto",
                    },
                    message: {
                        minlength: "Por favor, el mensaje debe ser mayor a 10 caracteres",
                        required: "Por favor, ingresa tu mensaje",
                    }, 
                    /*hiddenRecaptcha: {
                        required: "Por favor, complete el recaptcha"
                    }*/
                },
                submitHandler: function (form, event){
                    event.preventDefault()
                    //if (grecaptcha.getResponse()) {
                        $(form).ajaxSubmit({
                            type: "POST",
                            url: "contact_process.php",
                            data: $(form).serialize(),

                            success: function () {
                                $('#contact-form :input').attr('disabled', 'disabled');
                                $('#contact-form').fadeTo("slow", 1, function () {
                                    //$(this).find(':input').attr('disabled', 'disabled');
                                    $(this).resetForm();
                                    $(this).find('label').css('cursor', 'default');
                                    $(this).find('.alert-success').removeClass('hidden').fadeIn()
                                })
                            },
                            error: function () {
                                $('#contactForm').fadeTo("slow", 1, function () {
                                    $(this).find('.alert-error').removeClass('hidden').fadeIn()
                                })
                            }
                        })
                    /*} else {
                        alert('Por favor, complete el recaptcha')
                    }*/


                }
            })
        })

    })(jQuery)