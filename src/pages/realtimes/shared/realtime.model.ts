import { InfoMap } from '../../shared'

export class RealtimeModel {
    RouteList: RouteModel[] = [];
    DataAllLength: number = 0;
}

export class RouteModel implements InfoMap {
    CustomerBoxId: number;
    License: string;
    Head: number;
    StatusDate: string;
    LastDate: string;
    Up?: string;
    Status: string;
    StatusUrl?: string;
    Speed: number;
    Address: string;
    Paths?: LatLngModel[];
    CheckTemp1: boolean;
    CheckTemp2: boolean;
    Temp1?: string;
    Temp2?: string;

}

export class LatLngModel {
    Lat?: number;
    Lng?: number;
}
