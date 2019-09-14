$(document).ready(function () {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < 6; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                document.getElementById("CaptchaDiv").innerHTML = result;
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                $('.btn').click(function () {
                    var genCode = $('#CaptchaDiv').text();
                    var submitCode = $('#CaptchaInput').val();
                    if (genCode == submitCode) {
                        console.log('Success');
                        $(".submit-lhsd").removeAttr("disabled");
                        $('#CaptchaInput').val('');
                        $('.alert').css('color', '#13c51a');
                        $('.alert').css('display', 'block');
                        $('.alert').text('Success recaptcha');
                        setTimeout(function () {
                        $('.alert').css('color', 'red');
                            $('.alert').css('display', 'none');
                            $('.reload').click();
                        }, 1500);
                    }
                    else if (submitCode == '') {
                        $('.alert').css('display', 'block');
                        $('.alert').text('Type recaptcha code');
                    }
                    else {
                        $('.alert').css('display', 'block');
                        $('.alert').text('Incorrect recaptcha');
                        setTimeout(function () {
                            $('.alert').css('display', 'none');
                            $('.reload').click();
                        }, 1500);

                    }
                });
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                $('.reload').click(function () {
                    var result = '';
                    for (var i = 0; i < 6; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    document.getElementById("CaptchaDiv").innerHTML = result;
                    $('#CaptchaInput').val('');
                    $('.alert').css('display', 'none');
                });
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /*var res = '';
                $(document).keypress(function(e){
                    var keynum;
                    if(window.event)    keynum = e.keyCode;
                    else if(e.which)    keynum = e.which;
                    var unicode=e.keyCode? e.keyCode : e.charCode;
                    if(res.length <6)   res += String.fromCharCode(keynum);
                    setTimeout(function () {
                        if(res.length == 6){
                            $('.btn').click();
                            res = '';
                        }
                    }, 300);
                });*/
            });