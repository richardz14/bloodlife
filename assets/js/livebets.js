var LB = {    
    helper : {
        security : {
            applyCSRF : function(data){
                var csrfKeyToken = [];
                csrfKeyToken[LB_Admin.lb_cstoken_name] = LB_Admin.csrf_lb; 
                var newData = $.extend(csrfKeyToken, data);
                return Object.assign({},newData);
            }
        }
    }  
};