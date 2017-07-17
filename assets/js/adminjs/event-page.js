$(function(){
    $("#category_dd").on('change',function(){
        var t = $(this);
        if(t.val() != ''){
            $("#subcategory_dd").html('');
            $.post(LB_Admin.siteurl+'manage/events/ajax_get_subcategory',LB.helper.security.applyCSRF({ cat_id : t.val() }),function(response){
                if(response.length > 0){
                    for(var u in response){
                        $("#subcategory_dd").append('<option value="'+response[u].cat_id+'">'+response[u].category_name+'</option>');
                    }         
                }
            },'json');
        }else{
            $("#subcategory_dd").html('');
        }
    });
});