 function login() {
     var userId = $("input[name='userID']").val();
     var pass = $("input[name='pass']").val();
       if(userId == '' && pass == '')
        alert("UserId and Password is Required....!");
     else if(userId == '' )
        alert("UserId  is Required....!");
     else if(pass == '')
        alert("Password is Required....!");
 else if (userId == 'admin' && pass == '123')
    {
        createSession();
         location.href = 'dashboard';
    }
    else{
        alert("UserId or Password is Incorrect....!");
    }
}

function createSession(){
     //  var userId = $("input[name='userID']").val();
     // var pass = $("input[name='pass']").val();
      formdata = $('#login_form').serialize();
    $.ajax({
        url: baseUrl + "createSessionDataController/createSession",
        type: "POST",
        data : formdata,
        dataType: 'json',
        success: function (data) {   }
    });
}