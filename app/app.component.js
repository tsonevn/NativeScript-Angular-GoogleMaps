"use strict";
var core_1 = require("@angular/core");
var mapsModule = require("nativescript-google-maps-sdk");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.nMapReady = function (args) {
        var mapView = args.object;
        console.log("Setting a marker...");
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        mapView.addMarker(marker);
    };
    AppComponent.prototype.onMarkerSelect = function (args) {
        console.log("Clicked on " + args.marker.title);
    };
    AppComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "view/mainpage.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map