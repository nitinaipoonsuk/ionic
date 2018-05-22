import { HistoryModel, HistoryEventsModel } from '.';



let mockedHistoryEvents: HistoryEventsModel[] = [
    {
        StatusDate: "2017-06-27T00:25:31",
        Status: "Parking",
        Speed: 0,
        Address: "แขวง สนามบิน เขต ดอนเมือง กรุงเทพมหานคร",
        Path: {
            Lat: 13.95089,
            Lng: 100.608137
        },
        Temp1: 35,
        Temp2: 0,
        Head: 279,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:46:12",
        Status: "IgOn",
        Speed: 0,
        Address: "แขวง สนามบิน เขต ดอนเมือง กรุงเทพมหานคร",
        Path: {
            Lat: 13.951108,
            Lng: 100.608692
        },
        Temp1: 30.5,
        Temp2: 0,
        Head: 46,
        Length: 30.844461778733354
    },
    {
        StatusDate: "2017-06-27T07:46:42",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 25,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:47:12",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:47:42",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:48:12",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:48:42",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:49:13",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:49:43",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:50:13",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:50:43",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:51:13",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:51:51",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:52:21",
        Status: "Running",
        Speed: 47,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.956717,
            Lng: 100.620025
        },
        Temp1: 30.5,
        Temp2: 889.5,
        Head: 221,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:52:51",
        Status: "Running",
        Speed: 63,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.953265,
            Lng: 100.62206
        },
        Temp1: 30.5,
        Temp2: -12.5,
        Head: 171,
        Length: 442.22438775543105
    },
    {
        StatusDate: "2017-06-27T07:53:21",
        Status: "Running",
        Speed: 23,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950038,
            Lng: 100.623222
        },
        Temp1: 30.5,
        Temp2: -56,
        Head: 123,
        Length: 380.1058722421715
    },
    {
        StatusDate: "2017-06-27T07:53:51",
        Status: "Running",
        Speed: 69,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950217,
            Lng: 100.626718
        },
        Temp1: 30.5,
        Temp2: -43,
        Head: 54,
        Length: 377.79669029713267
    },
    {
        StatusDate: "2017-06-27T07:54:21",
        Status: "Running",
        Speed: 59,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.951535,
            Lng: 100.630705
        },
        Temp1: 30,
        Temp2: -9.5,
        Head: 104,
        Length: 454.5321461644284
    },
    {
        StatusDate: "2017-06-27T07:54:51",
        Status: "Running",
        Speed: 70,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950373,
            Lng: 100.63544
        },
        Temp1: 30,
        Temp2: 263,
        Head: 100,
        Length: 527.0603624760711
    },
    {
        StatusDate: "2017-06-27T07:55:21",
        Status: "Running",
        Speed: 52,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950353,
            Lng: 100.640858
        },
        Temp1: 30,
        Temp2: 293,
        Head: 91,
        Length: 584.688925408094
    },
    {
        StatusDate: "2017-06-27T07:55:51",
        Status: "Running",
        Speed: 32,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.949352,
            Lng: 100.64307
        },
        Temp1: 30,
        Temp2: -105.5,
        Head: 174,
        Length: 263.38383324735497
    },
    {
        StatusDate: "2017-06-27T07:56:23",
        Status: "Running",
        Speed: 9,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.94751,
            Lng: 100.64283
        },
        Temp1: 30,
        Temp2: 103.5,
        Head: 185,
        Length: 206.452095779725
    },
    {
        StatusDate: "2017-06-27T07:56:53",
        Status: "Running",
        Speed: 22,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.94655,
            Lng: 100.642713
        },
        Temp1: 30,
        Temp2: 54,
        Head: 186,
        Length: 107.4912657545435
    },
    {
        StatusDate: "2017-06-27T07:57:23",
        Status: "Running",
        Speed: 41,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.94477,
            Lng: 100.64256
        },
        Temp1: 30,
        Temp2: 99.5,
        Head: 183,
        Length: 198.61447691782868
    },
    {
        StatusDate: "2017-06-27T07:57:53",
        Status: "Running",
        Speed: 58,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.940452,
            Lng: 100.642083
        },
        Temp1: 30,
        Temp2: -14.5,
        Head: 186,
        Length: 482.8913300926743
    },
    {
        StatusDate: "2017-06-27T07:58:23",
        Status: "Running",
        Speed: 37,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.936445,
            Lng: 100.64169
        },
        Temp1: 30,
        Temp2: -32,
        Head: 184,
        Length: 447.572169098591
    },
    {
        StatusDate: "2017-06-27T07:58:53",
        Status: "Running",
        Speed: 37,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.934808,
            Lng: 100.64157
        },
        Temp1: 30,
        Temp2: 91.5,
        Head: 184,
        Length: 182.48621502016027
    },
    {
        StatusDate: "2017-06-27T07:59:23",
        Status: "Running",
        Speed: 46,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932463,
            Lng: 100.643488
        },
        Temp1: 30,
        Temp2: -77.5,
        Head: 102,
        Length: 332.9251737586765
    },
    {
        StatusDate: "2017-06-27T07:59:53",
        Status: "Running",
        Speed: 56,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932423,
            Lng: 100.647447
        },
        Temp1: 30,
        Temp2: -42,
        Head: 91,
        Length: 427.29270293410144
    },
    {
        StatusDate: "2017-06-27T08:00:23",
        Status: "Running",
        Speed: 45,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.9323,
            Lng: 100.651333
        },
        Temp1: 30,
        Temp2: -46,
        Head: 90,
        Length: 419.61423204170745
    },
    {
        StatusDate: "2017-06-27T08:00:53",
        Status: "Running",
        Speed: 56,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932253,
            Lng: 100.654912
        },
        Temp1: 30,
        Temp2: -63,
        Head: 94,
        Length: 386.2942155482251
    },
    {
        StatusDate: "2017-06-27T08:01:23",
        Status: "Running",
        Speed: 30,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932157,
            Lng: 100.658127
        },
        Temp1: 30,
        Temp2: -82,
        Head: 92,
        Length: 347.138913901736
    },
    {
        StatusDate: "2017-06-27T08:01:53",
        Status: "Running",
        Speed: 30,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932087,
            Lng: 100.661557
        },
        Temp1: 30,
        Temp2: -71,
        Head: 84,
        Length: 370.2603037749073
    },
    {
        StatusDate: "2017-06-27T08:02:25",
        Status: "Running",
        Speed: 6,
        Address: "ตำบล ลาดสวาย อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932082,
            Lng: 100.663233
        },
        Temp1: 30,
        Temp2: 90.5,
        Head: 89,
        Length: 180.88109761584622
    },
    {
        StatusDate: "2017-06-27T08:02:56",
        Status: "Running",
        Speed: 6,
        Address: "ตำบล ลาดสวาย อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932078,
            Lng: 100.66392
        },
        Temp1: 30,
        Temp2: 37,
        Head: 87,
        Length: 74.14496741877063
    },
    {
        StatusDate: "2017-06-27T08:03:29",
        Status: "Running",
        Speed: 8,
        Address: "ตำบล ลาดสวาย อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932063,
            Lng: 100.663945
        },
        Temp1: 30,
        Temp2: 2,
        Head: 91,
        Length: 3.1720157581656085
    }
];

let historyModel: HistoryModel =
    {
        HistoryEvents: mockedHistoryEvents,
        AvgSpeed: 34.52,
        TimeRunningTotal: "01:32:20",
        TimeStoppingTotal: "00:02:04",
        TimeParkingTotal: "09:51:47",
        DataAllLength: 190,
        LengthTotal: 47.77,
        License: 'AA-1111',
        CheckTemp1: false,
        CheckTemp2: false
    };

export let MockedHistory: HistoryModel = historyModel;

