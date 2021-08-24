({
        showModalBox: function(component, event, helper) {
        document.getElementById("backGroundSectionId").style.display = "none";
        document.getElementById("editAccSectionModal").style.display = "none";
    },
    
    doInit: function(component, event, helper) {
        var actions = [
            { label: "Show details", name: "show_details" },
            { label: "Delete", name: "delete" },
            { label: "Edit", name: "edit" }
        ];
        component.set("v.columns", [
          
            {
                label: "Name",
                fieldName: "Name",
                sortable: true,
                type: "text",
                initialWidth: 300
            },
            
            {
                label: "Comapny",
                fieldName: "Company",
                sortable: true,
                type: "text",
                initialWidth: 300
            },
            
            {
                label: "Phone",
                fieldName: "Phone",
                sortable: true,
                type: "text",
                initialWidth: 300
            },
            
            {
                label: "Email",
                fieldName: "Email",
                sortable: true,
                type: "text",
                initialWidth: 240
            },
            
            {
                label: "Status	",
                fieldName: "Status",
                sortable: true,
                type: "text",
                initialWidth: 200
            },
            
           { type: "action", typeAttributes: { rowActions: actions } }
        ]);
        helper.getAccounts(component, helper);
    },
    
    handleRowAction: function(component, event, helper) {
        var action = event.getParam("action");
        var row = event.getParam("row");
       var i = row.Id;
        // alert(i);
        switch (action.name) {
            case "show_details":
                alert("Showing Details: " + JSON.stringify(row));
                break;
            case "delete":
                helper.deleteRow(component, row);
                break;
            case "edit":
               var row = event.getParam("row");
          //    alert('This is my alert '+row.Id);
          var i = row.Id;
              
           component.set("v.lds",i);
                component.set("v.bShowModal",true);
               
                document.getElementById("editAccSectionModal").style.display = "block";
                var name = row.Name;
                var nameArr = name.split(' ')  
                var firstName = nameArr[0]?nameArr[0]:''
                var lastName = nameArr[1]?nameArr[1]:''
               component.find("editFname").set("v.value",firstName)
               component.find("editLName").set("v.value",lastName)
               component.find("editLeadCompany").set("v.value", row.Company)
                
                break;
        }
    },
   
    
});
