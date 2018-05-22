import { ReportSelectModel } from './report-select.model';

export let MockReportSelect: ReportSelectModel[] = [
  {
    "Id": 1,
    "License": "สล-9112 กท",
    "BoxSerial": 359853099999015,
    "DailyReport": [
      {
        "Date": "2017-07-01T00:00:00Z",
        "IdleTotalOver": 0,
        "ParkTotalOver": 0,
        "IgOnTotal": 2,
        "IgOffTotal": 3,
        
        "Igs": [
          {
            "StartDate": "2017-07-01T00:00:00",
            "EndDate": "2017-07-01T10:00:00",
            "Period": "10:00:00",
            
          },
          {
            "StartDate": "2017-07-01T10:24:00",
            "EndDate": "2017-07-01T10:25:00",
            "Period": "00:01:00",
            
          },
          {
            "StartDate": "2017-07-01T11:12:00",
            "EndDate": "2017-07-01T11:40:00",
            "Period": "00:28:00",
            
          }
        ],
        "Runs": [
          {
            "StartDate": "2017-07-01T09:36:00",
            "EndDate": "2017-07-01T09:39:00",
            "Period": "00:03:00",
            
          },
          {
            "StartDate": "2017-07-01T09:39:00",
            "EndDate": "2017-07-01T09:41:00",
            "Period": "00:02:00",
            
          },
          {
            "StartDate": "2017-07-01T09:42:00",
            "EndDate": "2017-07-01T09:59:00",
            "Period": "00:17:00",
            
          },
          {
            "StartDate": "2017-07-01T11:14:00",
            "EndDate": "2017-07-01T11:39:00",
            "Period": "00:25:00",
            
          },
          {
            "StartDate": "2017-07-01T11:39:00",
            "EndDate": "2017-07-01T11:40:00",
            "Period": "00:01:00",
            
          }
        ],
        "Stations": [
          {
            "Index": 1,
            "Name": "บ้านดอนเมือง",
            "Idle": "00:03:00",
            "Park": "00:00:00",
            "Run": "00:02:00",
            "Pto": 0,
            "Distance": 0.79,
            "InDateTime": "2017-07-01T09:39:00",
            "OutDateTime": "2017-07-01T09:40:00",
            "Period": "00:01:00",
            "InTemp": 29.5,
            "OutTemp": 29.5
          }
        ],
        "OverTimes": 0,
        "OverMax": 67,
        "IdleTimes": 6,
        "IdleTotal": "00:09:00",
        "ParkTimes": 3,
        "ParkTotal": "13:30:00",
        "TotalUsag": "00:56:00",
        "TotalDis": 16.12,
        "Ig": 2,
        "RunTotal": "00:47:00",
        "RunTimeMax": "00:25:00",
      },
      {
        "Date": "2017-07-02T00:00:00Z",
        "IdleTotalOver": 0,
        "ParkTotalOver": 0,
        "IgOnTotal": 3,
        "IgOffTotal": 5,
        "Igs": [
          {
            "StartDate": "2017-07-02T10:13:00",
            "EndDate": "2017-07-02T10:13:00",
            "Period": "00:00:00",
            
          },
          {
            "StartDate": "2017-07-02T10:13:00",
            "EndDate": "2017-07-02T10:23:00",
            "Period": "00:10:00",
            
          },
          {
            "StartDate": "2017-07-02T11:51:00",
            "EndDate": "2017-07-02T13:36:00",
            "Period": "01:45:00",
            
          }
        ],
        "Runs": [
          {
            "StartDate": "2017-07-02T10:13:00",
            "EndDate": "2017-07-02T10:24:00",
            "Period": "00:11:00",
            
          },
          {
            "StartDate": "2017-07-02T11:52:00",
            "EndDate": "2017-07-02T12:05:00",
            "Period": "00:13:00",
            
          },
          {
            "StartDate": "2017-07-02T13:18:00",
            "EndDate": "2017-07-02T13:19:00",
            "Period": "00:01:00",
            
          },
          {
            "StartDate": "2017-07-02T13:22:00",
            "EndDate": "2017-07-02T13:33:00",
            "Period": "00:11:00",
            
          },
          {
            "StartDate": "2017-07-02T13:34:00",
            "EndDate": "2017-07-02T13:36:00",
            "Period": "00:02:00",
            
          }
        ],
        "Stations": [
          {
            "Index": 1,
            "Name": "บ้านดอนเมือง",
            "Idle": "00:00:00",
            "Park": "10:11:00",
            "Run": "00:05:00",
            "Pto": 0,
            "Distance": 1.76,
            "InDateTime": "2017-07-02T00:02:00",
            "OutDateTime": "2017-07-02T01:32:00",
            "Period": "01:30:00",
            "InTemp": 30.5,
            "OutTemp": 30
          },
          {
            "Index": 2,
            "Name": "big C ดอนเมือง",
            "Idle": "00:00:00",
            "Park": "00:00:00",
            "Run": "00:02:00",
            "Pto": 0,
            "Distance": 0.41,
            "InDateTime": "2017-07-02T10:22:00",
            "OutDateTime": "2017-07-02T10:22:00",
            "Period": "00:00:00",
            "InTemp": 29.5,
            "OutTemp": 29.5
          },
          {
            "Index": 3,
            "Name": "บ้านดอนเมือง",
            "Idle": "00:03:00",
            "Park": "19:53:00",
            "Run": "00:02:00",
            "Pto": 0,
            "Distance": 0.55,
            "InDateTime": "2017-07-02T13:32:00",
            "Period": "1.09:58:00",
            "InTemp": 37,
          }
        ],
        "OverTimes": 0,
        "OverMax": 60,
        "IdleTimes": 3,
        "IdleTotal": "00:06:00",
        "ParkTimes": 4,
        "ParkTotal": "23:14:00",
        "TotalUsag": "00:45:00",
        "TotalDis": 14.39,
        "Ig": 3,
        "RunTotal": "00:39:00",
        "RunTimeMax": "00:13:00",
      },
      {
        "Date": "2017-07-03T00:00:00Z",
        "IdleTotalOver": 0,
        "ParkTotalOver": 0,
        "IgOnTotal": 0,
        "IgOffTotal": 0,
        "Igs": [],
        "Runs": [],
        "Stations": [
          {
            "Index": 3,
            "Name": "บ้านดอนเมือง",
            "Idle": "00:03:00",
            "Park": "19:53:00",
            "Run": "00:02:00",
            "Pto": 0,
            "Distance": 0.55,
            "InDateTime": "2017-07-02T13:32:00",
            "Period": "1.09:58:00",
            "InTemp": 37,
          }
        ],
        "OverTimes": 0,
        "OverMax": 0,
        "IdleTimes": 0,
        "IdleTotal": "00:00:00",
        "ParkTimes": 0,
        "ParkTotal": "09:30:00",
        "TotalUsag": "00:00:00",
        "TotalDis": 0.15,
        "Ig": 0,
        "RunTotal": "00:00:00",
        "RunTimeMax": "00:00:00",
      }
    ],
    "OverTimes": 0,
    "OverMax": 67,
    "IdleTimes": 9,
    "IdleTotal": "00:15:00",
    "ParkTimes": 7,
    "ParkTotal": "1.22:14:00",
    "TotalUsag": "01:41:00",
    "TotalDis": 30.66,
    "Ig": 5,
    "RunTotal": "01:26:00",
    "RunTimeMax": "00:25:00",
  }
]