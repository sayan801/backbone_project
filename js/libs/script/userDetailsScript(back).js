$(document).ready(function() {
            //$("#press").click(function(){ 
            var get_userName = $.session.get('userName');
            //var get_userName = $.cookie("username");
            //$.removeCookie(get_userName);
            //alert(get_userName);
            var url = "http://127.0.0.1/git_souman/webservice/code/index.php?/get_request/get_user_data";
            //var url ="http://www.festsocially.com/github/code/index.php?/get_request/get_user_data";
           $.ajax({
                    type: "post",
                    url: "http://127.0.0.1/git_souman/webservice/code/index.php?/get_request/get_user_data",
                    data: get_userName,
                    success: function()
                    {
                        //window.location.reload(true);
                        console.log(data);
                    }
               });   
         $.getJSON(url, function(result) {
                $.each(result, function(i, field) {
                    $("#username").append(field.uacc_first_name + "&nbsp;" + field.uacc_last_name);
                    //$("#dob_1").append(field.dob1);
                    $("#ph_1").append(field.uacc_phone_no);
                    $("#email_1").append(field.uacc_email);
                    $("#ac_type_1").append(field.uacc_type);
                    var username = field.uacc_username;
                        if (username !== get_userName)
                        {
                           // window.location.href = "../../index.html";
                        }
                });
            });

            $('#killsession').click(function() {
                url_2 ="http://127.0.0.1/git_souman/webservice/code/application/controllers/session_kill.php";
                //url ="http://www.festsocially.com/github/code/application/controllers/session_kill.php";
               $.get(url_2, function(data) {
                    //alert("the server page executed");
                    //Here you may do further things.
                    //alert("ok");
                    console.log(data);
                    window.location = "../../index.html";
                    //window.location = "http://edusocially.com/github/code/";
                });
                
                //delete_cookie(cookie);
            });

            //});
        });