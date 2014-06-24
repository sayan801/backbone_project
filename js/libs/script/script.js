$(document).ready(function() {
    //registration script   
    $("#submit").click(function() {

        //var url = "http://127.0.0.1/git_rest/webservice/code/index.php?/auth/register_account";
        var url = 'http://www.festsocially.com/github/code/index.php?/auth/register_account';
        //var url = 'http://127.0.0.1/git_souman/webservice/code/index.php?/auth/register_account';
        $.ajax({
            type: "post",
            url: url,
            data: $("#idForm").serialize(),
            success: function(data)
            {
                console.log(data);
                window.location.href = "../../index.html";
            },
            error: function() {
                console.log('error');
            }
        });

        return false;
    });
    //*******End registration script************

    //login script
    $("#login").click(function() {

        //var url = "http://127.0.0.1/git_rest/webservice/code/index.php?/get_request/login";
        //var url = "http://127.0.0.1/git_souman/webservice/code/index.php?/get_request/login";
        var url = "http://www.festsocially.com/github/code/index.php?/get_request/login";
        var username =$("#login_form").serialize();
        $.cookie("username", username);
         //$.session.set("userName", username);
        //alert(username);
        $.ajax({
            type: "post",
            url: url,
            data: $("#login_form").serialize(),
            success: function(data) {

                //console.log(i);
                if (data == 1)
                {
                    //alert("ok");
                    window.location.href = "templates/home/home.html";
                }
                else
                    alert("wrong username and password");

            },
            error: function() {
                console.log('error');
            }

        });
        //url_2="http://www.festsocially.com/github/code/index.php?/get_request/get_user_data";
//        var url ="http://127.0.0.1/git_rest/webservice/code/index.php?/get_request/get_user_data";
//          $.getJSON(url,function(result){
//            $.each(result, function(i, field){
//                //$("#username").append(field.uacc_fk + " ");
//                cinsloe.log(field);
//            });
//        });

        return false;
    });
    //************End Login script*****************  
});


var OAUTHURL = 'https://accounts.google.com/o/oauth2/auth?';
var VALIDURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
var CLIENTID = '1006216033805-2l01174e0098s607sptpq599c04kvh7n.apps.googleusercontent.com';
var REDIRECT = 'http://edusocially.com/github/code/templates/home/home.html';
var LOGOUT = 'http://accounts.google.com/Logout';
var TYPE = 'token';
var _url = OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
var acToken;
var tokenType;
var expiresIn;
var user;
var loggedIn = false;

function login() {
   var win = window.open(_url, "windowname1", 'width=800, height=600');

    var pollTimer = window.setInterval(function() {
        try {
            console.log(win.document.URL);
            if (win.document.URL.indexOf(REDIRECT) != -1) {
                window.clearInterval(pollTimer);
                var url = win.document.URL;
                acToken = gup(url, 'access_token');
                tokenType = gup(url, 'token_type');
                expiresIn = gup(url, 'expires_in');
                win.close();

                validateToken(acToken);
            }
        } catch (e) {
        }
    }, 500);
}

function validateToken(token) {
    $.ajax({
        url: VALIDURL + token,
        data: null,
        success: function(responseText) {
            getUserInfo();
            loggedIn = true;
            $('#loginText').hide();
            $('#logoutText').show();
        },
        dataType: "jsonp"
    });
}

function getUserInfo() {
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        success: function(resp) {
            user = resp;
            console.log(user);
            var userFname = user.given_name;
            var userLname = user.family_name;
            var userEmail = user.email;
            $.cookie("userEmail", userEmail);
            //alert($.cookie("userEmail"));
            user_existance(userEmail,userFname,userLname);
          
            //window.location.href = "http://edusocially.com/github/code/templates/register/registerOauth.html";
        },
        dataType: "jsonp"
    });
}

//credits: http://www.netlobo.com/url_query_string_javascript.html
function gup(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\#&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return "";
    else
        return results[1];
}

function startLogoutPolling() {
    $('#loginText').show();
    $('#logoutText').hide();
    loggedIn = false;
    $('#uName').text('Welcome ');
    $('#imgHolder').attr('src', 'none.jpg');
}
function user_existance(userEmail,userFname,userLname){
    
     //url="http://www.festsocially.com/github/code/index.php?/get_request/checkUserExistance";
     //url="http://127.0.0.1/git_rest/webservice/code/index.php?/get_request/checkUserExistance";
     //var email = "arnab.dutta@mycuratio.com";
      $.ajax({
        type: "post",  
        url: 'http://www.festsocially.com/github/code/index.php?/get_request/checkUserExistance',
        data:'email='+userEmail ,
        success: function(ret,resp) {
            user = resp
            console.log(ret);
            if(ret == 1)
              {
                  console.log("ok");
                  window.location.href = "http://edusocially.com/github/code/templates/home/home.html";
              }
             else{
                console.log("not ok");
                $.cookie("userFname", userFname);
                $.cookie("userLname", userLname);  
                window.location.href = "http://edusocially.com/github/code/templates/register/registerOauth.html"; 
             } 
        }
    });
    
}
//**********end google login***************
//google login