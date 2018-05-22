export class ReportSelectModel {
  Id: number;
  License: string;
  BoxSerial: number;
  DailyReport: DailyReportModel[];
  OverTimes: number;
  OverMax: number;
  IdleTimes: number;
  IdleTotal: string;
  ParkTimes: number;
  ParkTotal: string;
  TotalUsag: string;
  TotalDis: number;
  Ig: number;
  RunTotal: string;
  Runs?: DetailOfDaily[];
  RunTimeMax: string;
  DriveOverTime?: string;
}

export class DailyReportModel {
  Date: string;
  IdleTotalOver: number;
  ParkTotalOver: number;
  IgOnTotal: number;
  IgOffTotal: number;
  RunTotal: string;
  OverTimes: number;
  OverMax: number;
  IdleTimes: number;
  IdleTotal: string;
  ParkTimes: number;
  ParkTotal: string;
  TotalUsag: string;
  TotalDis: number;
  Ig: number;
  Igs?: DetailOfDaily[];
  Stations?: StationModel[];
  DriveOverTime?: string;
  Runs?: DetailOfDaily[];
  RunTimeMax: string;
}

export class StationModel {
  Index: number;
  Name: string;
  Idle: string;
  Park: string;
  Run: string;
  Pto: number;
  Distance: number;
  InDateTime?: string;
  OutDateTime?: string;
  Period: string;
  InTemp?: number;
  OutTemp?: number;
}

export class DetailOfDaily {
  StartDate: string;
  EndDate: string;
  Period: string;
  Note?: string;
}