 
//****open id registration************
$(document).ready(function() {
          
          //get information form google.Written by arnab
           var userFname = $.cookie("userFname");
           var userLname = $.cookie("userLname");
           var userEmail = $.cookie("userEmail");
           //console.log(userFname);
           $('#first_name').val(userFname);
           $('#last_name').val(userLname);
           $('#email_address').val(userEmail);
    
   $("#submit").click(function() {
        
        //var url = "http://127.0.0.1/git_rest/webservice/code/index.php?/auth/register_account";
        var url = 'http://www.festsocially.com/github/code/index.php?/get_request/submitOpenIdData';
        //var url = 'http://127.0.0.1/git_souman/webservice/code/index.php?/get_request/submitOpenIdData';
        $.ajax({
            type: "post",
            url: url,
            data: $("#idForm").serialize(),
            success: function(data)
            {
                console.log(data);
                window.location.href = "../../templates/home/home.html";
                //window.location.href = "../../index.html";
            },
            error: function() {
                console.log('error');
            }
        });

        return false;
    });
});