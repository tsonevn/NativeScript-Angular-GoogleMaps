import {Component} from "@angular/core";
var mapsModule = require("nativescript-google-maps-sdk");

@Component({
    selector: "my-app",
    templateUrl:"view/mainpage.html"
})
export class AppComponent {
    
    nMapReady(args) {
        
       var mapView = args.object;
       console.log("Setting a marker...");
       var marker = new mapsModule.Marker();
       marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
       marker.title = "Sydney";
       marker.snippet = "Australia";
       marker.userData = { index : 1};
       mapView.addMarker(marker);
       
    }
 
    onMarkerSelect(args) {
    console.log("Clicked on " +args.marker.title);
    }
 
    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera)); 
    }
}
