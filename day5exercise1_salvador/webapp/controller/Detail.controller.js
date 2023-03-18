sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1salvador.controller.Detail", {
            onInit: function () {
                this.getRouter().getRoute("Detail").attachPatternMatched(this.onObjectMatched, this);
            },

            onObjectMatched: function(oEvent){
                debugger;
            },

            getRouter: function(oEvent) {
                return sap.ui.core.UIComponent.getRouterDor(this);

            }
        });
    });
