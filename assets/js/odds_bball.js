$(document).ready(function(){
    
    $("#wrapper").css('padding-left',0);
    $(".side-nav").css('left',0);
    
    function get_manual_checkbox_status(){
        if($("#manual_odds_hc").is(":checked")){
          $("#status_hc").find('strong').text('ON MANUAL');   
        }else{
          $("#status_hc").find('strong').text('AUTOMATIC');   
        }

        if($("#manual_odds_ou").is(":checked")){
           $("#status_ou").find('strong').text('ON MANUAL');  
        }else{
           $("#status_ou").find('strong').text('AUTOMATIC');  
        }

        if($("#manual_odds_ml").is(":checked")){
           $("#status_ml").find('strong').text('ON MANUAL'); 
        }else{
           $("#status_ml").find('strong').text('AUTOMATIC'); 
        }

        if($("#manual_odds_tt").is(":checked")){
            $("#status_tt").find('strong').text('ON MANUAL'); 
        }else{
            $("#status_tt").find('strong').text('AUTOMATIC'); 
        }
    }
    
    get_manual_checkbox_status();
    
    
    
    $("#close_bet_odds").on('click',function(){
        $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : This will set the whole match bet status to CLOSE</strong>',
            buttons: {
                confirm: function () {
                    //$.alert('Confirmed!');
                    window.location.href = LB_Admin.siteurl+'manage/basketball/match/close-match-bet/'+LB_Admin.match_id+'/'+LB_Admin.csrf_lb;
                },
                cancel: function () {},
            }
        });
    });
    
    $('#enable_otb_hc1').change(function () {
         var t = $(this);
    alert(t.is(":checked"));
 });

        /*       for handicap otb         */
    $("#enable_otb_hc").on('click',function(){
        var t = $(this);
        if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling OTB for TEAM BETS.</strong>',
            buttons: {
                confirm: function () {
                     
                    for_handicap_otb_post(t);
                },
                cancel: function () {
                    $('#enable_otb_hc').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
            for_handicap_otb_post(t);
        }
    });
    function for_handicap_otb_post(t){
         $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_toggle_otb',LB.helper.security.applyCSRF({
                    'action' : 'toggle_otb',
                    'target' : 'handicap',
                    'value' : (t.is(":checked")?1:0),
                    'eid' : LB_Admin.event_id,
                     'mid': LB_Admin.match_id
                     }),function(response){
                      //console.log(response);
                     });
    }
    /*       for handicap otb      ---------------------------------   */

     /*       for over/under otb         */
    $("#enable_otb_ou").on('click',function(){
       var t = $(this);
                if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling OTB for OVER-UNDER BETS.</strong>',
            buttons: {
                confirm: function () {
                     
                    for_overunder_otb_post(t);
                },
                cancel: function () {
                    $('#enable_otb_ou').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
            for_overunder_otb_post(t);
        }
    });
     function for_overunder_otb_post(t){
        $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_toggle_otb',LB.helper.security.applyCSRF({
            'action' : 'toggle_otb',
            'target' : 'over_under',
            'value' : (t.is(":checked")?1:0),
            'eid' : LB_Admin.event_id,
            'mid' : LB_Admin.match_id
        }),function(response){
            //console.log(response);
        });
    }
    /*       for over/under otb      ---------------------------------   */


     /*       for moneyline otb         */
    $("#enable_otb_ml").on('click',function(){
       var t = $(this);
                if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling OTB for MONEYLINE BETS.</strong>',
            buttons: {
                confirm: function () {
                     
                    for_moneyline_otb_post(t);
                },
                cancel: function () {
                    $('#enable_otb_ml').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
            for_moneyline_otb_post(t);
        }
    });
         function for_moneyline_otb_post(t){
       $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_toggle_otb',LB.helper.security.applyCSRF({
            'action' : 'toggle_otb',
            'target' : 'moneyline',
            'value' : (t.is(":checked")?1:0),
            'eid' : LB_Admin.event_id,
            'mid' : LB_Admin.match_id
        }),function(response){
            //console.log(response);
        });
    }
 /*       for moneyline otb      ---------------------------------   */

     /*       for teamtatal otb         */
    $("#enable_otb_tt").on('click',function(){
        var t = $(this);
        if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling OTB for TEAMTOTAL BETS.</strong>',
            buttons: {
                confirm: function () {
                     
                    for_teamtotal_otb_post(t);
                },
                cancel: function () {
                    $('#enable_otb_tt').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
            for_teamtotal_otb_post(t);
        }
    });
     function for_teamtotal_otb_post(t){
      $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_toggle_otb',LB.helper.security.applyCSRF({
            'action' : 'toggle_otb',
            'target' : 'teamtotal',
            'value' : (t.is(":checked")?1:0),
            'eid' : LB_Admin.event_id,
            'mid' : LB_Admin.match_id
        }),function(response){
            console.log(response);
        });
    }
  /*       for TEAMTOTAL otb      ---------------------------------   */   


    
    $("#team_handi_1").on('keyup',function(){
        var t = $(this);
        var checkNeg = t.val().indexOf("-");
        var checkPos = t.val().indexOf("+");
        var handicap_2 = $("#team_handi_2");
        
        var newVal = Math.abs(t.val()).toFixed(2);
        // if negative and positive sign not found 
        
        if(newVal > 0){
        if(checkNeg >= 0 && checkPos == -1)
            newVal = "+"+newVal;
        else
            newVal = "-"+newVal;
        }
        
        
        if(!isNaN(newVal) && t.val() != ''){
            t.parent().removeClass('has-error');
            handicap_2.val(newVal);
        }else{
            t.parent().addClass('has-error');
            handicap_2.val('');
        }
           
    });
    $("#team_handi_2").on('keyup',function(){
        var t = $(this);
        var checkNeg = t.val().indexOf("-");
        var checkPos = t.val().indexOf("+");
        var handicap_1 = $("#team_handi_1");
        
        var newVal = Math.abs(t.val()).toFixed(2);
        
        if(newVal > 0){
        // if negative and positive sign not found
        if(checkNeg >= 0 && checkPos == -1)
            newVal = "+"+newVal;
        else
            newVal = "-"+newVal;
        }
       
        if(!isNaN(newVal) && t.val() != ''){
            t.parent().removeClass('has-error');
            handicap_1.val(newVal);
        }   else{
            t.parent().addClass('has-error');
            handicap_1.val('');
        }
        
    });
    
    
    // Manual Checkbox 
    // -------------------- manual editing of odds handicap
    $("#manual_odds_hc").on('click',function(){
        var t = $(this);
               if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling manual editing of odds in TEAM BETS/SPREAD.</strong>',
            buttons: {
                confirm: function () {
                    manual_handicap_(t);
                },
                cancel: function () {
                    $('#manual_odds_hc').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
                            $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be disabling manual editing of odds in TEAM BETS/SPREAD.</strong>',
            buttons: {
                confirm: function () {
                     
                    manual_handicap_(t);
                },
                cancel: function () {
                    $('#manual_odds_hc').prop('checked', true); 
                },
            }
        });
        }
    });
        function manual_handicap_(t){
             $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_enable_manual',LB.helper.security.applyCSRF({ 
                toggle : (t.is(":checked")?'1':'0'),
                match_id : LB_Admin.match_id,
                type : 'handicap'
                }),function(response){
            if(response.status){}  get_manual_checkbox_status();
             },'json');
        }
    // --------------------handicap

  // -------------------- manual editing of odds over/under
    $("#manual_odds_ou").on('click',function(){
        var t = $(this);
         if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling manual editing of odds in OVER-UNDER.</strong>',
            buttons: {
                confirm: function () {
                     
                    manual_OVERUNDER_(t);
                },
                cancel: function () {
                    $('#manual_odds_ou').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
            $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be disabling manual editing of odds in OVER-UNDER.</strong>',
            buttons: {
                confirm: function () {
                     
                    manual_OVERUNDER_(t);
                },
                cancel: function () {
                    $('#manual_odds_ou').prop('checked', true); 
                },
            }
         });
        }
    });
    function manual_OVERUNDER_(t){
            $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_enable_manual',LB.helper.security.applyCSRF({ 
                toggle : (t.is(":checked")?'1':'0'),
                match_id : LB_Admin.match_id,
                type : 'over_under'
            }),function(response){
                 if(response.status){} get_manual_checkbox_status();
            },'json');
        }
     // -------------------- over/under

    // -------------------- manual editing of odds moneyline
    $("#manual_odds_ml").on('click',function(){
        var t = $(this);
            if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling manual editing of odds in MONEYLINE.</strong>',
            buttons: {
                confirm: function () {
                     
                    manual_moneyline_(t);
                },
                cancel: function () {
                    $('#manual_odds_ml').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
                            $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be disabling manual editing of odds in MONEYLINE.</strong>',
            buttons: {
                confirm: function () {
                     
                    manual_moneyline_(t);
                },
                cancel: function () {
                    $('#manual_odds_ml').prop('checked', true); 
                },
            }
        });
        }
    });
     function manual_moneyline_(t){
            $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_enable_manual',LB.helper.security.applyCSRF({ 
                toggle : (t.is(":checked")?'1':'0'),
                match_id : LB_Admin.match_id,
                type : 'moneyline'
        }),function(response){
            if(response.status){} get_manual_checkbox_status();
        },'json');
        }
     // -------------------- moneyline

   // -------------------- manual editing of odds teamtotal
    $("#manual_odds_tt").on('click',function(){
        var t = $(this);
       if (t.is(":checked") == true) {
                $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be enabling manual editing of odds in TEAMTOTAL.</strong>',
            buttons: {
                confirm: function () {
                     
                    manual_teamtotal_(t);
                },
                cancel: function () {
                    $('#manual_odds_tt').prop('checked', false); 
                },
            }
        });
        }else if(t.is(":checked") == false){
                            $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: 'Are you sure you want to perform this action? <br/><strong class="text-danger">WARNING : You will be disabling manual editing of odds in TEAMTOTAL.</strong>',
            buttons: {
                confirm: function () {
                     
                    manual_teamtotal_(t);
                },
                cancel: function () {
                    $('#manual_odds_tt').prop('checked', true); 
                },
            }
          });
        }
    });
     function manual_teamtotal_(t){
           $.post(LB_Admin.siteurl+'manage/basketball/match/ajax_enable_manual',LB.helper.security.applyCSRF({ 
                toggle : (t.is(":checked")?'1':'0'),
                match_id : LB_Admin.match_id,
                type : 'teamtotal'
        }),function(response){
            if(response.status){} get_manual_checkbox_status();
        },'json');
        }
   // --------------------teamtotal    


	setInterval(function(){
        $.getJSON(LB_Admin.siteurl+'manage/basketball/match/stream_total_bets/'+LB_Admin.event_id+'/'+LB_Admin.match_id,LB.helper.security.applyCSRF({}),function(response){

			var net_bets_handicap = 0;
			var net_bets_ou = 0;
            
            var net_bets_ml = 0;
            var net_bets_tt_t1 = 0;
            var net_bets_tt_t2 = 0;
            
            var handicap_t1 = 0;
            var handicap_t2 = 0;
            var ou_over = 0;
            var ou_under = 0;
            
            var total_bets_t1 = 0;
            var total_bets_t2 = 0;
            var total_bets_over = 0;
            var total_bets_under = 0;
            
            
            $('.handicap_team_1_tbet, .handicap_team_1_tamt, .handicap_team_2_tbet, .handicap_team_2_tamt').text(0);

			// HANDICAP
			if(response.handicap.team_one != false){
				$('.handicap_team_1_tbet').text(response.handicap.team_one.total_bets);
				$('.handicap_team_1_tamt').text(response.handicap.team_one.total_amount);
                // Net Bets - Handicap
				net_bets_handicap = Number(response.handicap.team_one.total_amount);
                
                handicap_t1 = Number(response.handicap.team_one.total_amount);
                
                total_bets_t1 = Number(response.handicap.team_one.total_bets);
			}
			
			if(response.handicap.team_two != false){
				$('.handicap_team_2_tbet').text(response.handicap.team_two.total_bets);
				$('.handicap_team_2_tamt').text(response.handicap.team_two.total_amount);
                // Net Bets - Handicap
                
				net_bets_handicap = net_bets_handicap - Number(response.handicap.team_two.total_amount);
                handicap_t2 = Number(response.handicap.team_two.total_amount);
                total_bets_t2 = Number(response.handicap.team_two.total_bets);
			}

            
           
			// OVER-UNDER
			$('.over_total_bets').text(response.over.total_bets);
			$('.over_total_amount').text(response.over.total_amount);
			$('.under_total_bets').text(response.under.total_bets);
			$('.under_total_amount').text(response.under.total_amount);
            
            total_bets_over = (response.over.total_bets!=undefined?Number(response.over.total_bets):0);
            total_bets_under = (response.under.total_bets!=undefined?Number(response.under.total_bets):0);
            
            // MONEYLINE
            $('.ml_t1_totalbets').text(response.ml.totals.team_one.bets);
            $('.ml_t2_totalbets').text(response.ml.totals.team_two.bets);
            
            $('.ml_total_amount_t1').text(response.ml.totals.team_one.amount);
            $('.ml_total_amount_t2').text(response.ml.totals.team_two.amount);
            
            // TEAM TOTAL
            $('.tt_over_total_amount_t1').text(response.tt.totals.team_one.over.amount);
            $('.tt_under_total_amount_t1').text(response.tt.totals.team_one.under.amount);
            $('.tt_over_total_amount_t2').text(response.tt.totals.team_two.over.amount);
            $('.tt_under_total_amount_t2').text(response.tt.totals.team_two.under.amount);
            
            $('.tt_over_total_bets_t1').text(response.tt.totals.team_one.over.bets);
            $('.tt_under_total_bets_t1').text(response.tt.totals.team_one.under.bets);
            $('.tt_over_total_bets_t2').text(response.tt.totals.team_two.over.bets);
            $('.tt_under_total_bets_t2').text(response.tt.totals.team_two.under.bets);
            
            
            // Net Bets - OU
            if(response.over != false){
               net_bets_ou = Number(response.over.total_amount); 
               ou_over = Number(response.over.total_amount); 
            }
            if(response.under != false){
              net_bets_ou = net_bets_ou - Number(response.under.total_amount);  
              ou_under = Number(response.under.total_amount);
            }
            
            net_bets_ml = Number(response.ml.totals.team_one.amount) - Number(response.ml.totals.team_two.amount);
			
            net_bets_tt_t1 = Number(response.tt.totals.team_one.over.amount) - Number(response.tt.totals.team_one.under.amount);
            net_bets_tt_t2 = Number(response.tt.totals.team_two.over.amount) - Number(response.tt.totals.team_two.under.amount);
           
            
             // For manual checkbox 
            if($("#manual_odds_hc").is(":checked")==false){
                $('.h_t1_odds').text(response.odds.handicap.team_one);
                $('.h_t2_odds').text(response.odds.handicap.team_two);

                $("#team_odds_1").val(response.odds.handicap.team_one);
                $("#team_odds_2").val(response.odds.handicap.team_two);
            }
            
            
            if($("#manual_odds_ou").is(":checked") == false){
                $('.ou_over_odd').text(response.odds.ou.over);
                $('.ou_under_odd').text(response.odds.ou.under);

                $("#team_over_odd").val(response.odds.ou.over);
                $("#team_under_odd").val(response.odds.ou.under);
            }
            
            
            if($("#manual_odds_ml").is(":checked")==false){
                $('.ml_t1_odds').text(response.odds.ml.team_one);
                $('.ml_t2_odds').text(response.odds.ml.team_two);
                
                $("#ml_team_odds_1").val(response.odds.ml.team_one);
                $("#ml_team_odds_2").val(response.odds.ml.team_two);
            }
            
            if($("#manual_odds_tt").is(":checked")==false){
                $('.tt_over_odd_t1').text(response.odds.tt.team_one.over);
                $('.tt_under_odd_t1').text(response.odds.tt.team_one.under);
                $('.tt_over_odd_t2').text(response.odds.tt.team_two.over);
                $('.tt_under_odd_t2').text(response.odds.tt.team_two.under);
                
                
                $("#tt_over_t1").val(response.odds.tt.team_one.over);
                $("#tt_under_t1").val(response.odds.tt.team_one.under);
                $("#tt_tscore_t1").val(response.odds.tt.team_one.tscore);
                $("#tt_over_t2").val(response.odds.tt.team_two.over);
                $("#tt_under_t2").val(response.odds.tt.team_two.under);
                $("#tt_tscore_t2").val(response.odds.tt.team_one.tscore);
            }
            
            
            
            
        
            // Net of bets
            if(isNaN(net_bets_handicap))
                net_bets_handicap = 0;
            
            if(isNaN(net_bets_ou))
                net_bets_ou = 0;
            
            $("#net_of_bets_handicap_t1, #net_of_bets_handicap_t2, #net_of_bets_ou_over, #net_of_bets_ou_under, #net_of_bets_ml_t1, #net_of_bets_ml_t2, #net_of_bets_tt_over_t1, #net_of_bets_tt_under_t1, #net_of_bets_tt_over_t2, #net_of_bets_tt_over_t2, #net_of_bets_tt_under_t2").text('');
            
            if(handicap_t1 > handicap_t2){
                $("#net_of_bets_handicap_t1").text(Math.abs(net_bets_handicap).toFixed(2));
            }else if(handicap_t2 > handicap_t1){
                $("#net_of_bets_handicap_t2").text(Math.abs(net_bets_handicap).toFixed(2));
            }
            
            // Over/under
            if(ou_over > ou_under){
                $("#net_of_bets_ou_over").text(Math.abs(net_bets_ou).toFixed(2));
            }else if(ou_under > ou_over){
                $("#net_of_bets_ou_under").text(Math.abs(net_bets_ou).toFixed(2));
            }
            
            // Moneyline
            if(Number(response.ml.totals.team_one.amount) > Number(response.ml.totals.team_two.amount)){
                $("#net_of_bets_ml_t1").text(Math.abs(net_bets_ml).toFixed(2));
            }else if(Number(response.ml.totals.team_two.amount) > Number(response.ml.totals.team_one.amount)){
                $("#net_of_bets_ml_t2").text(Math.abs(net_bets_ml).toFixed(2));
            }
            
            //Teamtotals
            if(Number(response.tt.totals.team_one.over.amount) > Number(response.tt.totals.team_one.under.amount)){
                $("#net_of_bets_tt_over_t1").text(Math.abs(net_bets_tt_t1));
            }else if(Number(response.tt.totals.team_one.over.amount) < Number(response.tt.totals.team_one.under.amount)){
                $("#net_of_bets_tt_under_t1").text(Math.abs(net_bets_tt_t1));
            }
            
            if(Number(response.tt.totals.team_two.over.amount) > Number(response.tt.totals.team_two.under.amount)){
                $("#net_of_bets_tt_over_t2").text(Math.abs(net_bets_tt_t2));
            }else if(Number(response.tt.totals.team_two.over.amount) < Number(response.tt.totals.team_two.under.amount)){
                $("#net_of_bets_tt_under_t2").text(Math.abs(net_bets_tt_t2));
            }
		});
                            

	},1000);
});