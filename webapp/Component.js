sap.ui.define(
    ['sap/ui/core/UIComponent'],
    function(UIComponent){
        return UIComponent.extend('mt.mdg.ko.Component',{
            metadata: {                                                      // Must have
                manifest: "json"
            },
            init : function(){                                               // Must have
                //super->constructor()
                //we will call the base class constructor
                UIComponent.prototype.init.apply(this);

                this.getRouter().initialize();
            },
            // createContent: function(){                                       // Must have
            //     var oAppView = new sap.ui.view({
            //         id: "idAppView",
            //         viewName: "mt.mdg.ko.view.App",
            //         type: "XML"
            //     });

            //     //From the root view object get the container object
            //     var oAppCon = oAppView.byId("idAppCon");
 
            //     //Create child view objects
            //     var oView1 = new sap.ui.view({
            //         id: "idView1",
            //         viewName: "mt.mdg.ko.view.View1",
            //         type: "XML"
            //     });

            //     var oView2 = new sap.ui.view({
            //         id: "idView2",
            //         viewName: "mt.mdg.ko.view.View2",
            //         type: "XML"
            //     });

            //     // oAppCon.addPage(oView1).addPage(oView2);
            //     oAppCon.addMasterPage(oView1).addDetailPage(oView2);
            //     return oAppView;
            // },
            destroy: function(){                                             // Must have

            }
        });
});