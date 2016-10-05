define(['plugins/router','durandal/app','knockout'], function (router,app,ko) {
    var incidents = function () {
        this.displayName = 'All Incidents';

		this.header = [
            'Reference Number',
            'Summary',
            'Current Status',
            'Logged',
            'End User',
            'Minutes To Breach',
        ];

		//this is a sample json response.
		//this block could be replaced with ajax code below, or 
		//something similar depending on the backend used.
		this.incident = [
            { Ref:'1', Sum:'incident 1', CurStat:'Awaiting Response', 
			    Logged:'01/10/2016 5:00:00', EndUser:'SA', Min:'0'},
            { Ref:'2', Sum:'incident 2', CurStat:'Awaiting Response', 
			    Logged:'02/10/2016 5:00:00', EndUser:'SA', Min:'0'},
			{ Ref:'3', Sum:'incident 3', CurStat:'Awaiting Response', 
			    Logged:'03/10/2016 5:00:00', EndUser:'SA', Min:'0'},
			{ Ref:'4', Sum:'incident 4', CurStat:'Awaiting Response',
 			    Logged:'04/10/2016 5:00:00', EndUser:'SA', Min:'0'},
			{ Ref:'5', Sum:'incident 5', CurStat:'Awaiting Response',
   			    Logged:'05/10/2016 5:00:00', EndUser:'SA', Min:'0'},
			{ Ref:'6', Sum:'incident 6', CurStat:'Awaiting Response', 
			    Logged:'06/10/2016 5:00:00', EndUser:'SA', Min:'0'},
        ];

/*
		this.incident = function(){
			var d;
			$.ajax({
				url: 'app/incident_data.php',
				type: "POST", 
				success: function(result) {
					d = result;
				}
			});
			return d;
		};
*/	
		
    };
    return incidents;
});








