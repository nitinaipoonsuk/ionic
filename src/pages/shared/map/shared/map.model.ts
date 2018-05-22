export class MapModel{
    public markerModels: MarkerModel[];
    public name: string;
}

export class MarkerModel implements Marker {
    public Lat?: number;
    public Lng?: number;
    public Info?: InfoModel = new InfoModel();
    public Distance?: number;
    public IconPath?: string;
}

export interface Marker {
    Lat?: number;
    Lng?: number;
    IconPath?: string;
}

export interface InfoMap {
    Head?: number;
    StatusDate: string;
    Status: string;
    Speed?: number;
    Address?: string;
}

export class InfoModel implements InfoMap {
    License?: string;
    Head: number;
    StatusDate: string;
    Up?: string;
    Status: string;
    Speed: number;
    Address: string;
}

export class LatLngStatusModel {
    Status?: string;
    Lat?: number;
    Lng?: number;
}

export class LatLngModel {
    Lat?: number;
    Lng?: number;
}

export class LatLngBounds {
    sw: LatLngModel = new LatLngModel();
    ne: LatLngModel = new LatLngModel();
}