sap.ui.define([
    "mt/mdg/ko/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "mt/mdg/ko/util/formatter"
], function(Controller, Filter, FilterOperator, Formatter) {
    'use strict';
    return Controller.extend("mt.mdg.ko.controller.View1", {
        formatter : Formatter,
        // sFruitPath
        onNext:function(sFruitPath){
            // This is use without Router
            //Step 1: get the mother object - app container
            // var oAppCon = this.getView().getParent();
            // //Step 2: Navigate to next view
            // oAppCon.to("idView2");

            // This is use Router
            var oRouter = this.getOwnerComponent().getRouter();
            // ///please navifate for us to detail  /fruits/2
            // var sIndex = sFruitPath.split("/")[2]; // Get Index
            // oRouter.navTo("detail",{
            //     fruitPath: sIndex
            //     });

            var sIndex = sFruitPath.split("/")[sFruitPath.split("/").length - 1];
            oRouter.navTo("detail",{
                fruitPath: sIndex
            });
        },
        onAdd: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("add");
        },
        onSearch: function(oEvent){
            //check the event documentation for search, there is a query parameter
            var sQuery = oEvent.getParameter("query");
            //construct a model filter object - operand OPERATOR operand
            // var oFilter1 = new Filter("name", FilterOperator.Contains, sQuery);
            // var oFilter2 = new Filter("type", FilterOperator.Contains, sQuery);
            // var oFilter = new Filter({
            //     filters : [oFilter1, oFilter2],
            //     and: false
            // });
            //var aFilter = [oFilter];
            //construct a model filter object - operand OPERATOR operand
            var oFilter1 = new Filter("CATEGORY", FilterOperator.Contains, sQuery);
            var aFilter = [oFilter1];
            //Pass the filter object on our items aggregation
            var oAgg = this.getView().byId("idList").getBinding("items");
            //Inject our filter to the binding
            oAgg.filter(aFilter);
        },
        onDeleteData: function(oAnubhav){
            var oList = this.getView().byId("idList");
            //get the event parameter from SDK which item to be deleted
            var aItemsToBeDeleted = oList.getSelectedItems();
            for (let i = 0; i < aItemsToBeDeleted.length; i++) {
               const element = aItemsToBeDeleted[i];
               //Remove the item which was suppose to be from list
               oList.removeItem(element);
             }
          
       },
       onItemSelect: function(oEvent){
           //Step 1: get the object of selected item
           var oSelect = oEvent.getParameter("listItem");
           //Step 2: get the element path
           var sPath = oSelect.getBindingContextPath();
           //Step 3: get the view2 object
           //var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
           //Step 4: bind the view 2 with the element
           //oView2.bindElement(sPath);
           //Trigger navigation
           this.onNext(sPath);
       },

    })
   
});