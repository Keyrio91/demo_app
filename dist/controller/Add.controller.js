sap.ui.define(["mt/mdg/ko/controller/BaseController","sap/m/MessageBox","sap/m/MessageToast","sap/ui/core/Fragment","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/model/json/JSONModel"],function(e,t,o,r,i,s,a){"use strict";return e.extend("mt.mdg.ko.controller.Add",{onInit:function(){var e=this.getOwnerComponent().getRouter();e.getRoute("add").attachMatched(this.herculis,this);this.oLocalModel=new a;this.setDefaultData();this.getView().setModel(this.oLocalModel,"local")},productId:null,onLoadProduct:function(){this.productId=this.oLocalModel.getProperty("/prodData/PRODUCT_ID");var e=this.getView().getModel();var t=this;t.getView().setBusy(true);e.read("/ProductSet('"+this.productId+"')",{success:function(e){t.oLocalModel.setProperty("/prodData",e);t.getView().setBusy(false);t.setMode("Update")},error:function(){t.getView().setBusy(false)}})},mode:"Create",setMode:function(e){if(e==="Update"){this.getView().byId("prodId").setEnabled(false);this.getView().byId("idSave").setText("Update")}else{this.getView().byId("prodId").setEnabled(true);this.getView().byId("idSave").setText("Create")}this.mode=e},onSave:function(){var e=this.oLocalModel.getProperty("/prodData");if(!e.PRODUCT_ID){t.error("Oops! are you forgetting something 😒");return""}var r=this.getView().getModel();if(this.mode==="Create"){r.create("/ProductSet",e,{success:function(e){o.show("wahalla! you made it Amigo!")},error:function(e){t.error(JSON.parse(e.responseText).error.innererror.errordetails[0].message);debugger}})}else{r.update("/ProductSet('"+this.productId+"')",e,{success:function(e){o.show("wahalla! you updated it Amigo!")},error:function(e){t.error(JSON.parse(e.responseText).error.innererror.errordetails[0].message);debugger}})}},onLoadExp:function(){var e=this.oLocalModel.getProperty("/prodData/CATEGORY");var t=this.getView().getModel();var o=this;t.callFunction("/GetMostExpensiveProduct",{urlParameters:{I_CATEGORY:e},success:function(e){o.oLocalModel.setProperty("/prodData",e);o.getView().setBusy(false);o.setMode("Update")}})},oSupplierPopup:null,oField:null,onConfirm:function(e){var t=e.getParameter("selectedItem");var o=t.getTitle();this.oField.setValue(o);this.getView().byId("suppName").setText(t.getDescription())},onF4Help:function(e){this.oField=e.getSource();var t=this;if(!t.oSupplierPopup){r.load({name:"mt.fin.ap.ab.fragments.popup",id:"supplier",controller:this}).then(function(e){t.oSupplierPopup=e;t.oSupplierPopup.setMultiSelect(false);t.oSupplierPopup.setTitle("Choose Supplier");t.getView().addDependent(t.oSupplierPopup);t.oSupplierPopup.bindAggregation("items",{path:"/SupplierSet",template:new sap.m.StandardListItem({icon:"sap-icon://supplier",title:"{BP_ID}",description:"{COMPANY_NAME}"})});t.oSupplierPopup.open()})}else{t.oSupplierPopup.open()}},setDefaultData:function(){this.oLocalModel.setData({prodData:{PRODUCT_ID:"",TYPE_CODE:"PR",CATEGORY:"Notebooks",NAME:"",DESCRIPTION:"",SUPPLIER_ID:"0100000046",SUPPLIER_NAME:"SAP",TAX_TARIF_CODE:"1 ",MEASURE_UNIT:"EA",PRICE:"0.00",CURRENCY_CODE:"EUR",DIM_UNIT:"CM",PRODUCT_PIC_URL:"/sap/public/bc/NWDEMO_MODEL/IMAGES/"}})},onClear:function(){this.setDefaultData();this.setMode("Create")},herculis:function(e){},onBack:function(){this.getView().getParent().to("idView1")}})});
//# sourceMappingURL=Add.controller.js.map