$(document).ready(function() {

    //var get_userName = $.session.get('userName');
    var get_userName = $.cookie("username");
    var get_email = $.cookie("userEmail");
    console.log(get_email);
    user_authenticaion_type();
    
    $('#killsession').click(function() {
       
 
       $.cookie("userEmail",null);
       alert($.cookie("userEmail"));
       //$.removeCookie("userEmail",null);
        window.location = "../../index.html";
    });

    function user_authenticaion_type() {
        var url = "http://www.festsocially.com/github/code/index.php?/get_request/checkUserauthType";
        $.ajax({
            type: "post",
            url: url,
            data: "email=" + get_email,
            success: function(i, data)
            {
                console.log(i);
               if (i==1) {
                  //oprnid user user
                  console.log("openid user user");
                    var url = "http://www.festsocially.com/github/code/index.php?/get_request/get_openIduser_data";
  
                    $.ajax({
                        type: "post",
                        url: url,
                        data: "email=" + get_email,
                        success: function(i, data)
                        {
                            //console.log(i[0]);
                            var database_username = i[0].uacc_username;
                            $.cookie("database_username", database_username);
                            $("#username").append(i[0].uacc_first_name + "&nbsp;" + i[0].uacc_last_name);
                            $("#ph_1").append(i[0].uacc_phone_no);
                            $("#email_1").append(i[0].uacc_email);
                            $("#ac_type_1").append(i[0].uacc_type);
                            //alert(i[0].uacc_username);

                        },
                        error: function()
                        {
                            //alert("error");
                            console.log("error");
                        }
                    });

                }
                else {
                    //open id user
                    var url = "http://www.festsocially.com/github/code/index.php?/get_request/get_user_data";
                    console.log("nativ id user");
                    $.ajax({
                        type: "post",
                        url: url,
                        data: get_userName,
                        success: function(i, data)
                        {
                            console.log(i);
                            $("#username").append(i[0].uacc_first_name + "&nbsp;" + i[0].uacc_last_name);
                            $("#ph_1").append(i[0].uacc_phone_no);
                            $("#email_1").append(i[0].uacc_email);
                            $("#ac_type_1").append(i[0].uacc_type);
                            //alert(i[0].uacc_username);

                        },
                        error: function()
                        {
                            //alert("error");
                            console.log("error");
                        }
                    });
                }

            },
            error: function()
            {
                //alert("error");
                console.log("error");
            }
        });

    }

});