$(function(){
   setInterval(function(){
       $.post(LB_Admin.siteurl+'agents/players/ajax-get-match-odds',LB.helper.security.applyCSRF({
           eid : LB_Admin.eid,
           mid : LB_Admin.mid
       }),function(response){
           $('.t1_odds_h').text(Number(response.odds.handicap.team_one).toFixed(2));
           $('.t2_odds_h').text(Number(response.odds.handicap.team_two).toFixed(2));
           $('.over_odd').text(Number(response.odds.ou.over).toFixed(2));
           $('.under_odd').text(Number(response.odds.ou.under).toFixed(2));
       },'json');
   },3000);
});