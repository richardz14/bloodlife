$(function(){
    
    $('#event_id').on('change',function(){
		var t = $(this);
		var dd_match = $("#match_id");
		dd_match.html('');
		if(t.val() != ''){
			$.post(LB_Admin.siteurl+'agents/commissions/ajax_get_matches/' + t.val(),
				LB.helper.security.applyCSRF({ get : 1 }),function(response){
				if(response.result){
					for(i in response.result){
						var row = response.result[i];
						dd_match.append('<option value="'+row.match_id+'">'+row.match_title+'</option>');
					}
				}
			},'json');
		}

		dd_match.select2({
			placeholder : '-- SELECT --'
		});
	});
    
	/*$("#event_dd").on('change',function(){
		var t = $(this);
		if(t.val() != ''){
			$.getJSON(LB_Admin.siteurl+'agents/players/ajax_get_matches/'+t.val(),
				function(response){
				$("#match_dd").html('');	
				for(var mid in response){
					$("#match_dd").append('<option value="'+mid+'">'+response[mid]+'</option>');
				}

				$("#match_dd").select2();
			});
		}
	});*/

	/* Datatables */
	$('.datatable').DataTable({
		responsive : true
	});

	$('.datatable-withexport').DataTable({
		responsive : true,
		order : [],
		drawCallback : function(){
			$('.fancybox').fancybox();
			$('.chkpicker').checkboxpicker();
		},
		dom: 'Bflrtip',
		pageLength: 100,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
	});

	$('.select2').select2();

	$('.fancybox').fancybox();


	/* Events */
	$('.select-fgt').on('click',function(){
		$('.bet-input').attr('disabled','disabled').removeAttr('required');
		$(this).parents('tr').find('.bet-input')
			.removeAttr('disabled')
				.attr('required','required');
	});

});