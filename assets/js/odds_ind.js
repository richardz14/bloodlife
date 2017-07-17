
$(document).ready(function(){

	    function manual_checkbox_status(){
        if($("#manual_odds_ml").is(":checked")){
          $("#status_ml").find('strong').text('ON MANUAL');   
        }else{
          $("#status_ml").find('strong').text('AUTOMATIC');   
        }

        if($("#manual_odds_ou").is(":checked")){
           $("#status_ou").find('strong').text('ON MANUAL');  
        }else{
           $("#status_ou").find('strong').text('AUTOMATIC');  
        }
    }
    
    manual_checkbox_status();

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
            $.post(LB_Admin.siteurl+'manage/match/ajax_enable_manual',LB.helper.security.applyCSRF({ 
                toggle : (t.is(":checked")?'1':'0'),
                match_id : LB_Admin.match_id,
                type : 'moneyline'
        }),function(response){
            if(response.status){} manual_checkbox_status();
        },'json');
        }


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
            $.post(LB_Admin.siteurl+'manage/match/ajax_enable_manual',LB.helper.security.applyCSRF({ 
                toggle : (t.is(":checked")?'1':'0'),
                match_id : LB_Admin.match_id,
                type : 'over_under'
            }),function(response){
                 if(response.status){} manual_checkbox_status();
            },'json');
        }
     // -------------------- over/under


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
       $.post(LB_Admin.siteurl+'manage/match/ajax_toggle_otb',LB.helper.security.applyCSRF({
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
        $.post(LB_Admin.siteurl+'manage/match/ajax_toggle_otb',LB.helper.security.applyCSRF({
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

        setInterval(function(){
        $.getJSON(LB_Admin.siteurl+'manage/match/stream_total_bets/'+LB_Admin.event_id+'/'+LB_Admin.match_id,LB.helper.security.applyCSRF({}),function(response){
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
            
            //net_bets_tt_t1 = Number(response.tt.totals.team_one.over.amount) - Number(response.tt.totals.team_one.under.amount);
            //net_bets_tt_t2 = Number(response.tt.totals.team_two.over.amount) - Number(response.tt.totals.team_two.under.amount);
           
            
             // For manual checkbox 
            
            
            if($("#manual_odds_ou").is(":checked") == false){
                $('.ou_over_odd').text(response.odds.ou.over);
                $('.ou_under_odd').text(response.odds.ou.under);

                $("#ind_over_odd").val(response.odds.ou.over);
                $("#ind_under_odd").val(response.odds.ou.under);
            }
            
            
            if($("#manual_odds_ml").is(":checked")==false){
                $('.ml_t1_odds').text(response.odds.ml.team_one);
                $('.ml_t2_odds').text(response.odds.ml.team_two);
                
                $("#ml_team_odds_1").val(response.odds.ml.team_one);
                $("#ml_team_odds_2").val(response.odds.ml.team_two);
            }
            
            
            
        
            // Net of bets
            //if(isNaN(net_bets_handicap))
            //    net_bets_handicap = 0;
            
            if(isNaN(net_bets_ou))
                net_bets_ou = 0;
            
            $(" #net_of_bets_ou_over, #net_of_bets_ou_under, #net_of_bets_ml_t1, #net_of_bets_ml_t2").text('');
            
            
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
            
        });
                            

    },1000);


});