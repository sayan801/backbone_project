    
            
//            var L_name = $("#last_name").val();
//            var ph_no = $("#phone_number").val();
//            var email = $("#email_address").val();
//            var zip = $("#zip").val();
//            var month = $("#month").val();
//            var day = $("#day").val();
//            var year = $("#year").val();
//            var pass = $("#password").val();
//            var con_pass = $("#confirm_password").val();
            
   function val_fname(){
       
       var F_name = $("#first_name").val();
       var letters = /^[A-Za-z]+$/;

        if (F_name == "")
        {
            $("#first_name").css({"border-color": "red"});
            return false;
        }
        if (!letters.test(F_name))
        {
            $("#fname_val").html("First name character only")
            $("#fname_val").css({"color": "red"});
            return false;
        }
        else
        {
            $("#first_name").css({"border-color": "green"});
            $("#fname_val").css({"display": "none"});
        }
            
   }
function val_lname(){ 
    var L_name = $("#last_name").val();
    var letters = /^[A-Za-z]+$/;
    
    if (L_name == "")
        {
            $("#last_name").css({"border-color": "red"});
            return false;
        }
        if (!letters.test(L_name))
        {
            $("#lname_val").html("Last name character only")
            $("#lname_val").css({"color": "red"});
            return false;
        }
      else
        {
            $("#last_name").css({"border-color": "green"});
            $("#lname_val").css({"display": "none"});
        }   
}
function val_ph(){
    var ph_no = $("#phone_number").val();
    if (ph_no == "")
        {
            $("#phone_number").css({"border-color": "red"});
            return false;
        }
        if (ph_no.length != 12)
        {
            $("#ph_val").html("Ph no must be 10 digites");
            $("#ph_val").css({"color": "red"});
            return false;
        }
     else
        {
            $("#phone_number").css({"border-color": "green"});
            $("#ph_val").css({"display": "none"});
        }     
    
}
function val_email(){
    
        var email = $("#email_address").val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (email == "")
        {

            $("#email_address").css({"border-color": "red"});
            return false;
        }
        if (!emailReg.test(email))
        {
            $("#email_val").html("Please give valid email adress");
            $("#email_val").css({"color": "red"});
            return false;
        }
         else
        {
            $("#email_address").css({"border-color": "green"});
            $("#email_val").css({"display": "none"});
        }
}
function val_zip(){
       var zip = $("#zip").val();
       if (zip == "")
        {

            $("#zip").css({"border-color": "red"});
            return false;
        }
        if (zip.length != 5)
        {

            $("#zip_val").html("Zip code must be 6 digites");
            $("#zip_val").css({"color": "red"});
            return false;
        }
          else
        {
            $("#zip").css({"border-color": "green"});
            $("#zip_val").css({"display": "none"});
        }
    
}
function val_pass(){val_conpass()
    var pass = $("#password").val();
    var spl_char = /[^a-z0-9\,\.\;]/g;
    if (pass == "")
        {
            $("#password").css({"border-color": "red"});
            return false;
        }
        if (pass.length < 4)
        {
            $("#pass_val").html("password length willbe minimun 4 ");
            $("#pass_val").css({"color": "red"}); 
            return false;
        }
      if (!spl_char.test(pass))
        {
            $("#pass_val").html("password should be contain one charater special character and numeric value");
            $("#pass_val").css({"color": "red"}); 
           return false;
        }   
           else
        {
            $("#password").css({"border-color": "green"});
            $("#pass_val").css({"display": "none"});
        }
    
}
function val_conpass(){
    var pass = $("#password").val();
    var con_pass = $("#confirm_password").val();
    if (con_pass != pass)
        {

            $("#conpass_val").html("Password doesnot match");
            $("#conpass_val").css({"color": "red"});
            return false;
        }
         else
        {
            $("#conpass_val").css({"display": "none"});
        }   
    
}