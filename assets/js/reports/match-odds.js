$(function(){

	$("#event_dd").on('change',function(){
		var t =$(this);
		if(t.val() != ''){
			$.getJSON(LB_Admin.siteurl+'reports/match/ajax_get_matches/'+t.val(),
                LB.helper.security.applyCSRF({}),
				function(response){
					$("#match_id").html('');
					if(response.result){
						for(var e in response.result){
							var row = response.result[e];
							$("#match_id").append('<option value="'+row.match_id+'">'+row.match_title+'</option>');
						}
					}
			});
		}
	});

	$('select').select2()
        .on("change", function(e) {
          // mostly used event, fired to the original element when the value changes
          var t =$(this);
          //alert(t.val());
    			
        });


});