$(function(){
    // PLUGINS INIT
    if($('.popover').length > 0){
        $('.popover').each(function(){
            var t = $(this);
            t.popover();
            if(t.data('autoshow') == true){
               setTimeout(function(){
                    t.trigger('click');
               },1500);
            }
        });
    }
    
    if($("#manage_sports").val() == ''){
        $("#category-popover").popover({
            delay: { "show": 300, "hide": 100 }
        }).trigger('click');
        $("#manage_sports").parent().on('mouseover',function(){
            $("#category-popover").popover('hide');
        });
    }
   
    
    
    
	var betstack_bbal_handicap = $('.auto_table_betstack_handicap').DataTable({
		"processing": true,
        "serverSide": true,
        "language": {
		     "processing": "Refreshing list. Please wait..."
		},
        "ajax": {
            "url": LB_Admin.siteurl+'alerts/bets/ajax_load_betstack_data_handicap',
            "type": "POST",
            data : function(http){
                http.csrf_lb = LB_Admin.csrf_lb;
            },
            "dataFilter": function(data){
            	var json = jQuery.parseJSON( data );
            	if(json.alert_betstack!=false){
            		for(var l in json.betstack){
        				var betstack = json.betstack[l];
        				$.alert({
						    title: 'Bet stacking detected!',
						    type : 'red',
						    content: 'Bet stacking detected on HANDICAP betting on <br/>Match ID : '+betstack.match_id+'<br/>Event : '+betstack.event_name+'('+betstack.event_id+')<br/>Username : '+betstack.username+'<br/>Bet Amount : '+betstack.bet_amount, 
						    backgroundDismiss: true
						});	
        			}
            	}
        		return JSON.stringify( json ); // return JSON string
       		 }
        }
	});

	var betstack_bbal_ou = $('.auto_table_betstack_ou').DataTable({
		"processing": true,
        "serverSide": true,
        "language": {
		     "processing": "Refreshing list. Please wait..."
		},
        "ajax": {
            "url": LB_Admin.siteurl+'alerts/bets/ajax_load_betstack_data_ou',
            data : function(http){
                http.csrf_lb = LB_Admin.csrf_lb;
            },
            "type": "POST",
            "dataFilter": function(data){
            	var json = jQuery.parseJSON( data );
        		if(json.alert_betstack!=false){
        			for(var l in json.betstack){
        				var betstack = json.betstack[l];
        				$.alert({
						    title: 'Bet stacking detected!',
						    type : 'red',
						    content: 'Bet stacking detected on OVER/UNDER bet on <br/>Match ID : '+betstack.match_id+'<br/>Event : '+betstack.event_name+'('+betstack.event_id+')<br/>Username : '+betstack.username+'<br/>Bet Amount : '+betstack.bet_amount, 
						    backgroundDismiss: true
						});	
        			}
            	}

        		return JSON.stringify( json ); // return JSON string
       		}
        }
	});
    
    
    var betstack_bbal_ml = $('.auto_table_betstack_ml').DataTable({
		"processing": true,
        "serverSide": true,
        "language": {
		     "processing": "Refreshing list. Please wait..."
		},
        "ajax": {
            "url": LB_Admin.siteurl+'alerts/bets/ajax_load_betstack_data_ml',
            data : function(http){
                http.csrf_lb = LB_Admin.csrf_lb;
            },
            "type": "POST",
            "dataFilter": function(data){
            	var json = jQuery.parseJSON( data );
        		if(json.alert_betstack!=false){
        			for(var l in json.betstack){
        				var betstack = json.betstack[l];
        				$.alert({
						    title: 'Bet stacking detected!',
						    type : 'red',
						    content: 'Bet stacking detected on MONEYLINE bet on <br/>Match ID : '+betstack.match_id+'<br/>Event : '+betstack.event_name+'('+betstack.event_id+')<br/>Username : '+betstack.username+'<br/>Bet Amount : '+betstack.bet_amount, 
						    backgroundDismiss: true
						});	
        			}
            	}

        		return JSON.stringify( json ); // return JSON string
       		}
        }
	});
    
    var betstack_bbal_tt = $('.auto_table_betstack_tt').DataTable({
		"processing": true,
        "serverSide": true,
        "language": {
		     "processing": "Refreshing list. Please wait..."
		},
        "ajax": {
            "url": LB_Admin.siteurl+'alerts/bets/ajax_load_betstack_data_tt',
            data : function(http){
                http.csrf_lb = LB_Admin.csrf_lb;
            },
            "type": "POST",
            "dataFilter": function(data){
            	var json = jQuery.parseJSON( data );
        		if(json.alert_betstack!=false){
        			for(var l in json.betstack){
        				var betstack = json.betstack[l];
        				$.alert({
						    title: 'Bet stacking detected!',
						    type : 'red',
						    content: 'Bet stacking detected on TEAM TOTAL bet on <br/>Match ID : '+betstack.match_id+'<br/>Event : '+betstack.event_name+'('+betstack.event_id+')<br/>Username : '+betstack.username+'<br/>Bet Amount : '+betstack.bet_amount, 
						    backgroundDismiss: true
						});	
        			}
            	}

        		return JSON.stringify( json ); // return JSON string
       		}
        }
	});

	setInterval(function(){
		betstack_bbal_handicap.draw(true);
		betstack_bbal_ou.draw(true);
        betstack_bbal_ml.draw(true);
        betstack_bbal_tt.draw(true);
	},3000);



	$('.select-admin-manage').on('change',function(){
		var t = $(this);
		if(t.val() != ''){
            console.log(LB.helper.security.applyCSRF({ request : 1 }));
            $.post(LB_Admin.siteurl+'dashboard/set_manage_type/'+t.val(),
                   LB.helper.security.applyCSRF({}),
				function(rsp){
				window.location.href = LB_Admin.siteurl;
			});
        }
			
	});

	$('.fancybox').fancybox();

	$('.chkpicker').checkboxpicker();

	// --- Plugins
	$('.datatable').each(function(){
        //Options
        //data-pagination=false
        var pagination = $(this).data('pagination');
        // End of Options
        
        var settings = {
            responsive : true,
            //order: [[ 0, "desc" ]]
            order : [],
            drawCallback : function(){
                $('.fancybox').fancybox();
                $('.chkpicker').checkboxpicker();
            }
        };
        
       
        if(pagination != undefined)
            settings.paging = pagination;

        
        $(this).DataTable(settings);
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


	var select2dd = $('.select2').select2({
		placeholder : '-- SELECT --'
	});

	// Single datepicker
	$('.datetimepicker').datetimepicker({
		format : 'YYYY-MM-DD',
		useCurrent : false,
		allowInputToggle : true
	});
    
    $('.datetimepicker_withtime').datetimepicker({
		format : 'YYYY-MM-DD LT',
		useCurrent : false,
		allowInputToggle : true
	});

	$('.datetimepicker_p').datetimepicker({
		format : 'YYYY-MM-DD',
		useCurrent : false,
		allowInputToggle : true
	});
	// --- Plugins

	// --- Linked datepickers
	var max_linked_dp = 3;
	for(var i=1;i<=max_linked_dp;i++){

		if($('#datetimepicker_from_'+i).length > 0)
			$('#datetimepicker_from_'+i).datetimepicker({
				format : 'YYYY-MM-DD',
				useCurrent : false,
				allowInputToggle : true
			});
		
		
		if($('#datetimepicker_to_'+i).length > 0)
			$('#datetimepicker_to_'+i).datetimepicker({
				format : 'YYYY-MM-DD',
				useCurrent : false,
				allowInputToggle : true
			});


		$('#datetimepicker_from_'+i).on("dp.change", function (e) {
	        $('#datetimepicker_to_'+i).data("DateTimePicker").minDate(e.date);
	     });

	    $('#datetimepicker_to_'+i).on("dp.change", function (e) {
	        $('#datetimepicker_from_'+i).data("DateTimePicker").maxDate(e.date);
	    });
	}
	// --- Linked datepickers

	// --- Save tab active
	$('ul.nav-tabs > li a').on('click',function(){
		var t = $(this);
		localStorage.setItem("bs_active_tab", t.attr('href'));
		localStorage.setItem("bs_active_tabpage", 
			window.location.href.split('/').slice(-1)[0]);
	});

	if (typeof(Storage) !== "undefined") {
	    if(localStorage.bs_active_tab 
	    	&& localStorage.bs_active_tabpage){
	    	var slug = window.location.href.split('/').slice(-1)[0];
	    	if(localStorage.bs_active_tabpage == slug)
	    		$('ul.nav-tabs a[href="'+localStorage.bs_active_tab+'"]')
	    		.tab('show');
	    	else{
	    		localStorage.removeItem("bs_active_tab");
	    		localStorage.removeItem("bs_active_tabpage");
	    	}
	    }
	}
	// --- Save tab active
	


	/* Datatable and Bootstrap Fix */
	$('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
     });





	/* Page Scripts */
	// reports/match/winners

	$('#event_id').on('change',function(){
		var t = $(this);
		var dd_match = $("#match_id");
		dd_match.html('');
		if(t.val() != ''){
			$.post(LB_Admin.siteurl+'reports/match/ajax_get_matches/' + t.val(),
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


	//deposits/manual-deposit
	$("#dd_player").on('change',function(){
		var t = $(this);
		if(t.val() != ''){
			$.getJSON(LB_Admin.siteurl+'manage/deposits/ajax_get_player_balance/'+t.val(),
                    LB.helper.security.applyCSRF({}),
                      function(response){
				$("#player_cash_bal").val(response.cash);
			});
		}
	});
    
    
    // ------------------------ BUTTON HELPERS ------------------------
    $(document).on('click','.confirm-btn',function(e){ e.preventDefault();  
        var t = $(this);
        var link = t.attr('href');
        $.confirm({ type : 'red',
            title: 'Are you sure?',
            content: (t.data('confirm-text')!=''? t.data('confirm-text')+'<p class="text-danger">THIS CANNOT BE UNDONE</p>' :  'This cannot be undone. Are you sure you want to remove this record?'),
            buttons: {
                confirm: {
                    text : 'OK',
                    btnClass : 'btn-red',
                    action : function () {
                        window.location.href = link;
                    }
                },
                cancel: function(){}
            }
        });
        
    });
})