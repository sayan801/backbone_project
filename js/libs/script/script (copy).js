$(document).ready(function() {
           //registration script   
            $("#submit").click(function() {
             
              var url = "http://localhost/git_souman/webservice/code/index.php?/auth/register_account";  
              //var url = 'http://www.festsocially.com/github/code/index.php?/auth/register_account';
              //var url = 'http://127.0.0.1/git_rest/webservice/code/index.php?/auth/register_account';
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
            $("#login").click(function(){
                    
                    //alert("heloo");
                   var url ="http://127.0.0.1/git_souman/webservice/code/index.php?/get_request/login";
                   //var url = "http://127.0.0.1/git_rest/webservice/code/index.php?/get_request/login";
                   //var url = "http://www.festsocially.com/github/code/index.php?/get_request/login";
                    $.ajax({
                        type: "post",
                        data: $("#login_form").serialize(),
                        url: url,
                            success: function(response) 
                              {
                                  //window.location.reload(true);
                                  console.log(response);
                                  //window.location.href = "../../index.html";
                                  if(data =="ok")
                                  {
                                      alert("ok");
                                  } 
                                  else
                                    {
                                        alert("not ok");
                                    }
                           
                              },
                           error:function(xhr){
                               
                               console.log(xhr);
                               //alert("error");
                           }
                            
                    });
                     
                                                       
               $.get('http://localhost/git_souman/webservice/code/index.php?/get_request/login', $(this).serialize(), function(data){
                 //$('#content').html(data);
                 console.log(data);
                 });
               return false;
            }); 
                        
        });
        
      