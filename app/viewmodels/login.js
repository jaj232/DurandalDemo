define(['plugins/router','durandal/app','knockout',], function (router,app,ko) {
    var login = function () {
		this.displayName = ko.observable("Login");
		
		this.ValidateLogin = function(){
			
			//this block is for demo only.  Real data would not be validated client-side
			//this block of code could be replaced with Ajax code below or some similar
			//server side validation and session setting.
			if($('#username').val() == 'test' && $('#password').val() == '1234')
			{
				router.navigate('incidents');
			}
			else
			{
				alert('Password/Username combination invalid');
			}
/*
			$.ajax({
				url: 'app/validate_login.php',
				type: "POST",
				data: ({username: $('#username').val(),
						password: $('#password').val()
				}),
				success: function(result) {		
					if(result == true)
					{
						router.navigate('incidents');
					}
					else
					{
						alert('Password/Username combination invalid');
					}
				}
			});
*/
		};

    };

    return login;
	
	ko.applyBindings(displayName);
	
});