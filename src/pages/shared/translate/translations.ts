import { LangTh } from './lang-th';
import { LangEn } from './lang-en';


export class Languages {
    th: LanguageModel;
    en: LanguageModel;
}

export interface LanguageModel {
    Lang: string;
    Language: string;
    License: string;
    LicenseSelect: string;
    Status: string;
    Speed: string;
    Date: string;
    Up: string;
    Day: string;
    Address: string;
    Realtime: string;
    History: string;
    Report: string;
    Total: string;
    Length: string;
    Km: string;
    KmH: string;
    Runningtime: string;
    Stoppingtime: string;
    Parkingtime: string;
    ConnectionRefused: string;
    PleaseSelect: string;
    ErrorMassage: string;
    Ok: string;
    Loading: string;
    DelayExceeded: string;
    Overspeedtimes: string;
    Overspeedmax: string;
    Idletimes: string;
    Idletotal: string;
    Parktimes: string;
    Parktotal: string;
    TotalUsag: string;
    TotalDis: string;
    Ig: string;
    Reportlist: string;
    StartDate: string;
    EndDate: string;
    Period: string;
    Search: string;
    Overspeed: string;
    Idle: string;
    Park: string;
    On: string;
    Off: string;
    All: string;
    Logout: string;
    Login: string,
    Running: string;
    Idling: string;
    IgOff: string;
    IgOn: string;
    Parking: string;
    ParkingLost: string;
    IgOnLost: string;
    IgOffLost: string;
    RunningLost: string;
    PtoOff: string;
    PtoOn: string;
    Unplug: string;
    PlugIn: string;
    BoxReset: string;
    IdlingStart: string;
    ParkRunning: string;
    NotFound: string;
    Back: string;
    More: string;
    Translation: string;
    ChangePassword: string,
    CurrentPassword: string,
    NewPassword: string,
    ReNewPassword: string,
    ChangeLanguage: string,
    Close: string,
    Done: string,
    Username: string,
    Match: string,
    DoNot: string,
    Password: string,
    Other: string,
    Setting: string,
    VehicleSetting: string,
    Vehicle: string,
    ShowDaily: string,
    Chart: string,
    ReportStatus: string,
    ReportDailyStatus: string,
    ReportDistanceDaily: string,
    ReportOverSpeed: string,
    Next: string,
    CheckAll: string,
    UnCheckAll: string,
    SettingReportDetail: string,
    Custom: string
    OverSpeedMax: string;
    OverSpeedTimes: string,
    IdleTimes: string,
    ParkTimes: string,
    Save: string,
    Temp1: string,
    Temp2: string,
    HiddenAndShowTemp: string,
    SelectGroup: string,
    Station: string,
    StationName: string,
    InDateTime: string,
    OutDateTime: string,
    InTemp: string,
    OutTemp: string,
    RunTimeMax: string,
    SureLogOut: string,
    And: string,
    Help: string,
    Remember: string
}

export class TranslationManage {

    languages: Languages = new Languages();

    constructor() {
        this.register();
    }

    register() {
        this.languages.th = LangTh;
        this.languages.en = LangEn;
    }

    get(lang: string) {
        return this.languages[lang];
    }
}
export class Translations {
    static language: LanguageModel = LangTh;
    static getHistoryTotal(historyModel): string {
        return `[${this.language.Length} : ${historyModel.LengthTotal || 0} 
        ${this.language.Km}][${this.language.Speed} : ${historyModel.AvgSpeed || 0} 
        ${this.language.KmH}][${this.language.Runningtime} : ${historyModel.TimeRunningTotal || 0}]
        [${this.language.Stoppingtime} : ${historyModel.TimeStoppingTotal || 0}][${this.language.Parkingtime} : ${historyModel.TimeParkingTotal || 0}]`
    }

    static getByValueEn(val: string): string {
        let langEn = LangEn;
        for (var key in langEn) {
            if (val == langEn[key])
                return this.language[key];
        }
        return val;
    }
}