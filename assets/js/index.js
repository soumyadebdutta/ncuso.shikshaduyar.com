$(document).ready(function(){
    $('#Schools').click(function(){
        $("#ncuso-box").hide();
        $("#Notification_box").hide();
        $("#signin-form-box").hide();
        $("#School-Cards").show();
    });
    $('#Ncuso').click(function(){
        $("#School-Cards").hide();
        $("#Notification_box").hide();
        $("#signin-form-box").hide();
        $("#ncuso-box").show();
    });
    $('#Notification').click(function(){
        $("#School-Cards").hide();
        $("#ncuso-box").hide();
        $("#signin-form-box").hide();
        $("#Notification_box").show();
    });
    $('#SignIn-Up').click(function(){
        $("#School-Cards").hide();
        $("#ncuso-box").hide();
        $("#Notification_box").hide();
        $("#signin-form-box").show();

    });

    $('#showSignUpform').click(function(){
       $("#signin-form-box").hide();
       $("#signup-form-box").show();

   });
   $('#showSignInform').click(function(){
       $("#signup-form-box").hide();
       $("#signin-form-box").show();

   });
   $('#showForgetform').click(function(){
       $("#signin-form-box").hide();
       $("#forgetpassword-form-box").show();
   });
   $('#back').click(function(){
       $("#forgetpassword-form-box").hide();
       $("#signin-form-box").show();
   });
});