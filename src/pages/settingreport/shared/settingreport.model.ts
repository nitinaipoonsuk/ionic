export class SettingreportModel {
    Id: number;
    License: string;
    LicenseIds?: string;
    IdleMinute: number;
    OverSpeedMax: number;
    OverSpeedMinute: number;
    ParkMinute: number;
    showDetails?: boolean = false;


}


export class SettingreportListModel{
    SettingreportModel: SettingreportModel[] = [];
}