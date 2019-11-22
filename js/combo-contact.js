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

    // validate combo-basic-form
    $(function () {
        $('#combo-basic-form').validate({
            ignore: ".ignore",
            rules: {
                name: {
                    required: true,
                },
                email: {
                    email: true,
                    required: true,
                },
                subject: {
                    required: true,
                },
                tel: {
                    required: true,
                    phone: true
                },
                message: {
                    required: true,
                    minlength: 5
                },
                quantity: {
                    required: true,
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
                    minlength: "Por favor, el mensaje debe ser mayor a 5 caracteres",
                    required: "Por favor, ingresa tu mensaje",
                },
                quantity: {
                    required: "Por favor, indique una cantidad"
                }
                /*hiddenRecaptcha: {
                    required: "Por favor, complete el recaptcha"
                }*/
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                $('#combo-basic-form button').prop('disabled', true)
                $('#combo-basic-form button > i').toggleClass('hidden')

                //if (grecaptcha.getResponse()) {
                $(form).ajaxSubmit({
                    type: "POST",
                    url: "contact_combo.php",
                    data: $(form).serialize(),

                    success: function () {
                        $('#combo-basic-form').fadeTo("slow", 1, function () {
                            var that = this
                            $(this).resetForm();
                            $(this).find('label').css('cursor', 'default');
                            $(this).find('.alert-success').removeClass('hidden').fadeIn()

                            setTimeout(function () {
                                $(that).find('.alert-success').fadeOut('slow')
                            }, 3000)
                        })
                        $('#combo-basic-form button').prop('disabled', false)
                        $('#combo-basic-form button > i').toggleClass('hidden')
                    },
                    error: function () {
                        $('#combo-basic-form').fadeTo("slow", 1, function () {
                            var that = this
                            $(this).find('.alert-error').removeClass('hidden').fadeIn()

                            setTimeout(function () {
                                $(that).find('.alert-error').fadeOut('slow')
                            }, 3000)
                        })

                        $('#combo-basic-form button').prop('disabled', false)
                        $('#combo-basic-form button > i').toggleClass('hidden')
                    }
                })
                /*} else {
                    alert('Por favor, complete el recaptcha')
                }*/


            }
        })
    })

    // validate combo-hygiene-form
    $(function () {
        $('#combo-hygiene-form').validate({
            ignore: ".ignore",
            rules: {
                name: {
                    required: true,
                },
                email: {
                    email: true,
                    required: true,
                },
                subject: {
                    required: true,
                },
                tel: {
                    required: true,
                    phone: true
                },
                message: {
                    required: true,
                    minlength: 5
                },
                quantity: {
                    required: true,
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
                    minlength: "Por favor, el mensaje debe ser mayor a 5 caracteres",
                    required: "Por favor, ingresa tu mensaje",
                },
                quantity: {
                    required: "Por favor, indique una cantidad"
                }
                /*hiddenRecaptcha: {
                    required: "Por favor, complete el recaptcha"
                }*/
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                $('#combo-hygiene-form button').prop('disabled', true)
                $('#combo-hygiene-form button > i').toggleClass('hidden')

                //if (grecaptcha.getResponse()) {
                $(form).ajaxSubmit({
                    type: "POST",
                    url: "contact_combo.php",
                    data: $(form).serialize(),

                    success: function () {
                        $('#combo-hygiene-form').fadeTo("slow", 1, function () {
                            var that = this
                            $(this).resetForm();
                            $(this).find('label').css('cursor', 'default');
                            $(this).find('.alert-success').removeClass('hidden').fadeIn()

                            setTimeout(function () {
                                $(that).find('.alert-success').fadeOut('slow')
                            }, 3000)
                        })
                        $('#combo-hygiene-form button').prop('disabled', false)
                        $('#combo-hygiene-form button > i').toggleClass('hidden')
                    },
                    error: function () {
                        $('#combo-hygiene-form').fadeTo("slow", 1, function () {
                            var that = this

                            $(this).find('.alert-error').removeClass('hidden').fadeIn()

                            setTimeout(function () {
                                $(that).find('.alert-error').fadeOut('slow')
                            }, 3000)
                        })

                        $('#combo-hygiene-form button').prop('disabled', false)
                        $('#combo-hygiene-form button > i').toggleClass('hidden')
                    }
                })
                /*} else {
                    alert('Por favor, complete el recaptcha')
                }*/


            }
        })
    })

    // validate combo-mix-form
    $(function () {
        $('#combo-mix-form').validate({
            //ignore: ".ignore",
            rules: {
                name: {
                    required: true,
                },
                email: {
                    email: true,
                    required: true,
                },
                subject: {
                    required: true,
                },
                tel: {
                    required: true,
                    phone: true
                },
                message: {
                    required: true,
                    minlength: 5
                },
                quantity: {
                    required: true,
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
                    minlength: "Por favor, el mensaje debe ser mayor a 5 caracteres",
                    required: "Por favor, ingresa tu mensaje",
                },
                quantity: {
                    required: "Por favor, indique una cantidad"
                }
                /*hiddenRecaptcha: {
                    required: "Por favor, complete el recaptcha"
                }*/
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                $('#combo-mix-form button').prop('disabled', true)
                $('#combo-mix-form button > i').toggleClass('hidden')

                //if (grecaptcha.getResponse()) {
                $(form).ajaxSubmit({
                    type: "POST",
                    url: "contact_combo.php",
                    data: $(form).serialize(),

                    success: function () {
                        $('#combo-mix-form').fadeTo("slow", 1, function () {
                            var that = this

                            $(this).resetForm();
                            $(this).find('label').css('cursor', 'default');
                            $(this).find('.alert-success').removeClass('hidden').fadeIn()

                            setTimeout(function () {
                                $(that).find('.alert-success').fadeOut('slow')
                            }, 3000)
                        })

                        $('#combo-mix-form button').prop('disabled', false)
                        $('#combo-mix-form button > i').toggleClass('hidden')
                    },
                    error: function () {
                        $('#combo-mix-form').fadeTo("slow", 1, function () {
                            var that = this

                            $(this).find('.alert-error').removeClass('hidden').fadeIn()

                            setTimeout(function () {
                                $(that).find('.alert-error').fadeOut('slow')
                            }, 3000)
                        })

                        $('#combo-mix-form button').prop('disabled', false)
                        $('#combo-mix-form button > i').toggleClass('hidden')
                    }
                })
                /*} else {
                    alert('Por favor, complete el recaptcha')
                }*/


            }
        })
    })

})(jQuery)