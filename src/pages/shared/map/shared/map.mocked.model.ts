import { MarkerModel, InfoModel, MapModel } from './map.model';



let mockedMarkerModel: MarkerModel[] = [
    {
        Lat: 13.123456,
        Lng: 100.52146,
        IconPath: './app/shared/map/map-marker.png',
    },
    {
        Lat: 10.123456,
        Lng: 90.52146,
        IconPath: './app/shared/map/map-marker.png'
    },
    {
        Lat: 17.123456,
        Lng: 95.52146,
    }
];

let mockedMapRealtimeModel: MapModel = {
    markerModels: mockedMarkerModel,
    name: 'Mocked Realtime'
};

export let MockedMapModel: MapModel = mockedMapRealtimeModel;
