var validations = [
    {
        "type": "text",
        "name": "company",
        "required": true,
        "validation": [
            ""
        ]
    },
    {
        "type": "text",
        "name": "dept",
        "required": true,
        "validation": [
            ""
        ]
    },
    {
        "type": "text",
        "name": "role",
        "required": false,
        "validation": [
            ""
        ]
    },
    {
        "type": "text",
        "name": "tel",
        "required": true,
        "validation": [
            "tel_exc_hyphen"
        ]
    },
    {
        "type": "text",
        "name": "email",
        "required": true,
        "validation": [
            "email"
        ]
    },
    {
        "type": "text",
        "name": "email_confirm",
        "required": true,
        "validation": [
            "email"
        ]
    },
    {
        "type": "textarea",
        "name": "message",
        "required": true,
        "validation": []
    },
    {
        "type": "checkbox",
        "name": "howyouknow[]",
        "required": false,
        "validation": []
    },
    {
        "type": "checkbox",
        "name": "agree[]",
        "required": true,
        "validation": []
    },
    {
        "type": "text",
        "name": "kanji-01",
        "required": true,
        "validation": []
    },
    {
        "type": "text",
        "name": "kanji-02",
        "required": true,
        "validation": []
    },
    {
        "type": "text",
        "name": "kana-01",
        "required": true,
        "validation": []
    },
    {
        "type": "text",
        "name": "kana-02",
        "required": true,
        "validation": []
    }
];
$(function() {
    $.each(validations, function() {
        var target = $('[name="' + this.name + '"]');
        if(this.required && target.val() == '') {
            target.addClass('invalid-field')
        }

        var _this = this;
        target.on('keyup keydown change', function() {
            if(_this.required && $(this).val() == '') {
                $(this).addClass('invalid-field');
            } else {
                $(this).removeClass('invalid-field');
            }
            
            if($.inArray('email', _this.validation) != -1) {
                if(!$(this).val().match(/^[^@]+@[^@]+$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }

            if($.inArray('tel', _this.validation) != -1) {
                if(!$(this).val().match(/^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('tel_inc_hyphen', _this.validation) != -1) {
                if(!$(this).val().match(/^[0-9]{2,4}-[0-9]{2,4}-[0-9]{3,4}$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('tel_exc_hyphen', _this.validation) != -1) {
                if(!$(this).val().match(/^[0-9]{9,11}$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('postal', _this.validation) != -1) {
                if(!$(this).val().match(/^[0-9]{3}-?[0-9]{4}$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('postal_inc_hyphen', _this.validation) != -1) {
                if(!$(this).val().match(/^[0-9]{3}-[0-9]{4}$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('postal_exc_hyphen', _this.validation) != -1) {
                if(!$(this).val().match(/^[0-9]{7}$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('num', _this.validation) != -1) {
                if(!$(this).val().match(/^[0-9]+$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('year', _this.validation) != -1) {
                var year = parseInt($(this).val());
                if(isNaN(year)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('month', _this.validation) != -1) {
                var month = parseInt($(this).val());
                if(isNaN(month) || month < 1 || month > 12) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('day', _this.validation) != -1) {
                var day = parseInt($(this).val());
                if(isNaN(day) || day < 1 || month > 31) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
            
            if($.inArray('zenkaku_kana', _this.validation) != -1) {
                if(!$(this).val().match(/^[ァ-ヶー]*$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }

            if($.inArray('zenkaku_eisu', _this.validation) != -1) {
                if(!$(this).val().match(/^[ａ-ｚＡ-Ｚ０-９]*$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }

            if($.inArray('hankaku_eisu', _this.validation) != -1) {
                if(!$(this).val().match(/^[a-zA-Z0-9]*$/)) {
                    $(this).addClass('invalid-field');
                } else {
                    $(this).removeClass('invalid-field');
                }
            }
        });
    });
});