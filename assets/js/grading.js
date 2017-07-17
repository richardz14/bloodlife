$(document).ready(function(){


    $(".team_btn_update").on('click',function(){
    	var t  = $(this);
        $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: '<strong class="text-danger"> Please confirm to proceed. </strong>',
            buttons: {
                confirm: function () {
                	t.parents('form').submit();
                   // window.location.href = LB_Admin.siteurl+'manage/basketball/match/close-match-bet/'+LB_Admin.match_id+'/'+LB_Admin.csrf_lb;
                },
                cancel: function () {},
            }
        });
    });
	

	    $(".individual_btn_update").on('click',function(){
    	var t  = $(this);
        $.confirm({
            type : 'red',
            title: 'Confirm Action',
            content: '<strong class="text-danger"> Please confirm to proceed. </strong>',
            buttons: {
                confirm: function () {
                	t.parents('form').submit();
                   // window.location.href = LB_Admin.siteurl+'manage/basketball/match/close-match-bet/'+LB_Admin.match_id+'/'+LB_Admin.csrf_lb;
                },
                cancel: function () {},
            }
        });
    });

});