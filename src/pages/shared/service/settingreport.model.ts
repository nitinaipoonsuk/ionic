export class SettingreportModel{
    Id: number;
    License: string;
    IdleTimes: number;
    OverSpeedTiems: number;
    ParkTime: number;
}

export class SettingreportListModel{
    SettingreportModel: SettingreportModel[] = [];
}