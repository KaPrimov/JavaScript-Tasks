function solve(){

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckBox = $('#company');
    let companyInfoField = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let namePattern = /\b[A-Za-z]{3,20}\b/g;
    let passPattern = /\b\w{5,15}\b/g;
    let emailPattern = /^.*@.*?\..*?$/;
    let isValid = false;


    companyCheckBox.on('change', function () {
        //$('#valid').css('display', 'none')
        if (companyCheckBox.is(':checked')) {
            companyInfoField.css('display', 'block');
        } else {
            companyInfoField.css('display', 'none');
        }
    });

    $('#submit').on('click', function(ev){
        validate();
        //console.log(isValid)
        ev.preventDefault();
    });

    function validate() {
        if (!username.val().match(namePattern)) {
            username.css('border', '2px solid red')
            isValid = false
        } else {
            username.css('border', 'none')
            isValid = true
        }

        if (!email.val().match(emailPattern)) {
            email.css('border', '2px solid red');
            isValid = false;
        } else {
            email.css('border', 'none');
            isValid = true;
        }

        if (password.val().match(passPattern)
            && confirmPassword.val() == password.val()) {
            password.css('border', 'none');
            confirmPassword.css('border', 'none')
            isValid = true;
        } else {
            password.css('border', '2px solid red')
            confirmPassword.css('border', '2px solid red')
            isValid = false;
        }


        if(companyCheckBox.is(':checked')){
            if(Number(companyNumber.val()) >= 1000
                && Number(companyNumber.val() <= 9999)){
                companyNumber.css('border', 'none');
                isValid = true
            } else {
                companyNumber.css('border', '2px solid red');
                isValid = false
            }
        }

        if(isValid) {
            $('#valid').show()
        }
    }
}