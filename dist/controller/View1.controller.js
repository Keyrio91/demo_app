sap.ui.define(["mt/mdg/ko/controller/BaseController","sap/ui/model/Filter","sap/ui/model/FilterOperator","mt/mdg/ko/util/formatter"],function(t,e,n,r){"use strict";return t.extend("mt.mdg.ko.controller.View1",{formatter:r,onNext:function(t){var e=this.getOwnerComponent().getRouter();var n=t.split("/")[t.split("/").length-1];e.navTo("detail",{fruitPath:n})},onAdd:function(){var t=this.getOwnerComponent().getRouter();t.navTo("add")},onSearch:function(t){var r=t.getParameter("query");var o=new e("CATEGORY",n.Contains,r);var i=[o];var a=this.getView().byId("idList").getBinding("items");a.filter(i)},onDeleteData:function(t){var e=this.getView().byId("idList");var n=e.getSelectedItems();for(let t=0;t<n.length;t++){const r=n[t];e.removeItem(r)}},onItemSelect:function(t){var e=t.getParameter("listItem");var n=e.getBindingContextPath();this.onNext(n)}})});
//# sourceMappingURL=View1.controller.js.map