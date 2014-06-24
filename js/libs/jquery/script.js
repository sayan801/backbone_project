$(document).ready(function() {
           //registration script   
            $("#submit").click(function() {
                 
              //var url = 'http://festsocially.com/github/code/index.php?/auth/register_account';
              var url = 'http://localhost/git_souman/webservice/code/index.php?/auth/register_account';
                $.ajax({
                    type: "post",
                    url: url,
                    //cache: false,
                    //contentType: false,
                    //processData: false,
                    data: $("#idForm").serialize(),
                    success: function(data) 
                        {
                            //window.location.reload(true);
                            console.log(data);
                            window.location.href = "../../index.html";
                        }
                       
                });
                //get server request
                /*$.get('http://localhost/git_souman/webservice/code/index.php?/auth/register_account', $(this).serialize(), function(data){
                 //$('#content').html(data);
                 console.log(data);
                 });*/
                return false;
            });
            
            
            
            
        });