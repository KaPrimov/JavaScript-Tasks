function solve() {
    return function(){
        let passwordRegex = /^\w{5,15}$/;
        let companyNumRegex = /^[1-9][0-9]{3}$/;

        let emailCheck = false;
        let username = false;
        let password = false;

        $("#registerForm").submit(function(e) {
            e.preventDefault();
        });

        $('input#company').click(function () {
            if($('input#company').attr('checked','checked')){
                $('#companyInfo').attr('style','display-inline');
            }
            if($('#company').not(':checked').length){
                $('#companyInfo').attr('style','display:none');
            }
        });

        $('#username').on('input', function() {
            let input=$(this);
            let re = /^[a-zA-Z0-9]{3,20}$/;
            let is_name=re.test(input.val());
            if(is_name)
            {   username = true;
                //input.css('border', '');
            } else{
                username = false;
                //input.css('border-color', "red");
            }

        });

        <!--Email must be an email -->
        $('#email').on('input', function() {
            var input=$(this);
            var re = /[A-Za-z0-9]+@[A-Za-z0-9]+[.]+[A-Za-z0-9]+/;
            var is_email=re.test(input.val());
            if(is_email && input.val()){
                emailCheck = true;
                //input.css('border', '');
            } else {
                emailCheck = false;
                //input.css('border-color', "red");
            }
        });

        let passwordText = $('#password').val();
        let secondPassText = $('#confirm-password').val();

        let passCheck = passwordRegex.test(passwordText);
        let confirmPassCheck = passwordRegex.test(secondPassText);

        if (passCheck && confirmPassCheck && (passwordText.localeCompare(secondPassText) === true)) {
            password = true
        } else {
            password = false;
        }

        $('#submit').on('click' , function () {
            if (emailCheck === false) {
                $('#email').css('border-color', "red");
            }
            if (username === false) {
                $('#username').css('border-color', "red");
            }
            if (password === false) {
                $('#password').css('border-color', "red");
                $('#confirm-password').css('border-color', "red");
            }
            if ($('#company').is(':checked')){
                let companyNumber = $('#companyNumber').val();
                let comapnyCheck = companyNumRegex.test(companyNumber);
                if (!comapnyCheck) {
                    $('#companyNumber').css('border-color', "red");
                }
            }
        })
    }
}
