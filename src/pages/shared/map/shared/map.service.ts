import { ToastController } from 'ionic-angular';

import * as moment from 'moment/moment';

import { MarkerModel, InfoModel, LatLngStatusModel } from './map.model';

import { Translations } from '../../translate';
import { ToolHelper } from '../../service';

var google: any;

export class MapService {
    public gMap;
    private t = Translations;
    private latLngBounds;
    private lineMarkers = {};
    public lines = [];
    private toastCtrl: ToastController;
    private toolHelper: ToolHelper
    public toast;
    public pinPoint;
    public markerDirectionsDisplay;
    private directionsDisplay = null;
    private zoom = 15;

    constructor(
    ) { }

    loadMap(inputGoogle, mapId, toastCtrl: ToastController, toolHelper: ToolHelper) {

        this.toastCtrl = toastCtrl;
        this.toolHelper = toolHelper;
        let mapDiv = document.getElementById(mapId);

        google = inputGoogle;
        this.gMap = new google.maps.Map(mapDiv, {
            center: { lat: 13.78080, lng: 100.64526 },
            zoom: this.zoom,
        });

        this.latLngBounds = new google.maps.LatLngBounds();
    }

    showToastWithCloseButton(contentString: string) {
        this.toast && this.toast.dismiss();
        this.toast = this.toastCtrl.create({
            message: contentString,
            showCloseButton: true,
            closeButtonText: 'ปิด'
        });

        this.toast.onDidDismiss(() => {
            /*if (this.markerPosition !== null) {
                this.markerPosition.setMap(null);
            }*/
        });

        this.toast.present();

    }

    showToast(info: InfoModel, showUp?: boolean) {
        let up = showUp ? `${this.t.language.Up}: ${info.Up}  \n` : ''
        let contentString = `
            ${this.t.language.License}: ${info.License}  \n                                               
            ${this.t.language.Date}: ${info.StatusDate}  \n                                 
            ${this.t.language.Status}:  ${this.t.language[info.Status]}  \n                                
            ${this.t.language.Speed}: ${info.Speed}  \n                      
            ${this.t.language.Address}:${info.Address}  \n
            ${up} `;

        this.showToastWithCloseButton(contentString);
    }

    private DisplayMarkerPosition(info: InfoModel, marker, showUp?: boolean) {

        if (marker && marker.position) {
            this.setZoom(marker.position);
        }

        this.showToast(info, showUp);
    }

    private setTitle(info: InfoModel): string {
        return info.License + ' | ' + info.StatusDate
    }

    setMarker(markerModel: MarkerModel, showUp?: boolean): any {

        let me = this;

        let marker = this.DisplayMarker(markerModel, me);

        console.log('markerModel', markerModel)
        //let latLngBounds = this.latLngBounds.extend({ lat: markerModel.Lat, lng: markerModel.Lng });
        //this.gMap.fitBounds(latLngBounds);
        this.setZoom({ lat: markerModel.Lat, lng: markerModel.Lng })


        marker.addListener('click', () => {
            me.DisplayMarkerPosition(markerModel.Info, marker, showUp);
        });

        return marker;
    }

    updateMarker(marker: any, markerModel: MarkerModel) {
        if (markerModel && markerModel.Lat && markerModel.Lng) {
            var newLatLng = new google.maps.LatLng(markerModel.Lat, markerModel.Lng);
            var paths = [marker.position, newLatLng];

            let stroke = this.getPolylineOptionByStatus(markerModel.Info.Status)

            var line = new google.maps.Polyline({
                path: paths,
                geodesic: true,
                strokeColor: stroke.strokeColor,
                strokeOpacity: 1,
                strokeWeight: 2
            });

            line.setMap(this.gMap);

            setTimeout(() => {
                console.log('line.setMap(null)');

                line.setMap(null)
            }
                , 3600000);

            let latLngBounds = this.latLngBounds.extend({ lat: markerModel.Lat, lng: markerModel.Lng });
            this.gMap.fitBounds(latLngBounds);


        }
        marker.setPosition(newLatLng);
        marker.setIcon(markerModel.IconPath);
        marker.setTitle(this.setTitle(markerModel.Info));

        let center = this.gMap.getCenter();
        console.log('center', center)
        this.setZoom(center)
    }

    private DisplayMarker(markerModel: MarkerModel, me): any {

        let marker = new google.maps.Marker({
            position: markerModel.Lat && markerModel.Lng ? { lat: markerModel.Lat, lng: markerModel.Lng } : null,
            map: me.gMap,
            icon: markerModel.IconPath,
            title: this.setTitle(markerModel.Info)
        });

        return marker;
    }

    private setZoom(position) {
        let zoom = this.gMap.getZoom();
        console.log('zoom', zoom)
        this.gMap.setZoom(this.zoom < zoom ? this.zoom : zoom);
        this.gMap.setCenter(position);
    }

    getPolylineOptionByStatus(status: string) {

        let strokeColor = "";

        switch (status) {
            default:
                strokeColor = "#006400";
                break;

            case 'Overspeed':
                strokeColor = "#DC143C";
                break;
        }

        return {
            strokeColor: strokeColor,
            strokeOpacity: 1,
        }
    }


    setPolylines(latLngStatusModels: LatLngStatusModel[]) {
        let latLngBounds = this.latLngBounds.extend({ lat: latLngStatusModels[1].Lat, lng: latLngStatusModels[1].Lng });
        this.gMap.fitBounds(latLngBounds);
        for (let i = 1; i < latLngStatusModels.length - 1; i++) {
            if (!latLngStatusModels[i])
                continue;
            let stroke = this.getPolylineOptionByStatus(latLngStatusModels[i].Status)
            let beforeLatLng = this.getBeforeLatLng(latLngStatusModels, i)
            let newLatLng = new google.maps.LatLng(latLngStatusModels[i].Lat, latLngStatusModels[i].Lng);

            let line = new google.maps.Polyline({
                path: [beforeLatLng, newLatLng],
                geodesic: true,
                strokeColor: stroke.strokeColor,
                strokeOpacity: stroke.strokeOpacity,
            });
            line.setMap(this.gMap);
            let latLngBounds = this.latLngBounds.extend({ lat: latLngStatusModels[i].Lat, lng: latLngStatusModels[i].Lng });
            this.gMap.fitBounds(latLngBounds);
        }
    }

    getBeforeLatLng(latLngStatusModels: LatLngStatusModel[], i: number): any {
        if (!latLngStatusModels[i - 1])
            return this.getBeforeLatLng(latLngStatusModels, i - 1);
        return new google.maps.LatLng(latLngStatusModels[i - 1].Lat, latLngStatusModels[i - 1].Lng);
    }
}