sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1salvador.controller.Home", {
            onInit: function () {
                this.router = sap.ui.core.UIComponent.getRouterFor(this);
            },

            onSendBtn: function(oEvent) {
                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sStreet = oView.byId("StreetInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var sTech = oView.byId("TechInput").getSelectedKey();

                /*this.getRouter().navTo("Detail",{
                    sNamept:sName,
                })*/
                MessageToast.show("Your name is " + sName + ", your street is " + sStreet + ", your age is " + sAge + ", your tech is " + sTech);
              //  debugger;
            },

            /*onPressSendBtn: function(){
                this.router.navTo("Detail");
                this.getRouter().navTo(Detail);
            },*/
            
            getRouter: function(){
                return sap.ui.core.UIComponent.getRouterFor(this);
            }
        });
    });
