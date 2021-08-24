({
    getAccounts : function(component, helper) {
        var action = component.get("c.getAccountList");
        action.setCallback(this, function(response) {
            var state = response.getState();
            var data;
            if(state === 'SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.recordList", result);
            }
        });
        $A.enqueueAction(action);
    },
    deleteRow: function(component, row) {  
        var i = row.Id;
        alert(i);
        var act = component.get("c.deleteLead");
        act.setParams({
            LId : i
        });
        act.setCallback(this,function(resp)
                        {
                            var rs = resp.getReturnValue();
                            component.set("v.conList",rs);
                        });
        $A.enqueueAction(act);
        $A.get('e.force:refreshView').fire();

    },
    
})
