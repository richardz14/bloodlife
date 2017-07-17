$(function(){
    $("#team1_dd, #team2_dd").on('change',function(){
        var hometeam_dd = $("#hometeam_dd");
       
        hometeam_dd.html('');
        
        var team1_dd = $("#team1_dd");
        var team2_dd = $("#team2_dd");

        if(team1_dd.val() > 0)
            hometeam_dd.append('<option value="'+team1_dd.val()+'">'+team1_dd.find('option:selected').text()+'</option>');

        if(team2_dd.val() > 0)
            hometeam_dd.append('<option value="'+team2_dd.val()+'">'+team2_dd.find('option:selected').text()+'</option>'); 
         
        
        if(team2_dd.val() > 0){
            hometeam_dd.find('option').each(function(){
                if($(this).val() == team2_dd.val()){
                    $(this).attr('selected','selected');
                }
            });
        }else{
            hometeam_dd.val('').trigger('change');
        }
    });
    
    
    $("#rotation_num_t1").on('keyup',function(){
        var t = $(this);
        if(t.val() != ''){
            var num = Number(t.val());
            if(!isNaN(num)){
                $("#rotation_num_t2").val(num + 1);
            }
        }
    });
    
    $("#rotation_num_t2").on('keyup',function(){
        var t = $(this);
        if(t.val() != ''){
            var num = Number(t.val());
            if(!isNaN(num)){
                $("#rotation_num_t1").val(num - 1);
            }
        }
    });
    
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
    
});