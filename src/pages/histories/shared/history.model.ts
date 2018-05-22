import { InfoMap, LatLngModel, LatLngStatusModel } from '../../shared';

export class HistoryModel {
    DataAllLength: number;
    HistoryEvents: HistoryEventsModel[] = Array<HistoryEventsModel>();
    AvgSpeed: number;
    TimeRunningTotal: string;
    TimeStoppingTotal: string;
    TimeParkingTotal: string;
    LengthTotal: number;
    License: string;
    CheckTemp1: boolean;
    CheckTemp2: boolean;
}

export class HistoryDataGroupEventModel {
    EventStart: HistoryEventsModel;
    EventEnd: HistoryEventsModel;
    MinSpeed: number;
    MaxSpeed: number;
    DistanceStart: number;
    DistanceEnd: number;
}

export class HistoryEventsModel implements InfoMap {
    StatusDate: string;
    Status: string;
    StatusUrl?: string;
    Speed: number;
    Address: string;
    Path: LatLngModel;
    Temp1: number;
    Temp2: number;
    Head: number;
    Length: number;
}


export class HistorySearchModel {
    CustomerBoxId: number;
    Skip: number;
    Take: number;
    Search: string;
    GetTotal: boolean;
}

export class HistoryMarkerModel {
    LatLngStatusModels: LatLngStatusModel[] = [];
}


